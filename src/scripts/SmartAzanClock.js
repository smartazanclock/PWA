import PrayTimes from './PrayTimes'
import { CalculationMethods, HijriMonths, Backgrounds, DefaultSettings, AzanAudio } from './Vars';

var testAzan = {}; // { name: 'isha', time: '18:59' };

const prayTimes = new PrayTimes();

export const SmartAzanClock = {
    settings: { ...DefaultSettings },
    output: {},
    colors: { black: 'black', white: 'whitesmoke' },
    getPrayerTime(vakit) { return this.prayerTimes[vakit].replace(/^0/, ''); },
    run(info) {

        //console.log('SmartAzanClock.run: ' + (info ?? ''))

        let storedSettings = JSON.parse(localStorage.getItem('settings'));
        if (storedSettings)
            this.settings = { ...this.settings, ...storedSettings }

        prayTimes.setMethod(this.settings.calculationSettings.method);
        if (this.settings.calculationSettings.asrMethod === 'H') { prayTimes.adjust({ asr: 'Hanafi' }) } else { prayTimes.adjust({ asr: 'Standard' }) }
        let baseTuneValues = { imsak: 0, sunrise: 0, fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 }
        let methodDefaultTuneValues = CalculationMethods[this.settings.calculationSettings.method].methodOffsets;
        let tuneValues = { ...baseTuneValues, ...methodDefaultTuneValues }
        tuneValues.fajr += parseInt(this.settings.offsetSettings.fajr);
        tuneValues.dhuhr += parseInt(this.settings.offsetSettings.dhuhr);
        tuneValues.asr += parseInt(this.settings.offsetSettings.asr);
        tuneValues.maghrib += parseInt(this.settings.offsetSettings.maghrib);
        tuneValues.isha += parseInt(this.settings.offsetSettings.isha);
        prayTimes.tune({ fajr: tuneValues.fajr, sunrise: tuneValues.sunrise, dhuhr: tuneValues.dhuhr, asr: tuneValues.asr, maghrib: tuneValues.maghrib, isha: tuneValues.isha });

        let nD = new Date();
        this.currentDateTime = new Date(nD.toLocaleString("en-US", { timeZone: this.settings.locationSettings.timeZoneID }));
        this.currentTimeString = this.currentDateTime.getHours() + ':' + fillInZeros(this.currentDateTime.getMinutes());
        this.prayerTimes = prayTimes.getTimes(this.currentDateTime, [this.settings.locationSettings.lat, this.settings.locationSettings.lng, 0], getOffsetHoursFromTimeZone(this.settings.locationSettings.timeZoneID), 0, '24h');

        //azan test
        if (testAzan.name && testAzan.time) {
            this.prayerTimes[testAzan.name] = testAzan.time;
        }

        let vakits = [];
        let vakitCounter = 0;
        vakits.push(new Vakit(vakitCounter, ++vakitCounter, 'Fajr', this.getPrayerTime('fajr'), this.getPrayerTime('sunrise'), this.currentTimeString, 'darkorange'));
        vakits.push(new Vakit(vakitCounter, ++vakitCounter, 'Sunrise', this.getPrayerTime('sunrise'), this.getPrayerTime('dhuhr'), this.currentTimeString, '#EBDE67'));
        vakits.push(new Vakit(vakitCounter, ++vakitCounter, 'Dhuhr', this.getPrayerTime('dhuhr'), this.getPrayerTime('asr'), this.currentTimeString, 'seagreen'));
        vakits.push(new Vakit(vakitCounter, ++vakitCounter, 'Asr', this.getPrayerTime('asr'), this.getPrayerTime('maghrib'), this.currentTimeString, '#0099FF'));
        vakits.push(new Vakit(vakitCounter, ++vakitCounter, 'Maghrib', this.getPrayerTime('maghrib'), this.getPrayerTime('isha'), this.currentTimeString, 'tomato'));
        vakits.push(new Vakit(vakitCounter, 0, 'Isha', this.getPrayerTime('isha'), this.getPrayerTime('fajr'), this.currentTimeString, '#334051'));

        this.currentVakit = vakits.filter(a => a.isCurrentVakit())[0];
        this.nextVakit = vakits.filter(a => a.index === this.currentVakit.nextIndex)[0];

        this.output.vakits = vakits;
        this.output.currentVakit = this.currentVakit;
        this.output.nextVakit = this.nextVakit;
        this.output.elapsed = diffBetweenTimes(this.currentVakit.time, this.currentTimeString);
        let nextText = this.currentVakit.nextVakitIn();

        this.output.todaysDate =
            nD.toLocaleString("en-US", { timeZone: this.settings.locationSettings.timeZoneID, weekday: 'long' })
            + ' ' +
            nD.toLocaleString("en-US", { timeZone: this.settings.locationSettings.timeZoneID, day: 'numeric' })
            + ' ' +
            nD.toLocaleString("en-US", { timeZone: this.settings.locationSettings.timeZoneID, month: 'long', year: 'numeric' });

        let hijriDay = nD.toLocaleDateString('en-SA-u-ca-islamic-umalqura', { timeZone: this.settings.locationSettings.timeZoneID, day: 'numeric' });
        let hijriMonth = nD.toLocaleDateString('en-SA-u-ca-islamic-umalqura', { timeZone: this.settings.locationSettings.timeZoneID, month: 'numeric' });
        let hijriYear = nD.toLocaleDateString('en-SA-u-ca-islamic-umalqura', { timeZone: this.settings.locationSettings.timeZoneID, year: 'numeric' });
        this.output.hijriDate = hijriDay + ' ' + HijriMonths[hijriMonth - 1] + ' ' + hijriYear.replace(/\D/g, '');
        this.output.nextText = nextText;
        this.output.time = this.currentTimeString;
        this.output.displayTime = format12(this.currentTimeString);
        this.output.hourAngle = timeToRadians(this.currentDateTime.getHours() + ':' + this.currentDateTime.getMinutes(), 24);
        this.output.background = Backgrounds[this.currentVakit.name.toLowerCase() + (hijriDay % 3)];
        this.output.clockOpacity = 1;

        if (this.settings.deviceSettings.mode === 'D' || (this.settings.deviceSettings.mode === 'A' && this.currentVakit.name === 'Isha')) {
            this.output.clockOpacity = 0.13;
            this.output.background = Backgrounds['dim'];
        }

        if (this.currentTimeString === this.currentVakit.time && this.settings.deviceSettings.azanCallsEnabled === 'Y') {
            let cvakit = this.currentVakit.name.toLowerCase();
            if (cvakit !== "sunrise") {
                let azanAudioID = this.settings.azanSettings[cvakit] * 1;
                let AU = new AzanAudio(azanAudioID, this.output.time, false);
                let storedAU = JSON.parse(localStorage.getItem("azanAudio"));
                if (!storedAU || storedAU.time !== AU.time) {
                    localStorage.setItem("azanAudio", JSON.stringify({ ...AU }));
                }
            }
        }

        this.output = { ...this.output, ...this.settings };
        return this.output;

    }
};

class Vakit {
    constructor(index, nextIndex, name, time, nextTime, currentTime, color) {
        this.index = index;
        this.nextIndex = nextIndex;
        this.currentTime = currentTime;
        this.name = name;
        this.time = time;
        this.displayTime = format12(time);
        this.nextTime = nextTime;
        this.color = color;
        this.startAngle12 = () => { return timeToRadians(this.time, 12); };
        this.endAngle12 = () => { return timeToRadians(nextTime, 12); };
        this.startAngle24 = () => { return timeToRadians(this.time, 24) };
        this.endAngle24 = () => { return timeToRadians(nextTime, 24) };
        this.nextVakitIn = () => { return diffBetweenTimes(currentTime, nextTime); };
        this.isCurrentVakit = () => { return isTimeBetweenTheTwo(currentTime, time, nextTime); };
    }
}

export const format12 = (t) => {
    let tt = t.split(':');
    let th = tt[0];
    let tm = tt[1];
    /*
    let ap = 'ᴬ';
    if (th >= 12)
        ap = 'ᴾ'
    */
    th = th % 12;
    if (th === 0)
        th = 12;
    return th + ':' + tm; /* + ap */
}
const timeToRadians = (t, m) => {

    let adj = Math.PI / 2; /* 0 bottom */
    if (m === 12)
        adj = -Math.PI / 2; /* 0 top */

    let tt = t.toString().split(':');
    let angle = ((tt[0] * 60 + tt[1] * 1) * 2 * Math.PI / (m * 60)) + adj;
    angle = (angle % (2 * Math.PI));
    return angle;
    /* 24 hours = 1140 mins =  2Pi*/
}
const fillInZeros = (n) => {
    if (n < 10) {
        n = '0' + n
    }
    return n;
}
const diffBetweenTimes = (startTime, endTime) => {
    let diffMinutes = diffMinutesBetweenTimes(startTime, endTime);
    let diffH = Math.floor(diffMinutes / 60);
    let diffM = diffMinutes % 60;
    let r = diffH + ':' + fillInZeros(diffM);
    return (r);
}
const diffMinutesBetweenTimes = (startTime, endTime) => {
    let st = getTotalMinutes(startTime);
    let et = getTotalMinutes(endTime);
    let diffMinutes = et - st;
    if (st > et) {
        diffMinutes = 1440 - (st - et);
    }
    return diffMinutes;
}
const isTimeBetweenTheTwo = (time, startTime, endTime) => {
    let t = getTotalMinutes(time);
    let s = getTotalMinutes(startTime);
    let e = getTotalMinutes(endTime);

    let r = false;

    if (e > s) {
        if (t >= s && t < e) {
            r = true;
        }
    }
    else {
        r = !isTimeBetweenTheTwo(time, endTime, startTime);
    }

    return r;

}
const getTotalMinutes = (t) => {
    let tt = t.split(':');
    return tt[0] * 60 + tt[1] * 1;
}
const getOffsetHoursFromTimeZone = (tz) => {
    let date = new Date();
    let utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    let tzDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    return (tzDate.getTime() - utcDate.getTime()) / 3600000;
}

