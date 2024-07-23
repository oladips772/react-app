/** @format */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

import Blog from "../components/Blog";

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
         <Blog blog={blog} key={i} />
        ))}
      </main>
    </div>
  );
}

export default Home;
