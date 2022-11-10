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

                    SmartAzanClock is an online adhan clock that can also be used to turn
                    any Android or Raspberry Pi device into an actual adhan clock.

                    <p></p>

                    <div className='d-flex flex-column gap-2'>
                        <div><img src={Icons.GreenCheck.Source} /> It's free, safe and open source</div>
                        <div><img src={Icons.GreenCheck.Source} /> No registration</div>
                        <div><img src={Icons.GreenCheck.Source} /> No cookies</div>
                        <div><img src={Icons.GreenCheck.Source} /> No app store downloads</div>
                        <div><img src={Icons.GreenCheck.Source} /> Works even when offline</div>
                    </div>

                    <p></p>



                    Disable sleep on your device
                    then add smartazanclock.com to the home screen and tap on its icon.
                    That's it!

                    <p></p>

                    <span className='badge p-0 mb-2'>Some commonly used Android devices</span>
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

                    <span className='badge text-light p-0 mb-1'>Also check out our Chrome Extension</span>
                    <div className='bg-light px-2 pt-1 rounded'>
                        <a target="_blank" href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">
                            <img src={ChromeExtensionBanner} className="img-fluid rounded" />
                        </a>
                    </div>
                </div>

            </div>

            <div className='d-flex flex-row justify-content-start mt-2'>
                <div><a className='badge bg-dark whiteLink' href="mailto:smartazanclock@gmail.com">Email Us</a></div>
                <div>
                    <a className='badge bg-dark whiteLink' href="/privacy-policy/" target="_blank">Privacy Policy</a>
                </div>
                <div>
                    <a className='badge bg-dark whiteLink' href="https://github.com/smartazanclock/pwa" target="_blank">Source Code</a>
                </div>
                <div>
                    {(navigator.onLine && <a className='badge bg-dark whiteLink' href="/reset/">Reset App</a>)}
                </div>
            </div>

            <p></p>

        </div>
    )
}

