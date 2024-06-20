/** @format */
import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { auth, db } from "../firebase";
import { getAuth } from "firebase/auth";

function Newblog() {
  const user = getAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const createBlog = async () => {
    setLoading(true);
    await addDoc(collection(db, "blogs"), {
      title: title,
      content: content,
      author: user?.currentUser?.email,
    });
    setTitle("");
    setContent("");
    setLoading(false);
    alert("blog created successfully");
  };

  return (
    <div className="newblog">
      <Header />
      <main>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={createBlog}>
          {loading ? "loading...." : "Create"}
        </button>
      </main>
    </div>
  );
}

export default Newblog;
