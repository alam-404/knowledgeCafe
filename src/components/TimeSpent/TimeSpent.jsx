// import React from 'react';

import { useState } from "react";
import "./TimeSpent.css"
import { useEffect } from "react";

const TimeSpent = (props) => {
    const newTimeSpent = props.timeSpent;

    const [timeSpent, setTimeSpent] = useState(newTimeSpent);

    useEffect(()=>{
            const storedTime = localStorage.getItem('time_spend');
            setTimeSpent(storedTime);
        }, [newTimeSpent])

    return (
        <div className="time-spend-section">
            <h3>Time spent: {timeSpent} min</h3>
        </div>
    );
};

export default TimeSpent;