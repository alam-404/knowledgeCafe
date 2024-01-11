// import React from 'react';

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

import "./BlogContainer.css"
import Bookmarks from "../Bookmarks/Bookmarks";

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([])
    const [timeSpent, setTimeSpent] = useState(0);
    const [bookmarks, setBookmarks] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    useEffect(()=>{
        if (!localStorage.getItem('time_spend'))
            localStorage.setItem('time_spend', 0)
        if (!localStorage.getItem('bookmarks'))
            localStorage.setItem('bookmarks', "[]")
    }, [])

    const mark_as_read = (new_read_time) => {
        let old_read_time = parseInt(localStorage.getItem('time_spend'));
        if (!isNaN(old_read_time)){
            old_read_time += parseInt(new_read_time);
            localStorage.setItem("time_spend", old_read_time)
            setTimeSpent(old_read_time)
        }
        else{
            localStorage.setItem("time_spend", new_read_time)
            setTimeSpent(new_read_time)
        }
    }

    const bookmark_click = (id)=>{
        const storedData = localStorage.getItem("bookmarks");
        if (storedData){
            const oldData = JSON.parse(storedData);
            let newData = [...oldData]
            if (!newData.includes(id)){
                newData.push(id)
                setBookmarks(newData)
                localStorage.setItem('bookmarks', JSON.stringify(newData));
            }

        }
        else {
            let newData = [id];
            setBookmarks(newData)
            localStorage.setItem('bookmarks', JSON.stringify(newData));
        }
    }

    return (
        <>
            <div className="main-section">
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} readTimeHandler={mark_as_read} bookmarkHandler={bookmark_click}></Blog>)
                    }
                </div>
                <Bookmarks timeSpent={timeSpent} bookmarks={bookmarks}></Bookmarks>
            </div>
        </>
        
    );
};

export default BlogContainer;