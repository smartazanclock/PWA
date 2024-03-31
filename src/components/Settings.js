import React, { useContext, createRef, useRef, useEffect } from 'react'
import Address from './Address';
import DropDown from './DropDown';
import Options from './Options';
import { AzanCallOptions } from '../data/AzanCallOptions';
import { DeviceModes } from '../data/DeviceModes';
import { FajrAzans, Azans } from '../data/Audios';
import { CalculationMethods, AsrCalculationMethods } from '../data/CalculationMethods';
import { AppContext } from '../AppContext';
import { FontAwesome } from '../data/FontAwesome';
import { format12 } from '../scripts/SmartAzanClock';

export default function Settings() {

    const { vakits, calculationSettings, locationSettings, deviceSettings, azanSettings,
        offsetSettings, updateOffset, previewAudio, oneThirdTime, twoThirdTime, midnightTime } = useContext(AppContext)

    const CalculationMethodValues = [];
    Object.keys(CalculationMethods).forEach(k => {
        CalculationMethodValues.push({ id: k, name: CalculationMethods[k].name });
    })

    const azanSettingsHTML = [];
    const Vakits = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    Vakits.map((item) => {

        let cVakit = item.toLowerCase();
        let azanValue = azanSettings[cVakit];
        let offsetValue = offsetSettings[cVakit];
        let values = (item === "Fajr") ? FajrAzans : Azans;
        let vTime = vakits.find(v => v.name === item).displayTime;

        azanSettingsHTML.push(

            <div key={item} className="mt-3">

                <div className='d-flex flex-row justify-content-between'>
                    <div><span className='badge p-0'>{item} Azan @ {vTime}</span></div>
                    <div className='col-4'><span className='badge'>Minute Offset</span></div>
                </div>

                <div className='d-flex flex-row gap-1 mt-1'>

                    <div className='col-6'>
                        <DropDown name={'azanSettings.' + cVakit} selectedValue={azanValue} values={values} />
                    </div>
                    <div className='col-2'>
                        <button onClick={() => { previewAudio(azanValue * 1); document.activeElement.blur(); }}
                            type='button'
                            className='btn btn-sm btn-primary col-12'>{FontAwesome.Play}</button>
                    </div>
                    <div>
                        <div className='d-flex flex-row gap-1 align-items-center'>
                            <div className='col-4'><button type='button' onClick={() => { updateOffset(cVakit, '-'); document.activeElement.blur(); }} className='btn btn-sm btn-light col-12'>{FontAwesome.Minus}</button></div>
                            <div className='col-4'><button type='button' onClick={() => { updateOffset(cVakit, '0'); document.activeElement.blur(); }} className={'btn btn-sm col-12 ' + ((offsetValue === 0) ? 'btn-light' : 'btn-danger')}>{offsetValue}</button></div>
                            <div className='col-4'><button type='button' onClick={() => { updateOffset(cVakit, '+'); document.activeElement.blur(); }} className='btn btn-sm btn-light col-12'>{FontAwesome.Plus}</button></div>
                        </div>
                    </div>
                </div>

            </div >

        )
    })

    return (
        <div>

            <Address value={locationSettings.address} />

            <p></p>

            <span className='badge mb-2 p-0'>Calculation Method</span>
            <DropDown name="calculationSettings.method" selectedValue={calculationSettings.method} values={CalculationMethodValues} />

            <p></p>

            <span className='badge mb-2 p-0'>Asr Calculation Method</span>
            <Options name="calculationSettings.asrMethod" selectedValue={calculationSettings.asrMethod} values={AsrCalculationMethods} />
            <p></p>

            <span className='badge mb-2 p-0'>Display Mode</span>
            <Options name="deviceSettings.mode" selectedValue={deviceSettings.mode} values={DeviceModes} />

            <p></p>

            <span className='badge mb-2 p-0'>Enable Azan Calls & Alarms</span>
            <Options name="deviceSettings.azanCallsEnabled" selectedValue={deviceSettings.azanCallsEnabled} values={AzanCallOptions} />

            <p></p>

            {(deviceSettings.azanCallsEnabled === 'Y') && azanSettingsHTML}


            <div className='d-flex flex-row justify-content-start gap-2 mt-3'>
                <div className='badge p-0'>1/3 @ {format12(oneThirdTime)}</div>
                <div className='badge p-0'>Midnight @ {format12(midnightTime)}</div>
                <div className='badge p-0'>2/3 @ {format12(twoThirdTime)}</div>
            </div>

        </div>
    )
}
