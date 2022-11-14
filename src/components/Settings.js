import React, { useContext, createRef, useRef, useEffect } from 'react'
import Address from './Address';
import DropDown from './DropDown';
import Options from './Options';
import { CalculationMethods, AsrCalculationMethods, Vakits, AzanCallsEnabledValues, Audios, Azans, FajrAzans, DeviceModeValues } from '../scripts/Vars'
import { AppContext } from '../AppContext';

export default function Settings() {

    const { vakits, calculationSettings, locationSettings, deviceSettings, azanSettings, offsetSettings, updateOffset,
        showMsg, previewAudio, reciteQuranAudio } = useContext(AppContext)

    const CalculationMethodValues = [];
    Object.keys(CalculationMethods).forEach(k => {
        CalculationMethodValues.push({ id: k, name: CalculationMethods[k].name });
    })

    const azanSettingsHTML = [];
    Vakits.map((item) => {

        let cVakit = item.toLowerCase();
        let azanValue = azanSettings[cVakit];
        let offsetValue = offsetSettings[cVakit];
        let values = (item === "Fajr") ? FajrAzans : Azans;
        let vTime = vakits.find(v => v.name === item).displayTime;

        azanSettingsHTML.push(

            <div key={item} className="mt-4">

                <div className='clearfix'>
                    <span className='badge float-start p-0'>{item} Azan @ {vTime}</span>
                    <span className='badge float-end'>Minute offset</span>
                </div>

                <div className='d-flex flex-row gap-1'>

                    <div className='flex-grow-1'>
                        <DropDown name={'azanSettings.' + cVakit} selectedValue={azanValue} values={values} />
                    </div>
                    <div className='col-2'>
                        <button onClick={() => { previewAudio(azanValue * 1); document.activeElement.blur(); }}
                            type='button'
                            className='btn btn-sm col-12 btn-primary pt-1'><i className='fa-solid fa-play'></i></button>
                    </div>
                    <div>
                        <div className='d-flex flex-row gap-1 align-items-center'>
                            <div><button type='button' onClick={() => { updateOffset(cVakit, '-'); document.activeElement.blur(); }} className='btn btn-light btn-sm'>-</button></div>
                            <div><button type='button' onClick={() => { updateOffset(cVakit, '0'); document.activeElement.blur(); }} className='btn btn-dark btn-sm'>{offsetValue}</button></div>
                            <div><button type='button' onClick={() => { updateOffset(cVakit, '+'); document.activeElement.blur(); }} className='btn btn-light btn-sm'>+</button></div>
                        </div>
                    </div>
                </div>

            </div>

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

            <span className='badge mb-2 p-0'>Mode</span>
            <Options name="deviceSettings.mode" selectedValue={deviceSettings.mode} values={DeviceModeValues} />

            <p></p>

            <span className='badge mb-2 p-0'>Enable Azan Calls</span>
            <Options name="deviceSettings.azanCallsEnabled" selectedValue={deviceSettings.azanCallsEnabled} values={AzanCallsEnabledValues} />

            <p></p>

            {(deviceSettings.azanCallsEnabled === 'Y') && azanSettingsHTML}


        </div>
    )
}
