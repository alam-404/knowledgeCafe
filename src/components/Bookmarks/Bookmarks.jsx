// import React from 'react';

// import { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import TimeSpent from "../TimeSpent/TimeSpent";

import "./Bookmarks.css"

const Bookmarks = (props) => {

    return (
        <div>
            <div>
                <TimeSpent timeSpent={props.timeSpent}></TimeSpent>
            </div>
            <div className="bookmark-section">
                <Bookmark bookmarks={props.bookmarks} blog={props.blog}></Bookmark>
            </div>
        </div>
    );
};

export default Bookmarks;