import React from 'react'


export default function PrivacyPolicy() {

    return (
        <div className='container text-light mt-4'>
            <h1>Smart Azan Clock</h1>
            <h2>Privacy Policy</h2>
            <p></p>
            Last updated: October 27, 2022
            <p></p>
            <div className='fs-5'>
                Prayer times depend on your location and we try to figure that out from your IP address.
                You can also enter your location on the settings page yourself and get more accurate times.
                Other than your location and standard http headers (your browser, IP etc.) there's a few other pieces of information
                you let us know. The calculation method you want to use, time offsets, azan reciters for each prayer time,
                your custom alarms and so on. Anything you see on the settings pages and nothing you don't.
                <p></p>
                We have no access to your computer or any other personal data.
                Your settings information is stored on your browser's local storage.
                We never share your information with anyone, not even with Google Analytics.
                You can disconnect your SmartAzanClock from the Internet and it'll still work.
                <p></p>
                If you have any questions about this Privacy Policy, you can contact us at <a className='whiteLink' href="mailto:smartazanclock@gmail.com">smartazanclock@gmail.com</a>.
            </div>
        </div>
    )
}
