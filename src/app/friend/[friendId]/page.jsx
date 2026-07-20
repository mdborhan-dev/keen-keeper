import QuickCheckIn from "@/components/QCheckInButtons/QuickCheckIn";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiArchive } from "react-icons/fi";
import { HiBellSnooze } from "react-icons/hi2";

export const metadata = {
  title: "Keen Keeper friends Details page",
  description:
    "Nurture the relationships that matter most through details.",
};

const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch(
    "https://keen-keeper-swart-five.vercel.app/friends.json",
  );
  const data = await res.json();
  const friend = data.find((friend) => friend.id === Number(friendId));
  if (!friend) {
    notFound()
  }
  return (
    <div className="min-h-[70vh] py-6 md:py-20 sm:py-9 sm:grid flex flex-col sm:grid-cols-3 md:grid-cols-9 md:grid-rows-7 gap-4 max-w-277.5 mx-auto max-sm:mx-4">
      {/* photo card*/}
      <div className="row-span-4 col-span-2 md:col-span-3 bg-white rounded-3xl p-6 flex flex-col justify-between items-center gap-4 text-center">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <h3 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h3>
        <div
          className={`badge rounded-3xl text-lg text-white ${friend.status === "on-track" ? "badge-primary" : friend.status === "overdue" ? "badge-error" : friend.status === "almost due" ? "badge-warning" : ""}`}
        >
          {friend.status}
        </div>
        <div className="flex gap-2">
          {friend.tags.map((tag, ind) => (
            <div key={ind} className="badge rounded-3xl badge-info text-lg text-white">
              {tag}
            </div>
          ))}
        </div>
        <h4 className="text-2xl italic text-[#1f2937]">{`"${friend.bio}"`}</h4>
        <p className="text-md text-[#1f2937]">Preferred: {friend.email}</p>
        {/* the 3 button section for mobile and tablet for bigger device that is in the bottom*/}

        <div className="bg-transparent md:hidden rounded-3xl flex gap-4 justify-around items-center">
          <button className="btn p-6 text-xl bg-white rounded-xl">
            <HiBellSnooze />
          </button>
          <button className="btn p-6 text-xl bg-white rounded-xl">
            <FiArchive />
          </button>
          <button className="btn p-6 text-xl bg-white text-red-600 rounded-xl">
            <FaRegTrashCan />
          </button>
        </div>
      </div>

      {/* days since contact*/}
      <div className="bg-white rounded-3xl col-span-2 row-span-2 p-4 sm:p-6 text-center sm:flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-semibold">{friend.days_since_contact}</h2>
        <p className="text-[#64748B] text-xl">Days Since Contact</p>
      </div>
      {/* Goal*/}
      <div className="bg-white rounded-3xl col-span-2 row-span-2 p-4 sm:p-6 text-center sm:flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-semibold">{friend.goal}</h2>
        <p className="text-[#64748B] text-xl">Goal (Days)</p>
      </div>
      {/* Next Due*/}
      <div className="bg-white rounded-3xl col-span-4 md:col-span-2 row-span-2 p-4 sm:p-6 text-center sm:flex flex-col gap-4 justify-center items-center">
        <h2 className="text-4xl font-semibold">{friend.next_due_date}</h2>
        <p className="text-[#64748B] text-xl">Next Due</p>
      </div>
      {/* relationship Goal*/}
      <div className="bg-white rounded-3xl col-span-6 row-span-2 p-4 sm:p-6 py-8 flex flex-col justify-around gap-6">
        <div className="flex justify-between items-center">
          <p className="text-2xl sm:text-3xl ">Relationship Goal</p>{" "}
          <button className="btn text-md sm:text-xl">Edit</button>
        </div>
        <p className="text-xl sm:text-2xl">
          Connect every <strong>{friend.goal} days</strong>
        </p>
      </div>
      {/* 3 more button for big screen only*/}
      <div className="row-span-3 col-span-3 bg-transparent rounded-3xl hidden md:grid grid-rows-3 gap-6">
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
        <h3 className="text-2xl sm:text-3xl font-medium">Quick Check In</h3>
        <QuickCheckIn friend={friend} />
      </div>
    </div>
  );
};

export default FriendDetails;
