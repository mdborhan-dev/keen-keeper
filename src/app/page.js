import HomeData from "@/components/HomeData";
import { IoMdAdd } from "react-icons/io";

export default function Home() {
  return (
    <div className="mt-5 sm:mt-10 min-h-[80vh] max-w-277.5 mx-auto max-sm:mx-4">
      <div className="text-center space-y-3 sm:space-y-4 w-11/12 mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="color-[#64748B] text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn btn-primary">
          <IoMdAdd /> Add Friend
        </button>
      </div>
      <div>
        <HomeData />
      </div>
    </div>
  );
}
