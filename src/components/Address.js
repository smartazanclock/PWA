import React, { useState, useContext, useRef, useEffect } from 'react'
import { AppContext } from '../AppContext';
import { Icons } from '../scripts/Vars';

export default function Address(props) {

    const { locationSettings, updateSettings, showMsg, seconds, dol } = useContext(AppContext)
    const [address, setAddress] = useState(props.value)

    const updateButton = useRef(null)
    const rightArrow = useRef(null)
    const spinner = useRef(null)
    //const marker = useRef(null)

    useEffect(() => {
        setAddress(locationSettings.address)
    }, [locationSettings.address])


    function changeAddress(e) {
        setAddress(e.target.value);
    }

    function updateAddress(e) {
        e.preventDefault();
        updateButton.current.disabled = true;
        rightArrow.current.style.display = 'none';
        spinner.current.style.display = 'inline-block';
        let ceCallURL = 'https://smartazanclock.com/geolocation?address=' + address;

        fetch(ceCallURL, { method: 'GET' }).then((response) => {

            if (response.status === 200) {
                response.json().then((data) => {
                    let newSettings = { locationSettings: { address: data.address, timeZoneID: data.timeZoneID, lat: data.lat, lng: data.lng } };
                    updateSettings(newSettings, 'Your location is updated.');
                });
            }
            else {
                showMsg("Couldn't find that location. Please try again.", "error")
                setAddress(locationSettings.address)
            }
        })
            .catch(err => { showMsg("Couldn't find that location. Please make sure you are connected to Internet and try again.", "error"); })
            .finally(() => {
                updateButton.current.disabled = false;
                rightArrow.current.style.display = 'inline-block';
                spinner.current.style.display = 'none';
            });
    }


    function detectLocation() {

        let cSettings = JSON.parse(localStorage.getItem('settings'));

        let ceCallURL = 'https://smartazanclock.com/iplocation';
        fetch(ceCallURL, { method: 'GET' }).then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    cSettings.locationSettings.address = data.address;
                    cSettings.locationSettings.lat = data.lat;
                    cSettings.locationSettings.lng = data.lng;
                    cSettings.locationSettings.timeZoneID = data.timeZoneID;
                    localStorage.setItem('settings', JSON.stringify({ ...cSettings }));
                    showMsg("Your location is updated based on your IP.")
                });
            }
        }).catch(err => { dol(err) });

    }

    return (
        <form method='post' onSubmit={updateAddress}>
            <span className='badge p-0 mb-2'>Set Your Location</span>
            <div className='d-flex flex-row gap-2'>
                <div className='flex-grow-1'>
                    <input id="address" type="text" className='form-control form-control-sm' onChange={changeAddress} value={address} />
                </div>
                <div className='col-2'>
                    <button ref={updateButton} type='submit' className='btn col-12 btn-sm btn-primary'>
                        <img ref={rightArrow} src={Icons.PlaySm.Source} />
                        <div ref={spinner} className="spinner-border spinner-border-sm mx-1" style={{ display: 'none' }}></div>
                    </button>
                </div>
                {
                    /*
                    
                    <div className='col-2'>
                    <button onClick={detectLocation} type='button' className='btn col-12 btn-sm btn-light'>
                        <img ref={marker} src={Icons.Marker.Source} />
                    </button>
                </div>

                    */
                }

            </div>
        </form>
    )
}
