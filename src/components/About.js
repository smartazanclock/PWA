import React from 'react'
import { Devices, Icons } from '../scripts/Vars'
import ChromeExtensionBanner from '../images/chrome-extension-banner.png'

export default function About() {

    return (
        <div className='text-light'>
            <div className='card bg-setting'>
                <div className='card-body'>

                    <h5>As-Salamu Alaykum</h5>

                    <p></p>

                    SmartAzanClock is an online adhan clock which can also be used to turn
                    any Android or Raspberry Pi device into an actual adhan clock by
                    simply adding it to (& running it from) the home screen.

                    <p></p>

                    <div className='d-flex flex-column gap-2'>
                        <div><img src={Icons.GreenCheck.Source} /> It's free, safe and open source</div>
                        <div><img src={Icons.GreenCheck.Source} /> No registration is required</div>
                        <div><img src={Icons.GreenCheck.Source} /> No cookies</div>
                        <div><img src={Icons.GreenCheck.Source} /> No ads</div>
                        <div><img src={Icons.GreenCheck.Source} /> No app store downloads</div>
                        <div><img src={Icons.GreenCheck.Source} /> Auto DST (Daylight Savings Time) updates</div>
                        <div><img src={Icons.GreenCheck.Source} /> Works even when offline</div>
                    </div>

                    <p></p>

                    <div className='mb-1'>Some commonly used Android devices</div>
                    <div className='d-flex flex-row justify-content-start flex-nowrap gap-1'>
                        {Devices.map(d => (
                            <div key={'d' + d.id} className='text-center'>
                                <a className='btn btn-sm btn-secondary' href={d.link} target="_blank">
                                    {d.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <p></p>

                    <div className='mb-1'>Also check out our Chrome Extension</div>
                    <div className='bg-light px-2 pt-1 rounded'>
                        <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">
                            <img src={ChromeExtensionBanner} className="img-fluid rounded" />
                        </a>
                    </div>
                </div>

            </div>

            <div className='d-flex flex-row justify-content-between my-3'>
                <div><a className='btn btn-sm btn-secondary' href="mailto:smartazanclock@gmail.com">Email Us</a></div>
                <div>
                    <a className='btn btn-sm btn-secondary' href="/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
                </div>
                <div>
                    <a className='btn btn-sm btn-secondary' href="https://github.com/smartazanclock/pwa" target="_blank" rel="noreferrer">Source Code</a>
                </div>
                <div>
                    {(navigator.onLine && <a className='btn btn-sm btn-warning' href="/reset/">Reset</a>)}
                </div>
            </div>


        </div>
    )
}

