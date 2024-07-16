/** @format */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";
import image from "../images/image2.jpg";
import { FaHeart } from "react-icons/fa";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const docRef = collection(db, "blogs");

  useEffect(() => {
    const Queried = query(docRef, orderBy("createdAt", "desc"));

    onSnapshot(Queried, (snapshot) => {
      let books = [];
      snapshot.docs.forEach((doc) => {
        books.push(doc.data());
      });
      setBlogs(books);
    });
  }, []);

  return (
    <div className="home">
      <Header />
      <main>
        {blogs?.map((blog, i) => (
          <div className="blog_item" key={i}>
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
        ))}
      </main>
    </div>
  );
}

export default Home;
