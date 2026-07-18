import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiArchive } from "react-icons/fi";
import { HiBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  const friend = data.find((friend) => friend.id === Number(friendId));
  return (
    <div className="min-h-[70vh] py-20 grid grid-cols-9 grid-rows-7 gap-6">
      {/* photo card*/}
      <div className="row-span-4 col-span-3 bg-white rounded-3xl p-6 flex flex-col justify-between items-center gap-4 text-center">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <h3 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h3>
        <div
          className={`badge rounded-3xl text-lg ${friend.status === "on-track" ? "badge-primary" : friend.status === "overdue" ? "badge-error" : friend.status === "almost due" ? "badge-warning" : ""}`}
        >
          {friend.status}
        </div>
        <div className="flex gap-2">
          {friend.tags.map((tag, ind) => (
            <div key={ind} className="badge rounded-3xl badge-info text-lg">
              {tag}
            </div>
          ))}
        </div>
        <h4 className="text-3xl italic text-[#1f2937]">{`"${friend.bio}"`}</h4>
        <p className="text-xl text-[#1f2937]">Prefered: {friend.email}</p>
      </div>
      {/* days since contact*/}
      <div className="bg-white rounded-3xl col-span-2 row-span-2 p-6 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl font-semibold">{friend.days_since_contact}</h2>
        <p className="text-[#64748B] text-xl">Days Since Contact</p>
      </div>
      {/* Goal*/}
      <div className="bg-white rounded-3xl col-span-2 row-span-2 p-6 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl font-semibold">{friend.goal}</h2>
        <p className="text-[#64748B] text-xl">Goal (Days)</p>
      </div>
      {/* Next Due*/}
      <div className="bg-white rounded-3xl col-span-2 row-span-2 p-6 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl font-semibold">{friend.next_due_date}</h2>
        <p className="text-[#64748B] text-xl">Next Due</p>
      </div>
      {/* relationship Goal*/}
      <div className="bg-white rounded-3xl col-span-6 row-span-2 p-6 py-8 flex flex-col justify-around gap-6">
        <div className="flex justify-between items-center">
          <p className="text-3xl ">Relationship Goal</p>{" "}
          <button className="btn text-xl">Edit</button>
        </div>
        <p className="text-2xl">
          Connect every <strong>30 days</strong>
        </p>
      </div>
      {/* 3 more*/}
      <div className="row-span-3 col-span-3 bg-transparent rounded-3xl grid grid-rows-3 gap-6">
        <button className="btn btn-ghost w-full h-full text-xl bg-white rounded-2xl">
          <HiBellSnooze /> Snooze 2 Weeks
        </button>
        <button className="btn btn-ghost w-full h-full text-xl bg-white rounded-2xl">
          <FiArchive /> Archive
        </button>
        <button className="btn btn-ghost w-full h-full text-xl bg-white text-red-600 rounded-2xl">
          <FaRegTrashCan /> Delete
        </button>
      </div>
      {/* Quick check in */}
      <div className="row-span-3 col-span-6 bg-white rounded-3xl p-6 flex flex-col gap-4 justify-evenly">
        <h3 className="text-3xl font-medium">Quick Check In</h3>
        <div className="grid grid-cols-3 gap-4 ">
          <button className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2">
            <BiPhoneCall className="text-5xl" />{" "}
            <span className="text-2xl">Call</span>
          </button>
          <button className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2">
            <MdOutlineMessage className="text-5xl" />{" "}
            <span className="text-2xl">Text</span>
          </button>
          <button className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2">
            <IoVideocamOutline className="text-5xl" />{" "}
            <span className="text-2xl">Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
