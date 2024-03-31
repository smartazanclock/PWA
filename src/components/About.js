import React from 'react'
import { FontAwesome } from '../data/FontAwesome';
import lenovoM8Image from '../images/lenovo-m8-tab.jpg'
import lenovoM10Image from '../images/lenovo-m10-tab.jpg'

export default function About() {

    return (
        <div>

            <h5>As Salamu Alaykum</h5>
            <p></p>
            SmartAzanClock.com is an online adhan clock which can also be used to turn any Android or Raspberry Pi device into an actual adhan clock.
            <p></p>

            <div className='d-flex flex-column gap-2'>
                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>Free, safe and open source.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No registration.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No subscriptions.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>No app store downloads.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>Works even when offline.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>Doesn't require any specific Android device.</div>
                </div>
            </div>

            <p></p>


            Get your own device, add SmartAzanClock to your home screen and run it. That's it!

            <p></p>

            {navigator.onLine ? (
                <div className='card p-0'>
                    <div className='card-body px-2 py-1'>
                        <div className='badge text-dark'>Device suggestions</div>
                        <div className='d-flex flex-row align-items-end'>
                            <div className='text-center flex-grow-1'>
                                <a href="https://www.google.com/search?tbm=shop&q=lenovo+m8+smart+tab" target="_blank">
                                    <img src={lenovoM8Image} className="img-fluid" />
                                    <div className='badge text-dark'>Lenovo M8</div>
                                </a>
                            </div>
                            <div className='text-center flex-grow-1'>
                                <a href="https://www.google.com/search?tbm=shop&q=lenovo+m10+p10+smart+dock" target="_blank">
                                    <img src={lenovoM10Image} className="img-fluid" />
                                    <div className='badge text-dark'>Lenovo M10 or P10</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            <p></p>

            <div className='d-flex flex-row justify-content-between gap-1 align-items-center mt-4'>
                <div>
                    <a className='whiteLink fs-3' title='Privacy Policy' href="/privacy-policy/" rel="noreferrer">{FontAwesome.Shield}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='Open Source Code' href="https://github.com/smartazanclock/pwa" rel="noreferrer">{FontAwesome.Github}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='Prayer Times Chrome Extension' href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">{FontAwesome.Chrome}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' href="/setup/rpi/" title='Raspberry Pi Adhan Clock Setup Instructions'>{FontAwesome.RPi}</a>
                </div>
                <div>
                    <a className='whiteLink fs-3' title='smartazanclock@gmail.com' href="mailto:smartazanclock@gmail.com">{FontAwesome.Envelope}</a>
                </div>
            </div>

            <p></p>

        </div >
    )
}

