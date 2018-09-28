import React from 'react';
import profile from './profile.jpg';
import retro from './retro.svg';
import './about.css';

class About extends React.Component {
    render() {
        return <div className="flex flex-col min-h-screen pt-8">
            <h2 className="font-accent text-black hover:text-red">About Me</h2>
            <p className="mt-auto md:mt-0 pt-4 text-black font-small leading-loose w-full md:w-2/3 lg:w-1/2">
                <img className="hover:colored-image float-left w-1/4 mt-2 mr-4 border-2 border-black h-auto" src={profile} alt="Profile"/>
                I am a beer loving, distance running, full stack developer. I have worked as an Independent
                Consultant for the past 5 years. JavaScript is my bread and butter that I love for all of the
                holes it may have. I am passionate about the Computer Science world and enjoy solving complex
                problems with articulate tools.
            </p>
            <p className="mt-auto md:mt-0 pt-2 text-black font-small leading-loose w-full md:w-2/3 lg:w-1/2">
                Born and raised in Waukegan, Illinois, I attended the University of Kansas shortly before
                transferring to Iowa State University. After graduating in 2018, I moved to the lovely
                city of Chicago and joined Accenture as a Technology Analyst.
            </p>
            <img className="opacity-25 mt-auto md:mt-0 max-w-lg self-center" src={retro} alt="Retro" />
        </div>
    }
}
export default About;