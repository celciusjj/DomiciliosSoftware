import React, { Component } from 'react';


class Tabs extends Component {
    state = {}
    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-justified md-tabs indigo" id="myTabJust" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link tabs " id="home-tab-just" data-toggle="tab" href="#home-just" role="tab"
                            aria-selected="true">En oferta</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tabs " id="profile-tab-just" data-toggle="tab" href="#profile-just" role="tab"
                            aria-selected="false">Abarrotes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Legumbre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Lacteos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Lacteos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Lacteos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Lacteos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link tabs" id="contact-tab-just" data-toggle="tab" href="#contact-just" role="tab"
                            aria-selected="false">Lacteos</a>
                    </li>
                </ul>
            </div>


        );
    }
}

export default Tabs;
