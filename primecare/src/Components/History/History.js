import React, { useState, useEffect } from 'react';
import './History.css';

const History = () => {
    const [loaded, setLoaded] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        const timeTimer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearTimeout(loadTimer);
            clearInterval(timeTimer);
        };
    }, []);

    const greeting = (date) => {
        const hours = date.getHours();
        if (hours < 12) {
            return 'Good Morning';
        } else if (hours < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    };

    return (
        <div className={`door-container ${loaded ? 'loaded' : ''}`}>
            <div className="door-left"></div>
            <div className={`content ${loaded ? 'fadein' : ''}`}>
                <h2>{greeting(currentTime)}!</h2>
                <p>
                House Targaryen, originating from the ancient civilization of Valyria, became legendary in Westeros after Aegon the Conqueror and his sister-wives unified the Seven Kingdoms through their dragons.  Daenerys eventually re-emerged, bringing dragons back into the world and striving to reclaim her family's throne, symbolizing the enduring legacy and tumultuous history of House Targaryen.
                </p>
                <p>
                They ruled Westeros for nearly 300 years, marked by both grandeur and turmoil, including the devastating civil war known as the Dance of the Dragons. Their reign ended with the fall of King Aerys II, the Mad King, during Robert's Rebellion, forcing the surviving Targaryens, Viserys and Daenerys, into exile.
                </p>
            </div>
            <div className="door-right"></div>
        </div>
    );
};

export default History;
