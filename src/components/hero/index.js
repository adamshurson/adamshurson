import React from 'react';
import './hero.css';

class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIntroduction: 0,
            currentMessage: ""
        };
        this.introductions = [
            "build for the web",
            "run some miles occasionally",
            "like long walks on the beach"
        ];
    }
    componentDidMount() {
        this.cycle();
    }
    cycle() {
        this.addLetters();
    }
    addLetters() {
        if (this.state.currentMessage.length < this.introductions[this.state.currentIntroduction].length) {
            setTimeout(() => {
                const newMessage = this.state.currentMessage + this.introductions[this.state.currentIntroduction].charAt(this.state.currentMessage.length);
                this.setState({
                    currentMessage: newMessage
                }, () => this.addLetters());
            }, 150);
        } else {
            setTimeout(() => {
                this.removeLetters();
            }, 1000)
        }
    }
    removeLetters() {
        if (this.state.currentMessage.length > 0) {
            setTimeout(() => {
                const newMessage = this.state.currentMessage.substring(0, this.state.currentMessage.length - 1);
                this.setState({
                    currentMessage: newMessage
                }, () => this.removeLetters());
            }, 50);
        } else {
            const i = (this.state.currentIntroduction + 1 > this.introductions.length - 1 ? 0 : this.state.currentIntroduction + 1);
            this.setState({
                currentIntroduction: i
            }, () => this.cycle());
        }
    }
    render() {
        return <div className="flex h-screen text-black items-center justify-center">
            <div className="mr-1">I</div>
            <div>{this.state.currentMessage}</div>
            <div className="-mt-px h-4 w-1 bg-black blip"/>
        </div>
    }
}
export default Hero;