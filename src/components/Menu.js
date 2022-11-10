import React, { useContext, useRef } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import Settings from './Settings'
import Recitations from './Recitations';
import About from './About';
import { AppContext } from '../AppContext';
import { Icons } from '../scripts/Vars';

export default function Menu() {

    const { showMenu, setShowMenu } = useContext(AppContext)

    const recitationsTab = useRef(null);

    const goRecitations = () => {
        recitationsTab.current.click();
    }

    return (
        <Offcanvas placement="end" scroll="false" show={showMenu} onHide={() => setShowMenu(false)} className="bg-dark">
            <Offcanvas.Header className='text-light' closeButton>
                <ul className="nav nav-pills" id="myTab" role="tablist">
                    <li className='nav-item' role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <img src={Icons.Settings.Source} />
                        </button>
                    </li>
                    <li className='nav-item' role="recitations">
                        <button ref={recitationsTab} className="nav-link" id="recitations-tab" data-bs-toggle="tab"
                            data-bs-target="#recitations" type="button" role="tab" aria-controls="recitations" aria-selected="false">
                            <img src={Icons.Recitations.Source} />
                        </button>
                    </li>
                    <li className='nav-item' role="presentation">
                        <button className="nav-link" id="about-tab" data-bs-toggle="tab"
                            data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false">
                            <img src={Icons.About.Source} />
                        </button>
                    </li>
                </ul>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <Settings />
                        <p></p>
                        <div className='p-2'>
                            <img onClick={goRecitations} src={Icons.Recitations.Source} className="float-end" style={{ opacity: 0 }} />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="recitations" role="tabpanel" aria-labelledby="recitations-tab">
                        <Recitations />
                    </div>
                    <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <About />
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}



