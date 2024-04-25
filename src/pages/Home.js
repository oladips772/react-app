/** @format */
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Header from "../components/Header";

function Home() {
  const [fileChosen, setFileChosen] = useState(null);
  const [imageChosen, setImageChosen] = useState("");
  const [audioChosen, setAudioChosen] = useState("");
  const [videoChosen, setVideoChosen] = useState("");
  const inputRef = useRef();

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

  return (
    <div>
      <input type="file" onChange={(e) => preview(e)} hidden ref={inputRef} />
      <button onClick={() => inputRef.current.click()}>Select Image</button>

      {imageChosen && (
        <img src={imageChosen} alt="" srcset="" className="image" />
      )}

      {videoChosen && (
        <video src={videoChosen} controls height={300} width={400}></video>
      )}
      {audioChosen && (
        <audio src={audioChosen} controls height={300} width={400}></audio>
      )}
    </div>
  );
}

export default Home;
