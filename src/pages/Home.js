/** @format */
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const docRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      querySnapshot.forEach((doc) => {
        blogs.push(doc.data());
      });
    };
    getBlogs();
  }, [db, docRef]);

  const Queried = query(docRef, orderBy("createdAt"));

  return (
    <div className="home">
      <Header />
      <main>
        {blogs?.map((blog, i) => (
          <div className="blog_item" key={i}>
            <h2>{blog?.title}</h2>
            <p>{blog?.content}</p>
            <span>Written by: {blog?.author}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
