import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Menu extends  React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            menuOpen: false,
            menuOpenedOnce: false
        };
    }
    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen,
            menuOpenedOnce: true
        });
    }
    navigate(node) {
        this.setState({
            menuOpen: false
        }, () => {
            if (this.props.nodes[node]) {
                this.props.nodes[node].scrollIntoView({behavior: "smooth"});
            }
        });
    }
    render() {
        return <div className="flex items-center relative">
            <h1 className="z-10 font-accent text-black hover:text-red cursor-pointer">Adam Shurson</h1>
            <div onClick={() => this.toggleMenu()} className="z-10 ml-auto p-4 text-black hover:text-red cursor-pointer flex lg:hidden justify-center items-center">
                <FontAwesomeIcon className="fa-2x" icon="bars"/>
            </div>
            <div className="ml-auto hidden lg:flex">
                <h4 onClick={() => this.navigate('about')} className="font-normal text-black hover:text-red mx-4 cursor-pointer">About</h4>
                <h4 onClick={() => this.navigate('work')} className="font-normal text-black hover:text-red mx-4 cursor-pointer">Work</h4>
                <h4 onClick={() => this.navigate('running')} className="font-normal text-black hover:text-red mx-4 cursor-pointer">Running</h4>
                <h4 onClick={() => this.navigate('travel')} className="font-normal text-black hover:text-red mx-4 cursor-pointer">Travel</h4>
                <h4 onClick={() => this.navigate('contact')} className="font-normal text-black hover:text-red mx-4 cursor-pointer">Contact</h4>
            </div>
            <div className={!this.state.menuOpenedOnce ? "hidden" : (this.state.menuOpen ? "fadeInDown" : "fadeOutUp") + " animated absolute flex w-full mt-36 md:mt-32 pb-0 p-4 flex-col bg-black"}>
                <FontAwesomeIcon className="fa-2x text-black absolute pin-t pin-r menu-caret mt-3" icon="caret-up"/>
                <h4 onClick={() => this.navigate('about')} className="font-normal text-white hover:text-red mb-4 cursor-pointer">About</h4>
                <h4 onClick={() => this.navigate('work')} className="font-normal text-white hover:text-red mb-4 cursor-pointer">Work</h4>
                <h4 onClick={() => this.navigate('running')} className="font-normal text-white hover:text-red mb-4 cursor-pointer">Running</h4>
                <h4 onClick={() => this.navigate('travel')} className="font-normal text-white hover:text-red mb-4 cursor-pointer">Travel</h4>
                <h4 onClick={() => this.navigate('contact')} className="font-normal text-white hover:text-red mb-4 cursor-pointer">Contact</h4>
            </div>
        </div>
    }
}
export default Menu;