"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-white shadow-sm py-4">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <Link href="/">
          <h1 className="text-xl sm:text-5xl text-[#244D3F]">
            <span className="font-bold">Keen</span>
            <span className="">Keeper</span>
          </h1>
        </Link>
        <div>
          <Link href="/">
            <button
              className={`btn btn-ghost hover:bg-[#244D3F] hover:text-white rounded-md ${
                pathName === "/" ? "bg-primary text-white" : ""
              }`}
            >
              <RiHomeLine />
              <span className="hidden sm:inline"> Home</span>
            </button>
          </Link>
          <Link href="/timeline">
            <button
              className={`btn btn-ghost hover:bg-[#244D3F] hover:text-white rounded-md ${
                pathName === "/timeline" ? "bg-primary text-white" : ""
              }`}
            >
              <MdOutlineWatchLater />
              <span className="hidden sm:inline"> Timeline</span>
            </button>
          </Link>
          <Link href="/stats">
            <button
              className={`btn btn-ghost hover:bg-[#244D3F] hover:text-white rounded-md ${
                pathName === "/stats" ? "bg-primary text-white" : ""
              }`}
            >
              <FaChartLine />
              <span className="hidden sm:inline"> Stats</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
