/** @format */
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { db, storage } from "../firebase";
import { getAuth } from "firebase/auth";
import { IoMdCloudUpload } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function Newblog() {
  const user = getAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [blogImage, setBlogImage] = useState("");
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");

  const handleImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  useEffect(() => {
    setBlogImage("");
  }, []);

  // ? uploading image to firebase
  async function uploadImage() {
    if (selectedFile) {
      setUploading(true);
      const imageRef = ref(storage, `images/${uuidv4()}`);
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        setBlogImage(downloadURL);
      });
      setUploading(false);
    }
  }

  useEffect(() => {
    uploadImage();
  }, [selectedFile]);

  const createBlog = async () => {
    if (!title.trim()) {
      return toast.error("Title is required");
    }
    if (!selectedFile) {
      return toast.error("Blog image is required");
    }
    if (!content.trim()) {
      return toast.error("Content is required");
    }
    if (uploading) {
      return toast.error("Image is still uploading");
    }
    setLoading(true);
    await addDoc(collection(db, "blogs"), {
      title: title,
      content: content,
      author: user?.currentUser?.email,
      blogImage,
      createdAt: serverTimestamp(),
    });
    setTitle("");
    setContent("");
    setLoading(false);
    setSelectedFile("");
    setBlogImage("");
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
        <input type="file" hidden ref={inputRef} onChange={handleImage} />

        <div className="image_container">
          {selectedFile ? (
            <div className="selected_container">
              <IoIosCloseCircle
                size={24}
                onClick={() => setSelectedFile(null)}
              />
              <img src={selectedFile} alt="" className="selected_image" />
            </div>
          ) : (
            <div
              className="upload_image"
              onClick={() => inputRef.current.click()}
            >
              <IoMdCloudUpload size={24} />
              <p>Upload image</p>
            </div>
          )}
        </div>

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
