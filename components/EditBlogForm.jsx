"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const EditBlogForm = ({ id, title, description }) => {
  console.log(id, "Need");
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleSubmit = async () => {
    console.log("Button press");
    try {
      var myHeaders = new Headers();
      myHeaders.append("id", "64ea18999db6248c292e1fc8");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        newTitle: "HyperTML css",
        newDescription: "Updated HTML",
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`http://localhost:3000/api/blogs/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className=" flex flex-col w-[100%] gap-4 mt-5">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Eneter Blog Name"
          className="border-2 border-black p-4 rounded-sm"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Eneter Blog Details"
          className="border-2 border-black p-4 rounded-sm"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 w-fit rounded-sm"
        >
          Update Blog
        </button>
      </div>
    </form>
  );
};

export default EditBlogForm;
