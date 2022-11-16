import fajr0 from '../images/bg/fajr/0.jpg'; import fajr1 from '../images/bg/fajr/1.jpg'; import fajr2 from '../images/bg/fajr/2.jpg';
import sunrise0 from '../images/bg/sunrise/0.jpg'; import sunrise1 from '../images/bg/sunrise/1.jpg'; import sunrise2 from '../images/bg/sunrise/2.jpg';
import dhuhr0 from '../images/bg/dhuhr/0.jpg'; import dhuhr1 from '../images/bg/dhuhr/1.jpg'; import dhuhr2 from '../images/bg/dhuhr/2.jpg';
import asr0 from '../images/bg/asr/0.jpg'; import asr1 from '../images/bg/asr/1.jpg'; import asr2 from '../images/bg/asr/2.jpg';
import maghrib0 from '../images/bg/maghrib/0.jpg'; import maghrib1 from '../images/bg/maghrib/1.jpg'; import maghrib2 from '../images/bg/maghrib/2.jpg';
import isha0 from '../images/bg/isha/0.jpg'; import isha1 from '../images/bg/isha/1.jpg'; import isha2 from '../images/bg/isha/2.jpg';
import dim0 from '../images/bg/dim0.jpg';

import audio1 from '../mp3s/1.mp3'; import audio2 from '../mp3s/2.mp3'; import audio3 from '../mp3s/3.mp3';
import audio4 from '../mp3s/4.mp3'; import audio5 from '../mp3s/5.mp3'; import audio6 from '../mp3s/6.mp3';
import audio7 from '../mp3s/7.mp3'; import audio8 from '../mp3s/8.mp3'; import audio9 from '../mp3s/9.mp3';
import audio10 from '../mp3s/10.mp3'; import audio11 from '../mp3s/11.mp3'; import audio12 from '../mp3s/12.mp3';
import audio13 from '../mp3s/13.mp3';import audio14 from '../mp3s/14.mp3';
import audio101 from '../mp3s/101.mp3'; import audio102 from '../mp3s/102.mp3'; import audio103 from '../mp3s/103.mp3';

import surah001 from '../mp3s/Quran/001.mp3';
import surah018 from '../mp3s/Quran/018.mp3';
import surah032 from '../mp3s/Quran/032.mp3';
import surah036 from '../mp3s/Quran/036.mp3';
import surah067 from '../mp3s/Quran/067.mp3';
import surah078 from '../mp3s/Quran/078.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCheck, faEnvelope, faEraser, faGear, faBookOpen, faInfoCircle, faRectangleXmark, faPlay, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const FA = {
    check: <FontAwesomeIcon icon={faCheck} />,
    search: <FontAwesomeIcon icon={faSearch} />,
    envelope: <FontAwesomeIcon icon={faEnvelope} />,
    eraser: <FontAwesomeIcon icon={faEraser} />,
    gear: <FontAwesomeIcon icon={faGear} />,
    book: <FontAwesomeIcon icon={faBookOpen} />,
    info: <FontAwesomeIcon icon={faInfoCircle} />,
    close: <FontAwesomeIcon icon={faRectangleXmark} />,
    play: <FontAwesomeIcon icon={faPlay} />,
    shield: <FontAwesomeIcon icon={faShieldHalved} />,
    github: <FontAwesomeIcon icon={faGithub} />
}

export const DefaultSettings = {
    locationSettings: {
        address: 'Al-Masjid An-Nabawi', timeZoneID: 'Asia/Riyadh', lat: '24.4672105', lng: '39.611131'
    },  /* صلى الله عليه وعلى آله وسلم */
    calculationSettings: { method: 'ISNA', asrMethod: 'S' },
    deviceSettings: { azanCallsEnabled: 'Y', mode: 'N', },
    azanSettings: { fajr: 13, dhuhr: 7, asr: 9, maghrib: 8, isha: 7 },
    offsetSettings: { fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 },
    settingsVersion: 16
}

export const CalculationMethods = {
    Algerian: { name: 'Algerian Ministry of Religous Affairs', params: { fajr: 18, isha: 17 }, methodOffsets: {} },
    Egypt: { name: 'Egyptian General Authority of Survey', params: { fajr: 19.5, isha: 17.5 }, methodOffsets: {} },
    FranceAngle18: { name: 'France - 18° Angle', params: { fajr: 18, isha: 18 }, methodOffsets: {} },
    FranceUOIFAngle12: { name: 'France UOIF - 12° Angle', params: { fajr: 12, isha: 12 }, methodOffsets: {} },
    ISNA: { name: 'ISNA (Islamic Society of North America)', params: { fajr: 15, isha: 15 }, methodOffsets: {} },
    JAKIM: { name: 'Jabatan Kemajuan Islam Malaysia', params: { fajr: 20, isha: 18 }, methodOffsets: {} },
    KEMENAG: { name: 'Kementrian Agama Indonesia', params: { fajr: 20, isha: 18 }, methodOffsets: {} },
    Kuwait: { name: 'Kuwait', params: { fajr: 18, isha: 17.5 }, methodOffsets: {} },
    UIPTL: { name: 'London Unified Islamic Prayer Timetable', params: { fajr: 12, isha: 12 }, methodOffsets: {} },
    MUIS: { name: 'Majlis Ugama Islam Singapura', params: { fajr: 20, isha: 18 }, methodOffsets: {} },
    MoonSightingCommittee: { name: 'Moon Sighting Committee', params: { fajr: 18, isha: 18 }, methodOffsets: { dhuhr: 5, maghrib: 3 } },
    MWL: { name: 'Muslim World League', params: { fajr: 18, isha: 17 }, methodOffsets: {} },
    Qatar: { name: 'Qatar', params: { fajr: 18, isha: '90 min' }, methodOffsets: {} },
    Karachi: { name: 'University of Islamic Sciences, Karachi', params: { fajr: 18, isha: 18 }, methodOffsets: {} },
    Makkah: { name: 'Umm Al-Qura University, Makkah', params: { fajr: 18.5, isha: '90 min' }, methodOffsets: {} },
    Dubai: { name: 'UAE / Dubai', params: { fajr: 18.2, isha: 18.2 }, methodOffsets: {} },
    Tunusian: { name: 'Tunisian Ministry of Religous Affairs', params: { fajr: 18, isha: 18 }, methodOffsets: {} },
    TurkiyeDiyanet: { name: 'Türkiye Diyanet İşleri Baskanlığı', params: { fajr: 18, isha: 17 }, methodOffsets: { sunrise: -7, fajr: -1, dhuhr: 5, asr: 5, maghrib: 8, isha: 1 } },
    Diyanet15Degrees: { name: 'Turkish Diyanet Offsets with 15° Angles', params: { fajr: 15, isha: 15 }, methodOffsets: { imsak: -1, sunrise: -9, dhuhr: 5, asr: 5, maghrib: 7, isha: -1 } },
    Tehran: { name: 'University of Tehran', params: { fajr: 17.7, isha: 14, maghrib: 5.5, midnight: 'Jafari' }, methodOffsets: {} }
}

export const AsrCalculationMethods = [
    { id: 'S', name: 'Standard' },
    { id: 'H', name: 'Hanafi Madhab Late Asr' }
];

export const AzanCallsEnabledValues = [
    { id: 'Y', name: 'Yes' },
    { id: 'N', name: 'No' }
];

export const DeviceModeValues = [
    { id: 'A', name: 'Auto', description: 'Dim during Isha and Normal all other times.' },
    { id: 'N', name: 'Normal' },
    { id: 'D', name: 'Dim' }
]

export const HijriMonths = ["Muharram", "Safar", "Rabi Al-Awwal", "Rabi Al-Thani", "Jamada Al-Awwal", "Jamada Al-Thani", "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul Qa'dah", "Dhul Hijjah"];

export const Vakits = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

export const Audios = [
    { id: 1, source: audio1, name: 'Bosnian Style by Eldin Huseinbegovic', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 2, source: audio2, name: 'Dubai Style by Abdulrahman Al-Hindi', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 3, source: audio3, name: 'Egyptian Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 4, source: audio4, name: 'Heartwarming Azan Recitation', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 5, source: audio5, name: 'Makkah Al-Mukarramah Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 6, source: audio6, name: 'Masjid Al-Aqsa Style', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 7, source: audio7, name: 'Mishary Al-Afasy', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 8, source: audio8, name: 'Ottoman Style by Mawlana Shaykh Nazim', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 9, source: audio9, name: 'Turkish Style by Remzi Er', isAzan: true, isFajrAzan: false, isAlarm: false },
    { id: 10, source: audio10, name: 'Fajr Azan by Mansoor Az-Zahrani', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 11, source: audio11, name: 'Fajr Azan by Mishary Al-Afasy', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 12, source: audio12, name: 'Madina Fajr Azan by Shaykh Surayhi', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 13, source: audio13, name: 'Fajr Azan by Shaykh Ali Ahmed Mullah', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 14, source: audio14, name: 'Fajr Azan by Mishary Al-Afasy With Dua', isAzan: false, isFajrAzan: true, isAlarm: false },
    { id: 101, source: audio101, name: 'Bismillahirrahmanirrahim', isAzan: true, isFajrAzan: true, isAlarm: true },
    { id: 102, source: audio102, name: 'Soft Beep Sound', isAzan: true, isFajrAzan: true, isAlarm: true },
    { id: 103, source: audio103, name: 'As-Salatu Khayrun Minan Nawm', isAzan: false, isFajrAzan: false, isAlarm: true }
]

export const QuranAudios = [
    { id: '001', source: surah001, name: 'Al-Fatihah', reciter: 'Mishary bin Rashid Alafasy' },
    { id: '018', source: surah018, name: 'Al-Kahf', reciter: 'Kamil Jaballah Alshani' },
    { id: '032', source: surah032, name: 'As-Sajda', reciter: 'Kamil Jaballah Alshani' },
    { id: '036', source: surah036, name: 'Ya-Sin', reciter: 'Shaykh Maher Al-Muaiqly' },
    { id: '067', source: surah067, name: 'Al-Mulk', reciter: 'Mohammed Hashim Abdul Aziz' },
    { id: '078', source: surah078, name: 'An-Naba', reciter: 'Mohammed Bin Saleh Abu Zaid' }
]

export const Azans = Audios.filter(a => a.isAzan);
export const FajrAzans = Audios.filter(a => a.isFajrAzan);
export const Alarms = Audios.filter(a => a.isAlarm);

export const Backgrounds = {
    fajr0: fajr0, fajr1: fajr1, fajr2: fajr2,
    sunrise0: sunrise0, sunrise1: sunrise1, sunrise2: sunrise2,
    dhuhr0: dhuhr0, dhuhr1: dhuhr1, dhuhr2: dhuhr2,
    asr0: asr0, asr1: asr1, asr2: asr2,
    maghrib0: maghrib0, maghrib1: maghrib1, maghrib2: maghrib2,
    isha0: isha0, isha1: isha1, isha2: isha2,
    dim: dim0
}

export class AzanAudio {
    constructor(id, time, isPlayed) {
        this.id = id;
        this.time = time;
        this.isPlayed = isPlayed;
    }
}

export class QuranAudio {
    constructor(id) {
        this.id = id;
    }
}

export const Devices = [
    { id: 1, name: 'Lenovo Yoga Tab', link: 'https://www.google.com/search?tbm=shop&q=yota+tab' },
    { id: 2, name: 'Vizio XR6M10', link: 'https://www.google.com/search?tbm=shop&q=vizio+xr6m10' },
    { id: 3, name: 'Azpen A760/A770', link: 'https://www.google.com/search?tbm=shop&q=azpen+a760+a770' },
    { id: 4, name: 'Clazio Spark', link: 'https://www.google.com/search?tbm=shop&q=clazio+spark+touchscreen' }
]