"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Field Required");
    }

    try {
      const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("faild to post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col w-[100%] gap-4 mt-5">
          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Eneter Blog Name"
            className="border-2 border-black p-4 rounded-sm"
          />
          <input
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Eneter Blog Details"
            className="border-2 border-black p-4 rounded-sm"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 w-fit rounded-sm"
          >
            Add Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
