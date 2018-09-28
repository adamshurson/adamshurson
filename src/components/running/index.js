import React from 'react';
import map from './map.svg';

class Running extends React.Component {
    render() {
        return <div className="flex flex-col min-h-screen pt-8 items-end">
            <h2 className="font-accent text-black hover:text-red">Running</h2>
            <p className="mt-auto md:mt-0 pt-4 text-black font-small leading-loose w-full md:w-2/3 lg:w-1/2">
                <iframe className="float-right mt-2 ml-4 hidden md:block" height='160' width='300' scrolling='no'
                        src='https://www.strava.com/athletes/25968395/activity-summary/84d8023f93023bf4701c5413df2dc51072dfb095'/>
                Running has always been a huge part of my life. As early as 2nd grade I can remember the buzz
                that went through my head when the P.E. instructors told the class we would be running the
                mile that day. Having competed all throughout my life, running has taught me many of the
                most important lessons I've learned. I attribute much of my dedication and work-ethic
                to the countless miles my legs have carried me.
            </p>
            <iframe className="pt-4 mt-auto md:hidden self-center" height='160' width='300' scrolling='no'
                    src='https://www.strava.com/athletes/25968395/activity-summary/84d8023f93023bf4701c5413df2dc51072dfb095'/>
            <img className="opacity-25 mt-auto md:mt-12 w-1/2 md:w-1/4 lg:w-1/6 self-center md:self-start md:ml-32" src={map} alt="Map" />
        </div>
    }
}
export default Running;