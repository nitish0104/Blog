import Link from "next/link";
import Removebtn from "./Removebtn";
import { HiPencilAlt } from "react-icons/hi";

const Bloglist = () => {
  return (
    <div className=" border-2 border-gray-300 mt-5 flex justify-between items-start py-5 px-4 shadow-md">
      <div>
        <h2 className="font-black text-xl">Blogs Title</h2>
        <div>Blog Discription</div>
      </div>

      <div className="flex gap-4 ">
        <Removebtn></Removebtn>
        <Link
          className="text-blue-600 font-bold text-2xl"
          href={"/editBlog/id"}
        >
          <HiPencilAlt></HiPencilAlt>
        </Link>
      </div>
    </div>
  );
};

export default Bloglist;
