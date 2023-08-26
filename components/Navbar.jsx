import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 rounded-sm">
        <Link className=" text-white font-bold text-xl" href={"/"}>
          My Blogs
        </Link>
        <Link className="bg-white px-4 py-2 rounded-sm" href={"/addBlog"}>
          Add Blog
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
