// import React from 'react';

// import { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import TimeSpent from "../TimeSpent/TimeSpent";

import "./Bookmarks.css"

const Bookmarks = (props) => {

    const timeSpent = props.timeSpent;

    return (
        <div>
            <div>
                <TimeSpent timeSpent={timeSpent}></TimeSpent>
            </div>
            <div className="bookmark-section">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Bookmarks;