"use client";

import Button from "@/components/Button";
import GalleryGird from "@/components/GalleryGird";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [photoLists, setPhotoLists] = useState([]);
  const [updatedUI, setUpdatedUI] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5002/api/getAll").then((res) => {
      console.log("----- get all photo", res.data);
      setPhotoLists(res.data);
    });
  }, [updatedUI]);

  return (
    <>
      <GalleryGird photos={photoLists} />
      <Button setUpdatedUI={setUpdatedUI} />
    </>
  );
}
