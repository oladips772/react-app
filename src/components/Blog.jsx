import { useEffect, useState } from "react";
import moment from "moment";
import image from "../images/image2.jpg";
import { FaHeart } from "react-icons/fa";
import { db } from "../firebase";


const Blog = ({ blog }) => {
    return (
        <div className="blog_item">
            <div className="blog_info">
                <h2>{blog?.title}</h2>
                <p>{blog?.content}</p>
                <div className="action_buttons">
                    <div className="user_avatar">
                        <img src={blog?.blogImage} alt="" />
                        <span>{blog?.author}</span>
                    </div>
                    <div className="like_container">
                        <FaHeart size={16} color="crimson" />
                        <span>23 likes</span>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={blog?.blogImage} alt="" />
            </div>
        </div>
    )
};

export default Blog;