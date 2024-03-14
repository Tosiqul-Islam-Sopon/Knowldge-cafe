import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div className="lg:w-2/3">
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmarks={handleBookmarks}
                        handleReadTime = {handleReadTime}
                    >
                    </Blog>
                )
            }
        </div>

    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.number
}

export default Blogs;