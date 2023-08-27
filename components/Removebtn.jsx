"use client";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
const Removebtn = ({ id }) => {
  const router = useRouter();
  const removeBlog = async () => {
    console.log(id);
    const confirmed = confirm("Are You Sure To Delete Blog?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
        console.log("blog deleted");
      }
    }
  };
  return (
    <>
      <button
        onClick={removeBlog}
        className="text-red-500 font-medium text-2xl"
      >
        <MdDelete></MdDelete>
      </button>
    </>
  );
};

export default Removebtn;
