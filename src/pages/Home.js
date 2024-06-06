/** @format */
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const [fileChosen, setFileChosen] = useState(null);
  const [imageChosen, setImageChosen] = useState("");
  const [audioChosen, setAudioChosen] = useState("");
  const [videoChosen, setVideoChosen] = useState("");
  const [name, setName] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();

  const preview = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setFileChosen(readerEvent.target.result);
    };
  };

  useEffect(() => {
    if (fileChosen?.includes("image")) {
      setImageChosen(fileChosen);
    }
    if (fileChosen?.includes("video")) {
      setVideoChosen(fileChosen);
    }
    if (fileChosen?.includes("audio")) {
      setAudioChosen(fileChosen);
    }
  }, [fileChosen]);

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div>
      <h1>Home screen</h1>

      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
