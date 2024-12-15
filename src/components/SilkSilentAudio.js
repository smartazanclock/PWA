import React, { useRef, useState } from 'react'
import audioSilence from '../mp3s/silence.mp3';

export default function SilkSilentAudio() {

       const silencePlayer = useRef(null);
       const [isSilkOn, setIsSilkOn] = useState(false); 

       const handleSilkToggle = (event) => {
              const isChecked = event.target.checked;
              setIsSilkOn(isChecked);
              if (isChecked) {
                  if (silencePlayer.current) {
                      silencePlayer.current.currentTime = 0;
                      silencePlayer.current.volume = 0.1;
                      silencePlayer.current.play();
                  }
              } else {
                  if (silencePlayer.current) {
                      silencePlayer.current.pause();
                  }
              }
       };

       const silenceContinue = () => {
              if (isSilkOn && silencePlayer.current) {
                  silencePlayer.current.currentTime = 0;
                  silencePlayer.current.play();
              }
       };

       return(
              <div id='silkSettingDiv'>

                     <div className="form-check">
                            <input id='isSilkOn' checked={isSilkOn} className="form-check-input" onChange={handleSilkToggle} type="checkbox" value="1"/>
                            <label className="form-check-label" htmlFor="isSilkOn">Keep Silk ON</label>
                     </div>

                     <audio id='silencePlayer' src={audioSilence} autoPlay ref={silencePlayer} onPause={silenceContinue} onEnded={silenceContinue} />
              </div>
       )

}