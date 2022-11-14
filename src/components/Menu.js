import React, { useContext, useRef } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';
import Settings from './Settings'
import Recitations from './Recitations';
import About from './About';
import { AppContext } from '../AppContext';
import { FA } from '../scripts/Vars';

export default function Menu() {

    const { showMenu, setShowMenu } = useContext(AppContext)

    const recitationsTab = useRef(null);

    const goRecitations = () => {
        recitationsTab.current.click();
    }

    return (
        <Offcanvas placement="end" scroll="false" show={showMenu} onHide={() => setShowMenu(false)} className="bg-dark">
            <Offcanvas.Header>
                <div className='d-flex flex-row w-100 align-items-start justify-content-between'>
                    <div>
                        <ul className="nav nav-pills">
                            <li className='nav-item'>
                                <button className="nav-link active fs-4" id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    {FA.gear}
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button ref={recitationsTab} className="nav-link fs-4" id="recitations-tab" data-bs-toggle="tab"
                                    data-bs-target="#recitations" type="button" role="tab" aria-controls="recitations" aria-selected="false">
                                    {FA.book}
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button className="nav-link fs-4" id="about-tab" data-bs-toggle="tab"
                                    data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false">
                                    {FA.info}
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span onClick={() => { setShowMenu(false) }} className="pointer bg-dark text-secondary fs-2">
                            {FA.close}
                        </span>
                    </div>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="home">
                        <div className='px-3 text-light'>
                            <Settings />
                            <p></p>
                            <div>
                                <i onClick={goRecitations} className='fa-solid fa-book-open fs-2 text-light float-end' style={{ opacity: 0 }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="recitations">
                        <div className='px-3 text-light'>
                            <Recitations />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="about">
                        <div className='px-3 text-light'>
                            <About />
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas >
    )
}



