import React from 'react';
import './work.css';

class Work extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 0
        };
        this.descriptions = [
            <div className="flex flex-col p-4">
                <h3>Accenture</h3>
                <h4 className="py-2">Technology Analyst</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Shaped managed applications strategy through multi-billion-dollar divestiture</li>
                    <li className="mt-2">Developed custom applications to automate data validation and other repeatable
                        tasks leading to a reduction of several hundred of man hours</li>
                    <li className="mt-2">Interfaced with strategic minority investment (SMI) team to identify startups
                        that warranted investments</li>
                    <li className="mt-2">Curated high-impact, weekly newsletter of Accenture’s SMIs, the growing Chinese
                        startup market, and other technology news to an audience of over 3,000</li>
                    <li className="mt-2">Technologies used: ReactJS, AngularJS, Angular 2+, Node.js, Electron, Tailwind, Pearl, HTML/CSS, SVG</li>
                </ul>
            </div>,
            <div className="flex flex-col p-4">
                <h3>Netsmart Technologies</h3>
                <h4 className="py-2">Software Engineer</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Developed user-provisioning portal leveraging external Health
                        Information Service Provider for interoperability between medical providers</li>
                    <li className="mt-2">Incorporated modular design to fast-track production deployment
                        and product integration</li>
                    <li className="mt-2">Technologies used: AngularJS, Java, HTML/CSS, WebLogic</li>
                </ul>
            </div>,
            <div className="flex flex-col p-4">
                <h3>Independent Consultant</h3>
                <h4 className="py-2">Residential Construction Company</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Created interactive website following design principles to
                        increase company brand strength and recognition</li>
                    <li className="mt-2">Designed custom content management system for simple updates
                        without technical knowledge of site</li>
                    <li className="mt-2">Technologies used: ReactJS, Node.js, Pearl, HTML/CSS, DigitalOcean</li>
                </ul>
                <h4 className="py-2 pt-4">Regional Iowa Race</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Gathered customer requirements for redesign of race website</li>
                    <li className="mt-2">Created interactive website following design principles
                        to increase company brand strength and recognition</li>
                    <li className="mt-2">Designed and developed custom website to increase race awareness
                        and participation</li>
                    <li className="mt-2">Technologies used: JavaScript, HTML/CSS</li>
                </ul>
                <h4 className="py-2 pt-4">Residential Design/Build Firm</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Identified weaknesses in business / client
                        experience between lead procurement to project closeout</li>
                    <li className="mt-2">Designed and developed custom client and project management suite to address pain points</li>
                    <li className="mt-2">Technologies used: AngularJS, Laravel, MySQL, HTML/CSS, DigitalOcean</li>
                </ul>
            </div>,
            <div className="flex flex-col p-4">
                <h3>Abbott Laboratories</h3>
                <h4 className="py-2">Engineering Intern</h4>
                <ul className="pl-4 md:ml-4 font-small">
                    <li className="mt-2">Analyzed existing inventory of approximately 10,000 line
                        items totaling over $250,000 worth of materials</li>
                    <li className="mt-2">Created an Excel workbook to reconcile SAP export with in-house solution</li>
                    <li className="mt-2">Analyzed preventative maintenance business process</li>
                    <li className="mt-2">Wrote an excel workbook to aid in preventative maintenance scheduling</li>
                    <li className="mt-2">Tracked approximately 50 rooms with large sets of data</li>
                    <li className="mt-2">Technologies used: Excel, VBA, Java</li>
                </ul>
            </div>,
        ]
    }
    setIndex(index) {
        this.setState({active: index});
    }
    render() {
        return <div ref={this.props.work} className="flex flex-col min-h-screen pt-8">
            <h2 className="font-accent text-black hover:text-red self-center">Work</h2>
            <div className="relative flex-1 flex items-center">
                {
                    this.descriptions.map((description, index) => {
                        return <div onClick={() => this.setIndex(index)} key={index} className={(this.state.active === index ? "focused overflow-y-hidden" : "overflow-y-hidden")
                        + (index === this.state.active - 1 || index === this.descriptions.length - 1 && this.state.active === 0 ? " left"
                        : "")
                        + (index === this.state.active + 1 || index === 0 && this.state.active === this.descriptions.length - 1 ? " right"
                        : "")
                        + " card w-80 md:w-1/2 bg-black text-white absolute shadow-lg bg-black"}>
                            {description}
                        </div>
                    })
                }
            </div>
        </div>
    }
}
export default Work;