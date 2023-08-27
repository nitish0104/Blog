import EditBlogForm from "@/components/EditBlogForm";
import React from "react";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};

const EditBlog = async ({ params }) => {
  const { id } = params;
  const { blog } = await getBlogById(id);
  const { title, description } = blog;
  console.log(id, "No need");
  return (
    <div>
      <EditBlogForm
        key={id}
        id={id}
        title={title}
        description={description}
      ></EditBlogForm>
    </div>
  );
};

export default EditBlog;
