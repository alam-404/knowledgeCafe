// import React from 'react';
import "./Author.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'


const Author = (props) => {
    const {author_name, author_avatar, time_to_read} = props;
    const bookmarkHandler = props.bookmarkHandler;

    return (
        <div className="container">
            <div className="author-container">
                <img className="author-image" src={author_avatar} alt="an avatar of that author" />
                <div className="author">
                    <p className="author-name">{author_name}</p>
                    <a className="follow-btn">Follow</a>
                </div>
            </div>
            <div className="bookmark-icon-section">
                <div>
                    <p>{time_to_read} min read</p>
                </div>
                <div>
                    <FontAwesomeIcon  className="bookmark-icon" icon={faBookmark} onClick={()=> bookmarkHandler()}/>
                </div>
            </div>
        </div>
    );
};

export default Author;