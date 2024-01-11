// import React from 'react';

import { useEffect, useState } from "react";
import "./Bookmark.css"
import BookmarkUI from "../BookmarkUI/BookmarkUI";

const Bookmark = (props) => {

    const bookmarks = props.bookmarks;
    const [bookmarksArr, setBookmarksArr] = useState(bookmarks)
    const [blogs, setBlogs] = useState([])
    const [blog, setBlog] = useState({})

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    useEffect(()=>{
        const storedData = localStorage.getItem("bookmarks");
        if (storedData){
            const oldData = JSON.parse(storedData);
            setBookmarksArr(oldData)
        }
        else {
            setBookmarksArr(0);
        }
        // for(const id in bookmarksArr){
        //     const found = blogs.find(blog => blog.id == id);
        //     setBlog(found);
        //     console.log(found)
        // }
    },[bookmarks])

    useEffect(()=>{
        
    }, [])

    return (
        <div className="bookmark-container">
            <div className="bookmarks-counter">
                <h3>Bookmarks: {bookmarksArr.length}</h3>
            </div>
            <hr/>
            <div>

            </div>
        </div>
    );
};

export default Bookmark;