// import React from 'react';

import "./BookmarkUI.css"

const BookmarkUI = (props) => {
    const blog = props.blog;
    console.log(blog)
    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    );
};

export default BookmarkUI;