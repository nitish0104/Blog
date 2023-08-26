const page = () => {
  return (
    <>
      <form>
        <div className=" flex flex-col w-[100%] gap-4 mt-5">
          <input
            type="text"
            placeholder="Eneter Blog Name"
            className="border-2 border-black p-4 rounded-sm"
          />
          <input
            type="text"
            placeholder="Eneter Blog Details"
            className="border-2 border-black p-4 rounded-sm"
          />
          <button className="bg-green-600 text-white px-4 py-2 w-fit rounded-sm">
            Add Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default page;
