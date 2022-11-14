import React, { useContext } from 'react'
import { QuranAudios, FA } from '../scripts/Vars'
import { AppContext } from '../AppContext';

export default function Recitations() {

    const { reciteQuranAudio, showMsg } = useContext(AppContext)

    return (
        <div>

            <h5>Qur'an Recitations</h5>
            {QuranAudios.map((q) => (<button key={'Q' + q.id} type='button'
                className='btn btn-sm btn-primary my-2 col-12 text-start' onClick={() => {
                    reciteQuranAudio(q.id);
                    showMsg('Recitation by ' + q.reciter + ' will begin in about 10 seconds inshaAllah.');
                    document.activeElement.blur();
                }}>
                <div title={q.reciter} className='d-flex flex-row justify-content-between'>
                    <div>{FA.play}</div>
                    <div className='flex-grow-1 px-2'>Surah {q.name} </div>
                    <div>{q.id}</div>
                </div>
            </button>))}


            <p></p>
            <div className='mb-1 small'>To listen to Holy Qur'an from 100s of recitors</div>
            <a className='btn btn-sm btn-light col-12' href="https://qurancentral.com/" target="_blank" rel="noreferrer">Qur'an Central</a>
        </div>
    )
}
