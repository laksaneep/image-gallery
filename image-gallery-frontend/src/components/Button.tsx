"use client";

import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

type Props = {
  setUpdatedUI: Function;
};

const Button = (props: Props) => {
  const handleFilePicker = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e !== null && e.target.files) {
      let formData = new FormData();
      e.preventDefault();
      formData.append("photo", e.target.files[0]);
      axios
        .post("http://localhost:5002/api/save", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          props.setUpdatedUI(res.data._id);
          console.log("------ resutl : ", res.data);
        })
        .catch((err) => console.log("Cannot save file because : ", err));
    }
  };

  return (
    <label
      className="fixed right-0 bottom-0 m-8 text-5xl text-orange-600"
      htmlFor="file-picker"
    >
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file-picker"
        id="file-picker"
        onChange={(e) => handleFilePicker(e)}
      />
    </label>
  );
};

export default Button;
