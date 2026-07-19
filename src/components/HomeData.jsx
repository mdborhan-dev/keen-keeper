import Image from "next/image";
import Link from "next/link";

const HomeData = async () => {
  const res = await fetch(
    "https://keen-keeper-swart-five.vercel.app/friends.json",
  );
  const friends = await res.json();
  const onTrack = friends.filter((friend) => friend.status === "on-track");
  const neeedAttention = friends.filter(
    (friend) => friend.status === "overdue" || friend.status === "almost due",
  );
  return (
    <div className="py-6 space-y-8">
      {/* Stats*/}
      <div className="flex justify-between items-center gap-4">
        <div className="p-8 rounded-md bg-white flex flex-col gap-3 justify-between items-center text-center w-full">
          <h2 className="text-5xl font-medium">{friends.length}</h2>
          <p className="text-[#64748B]">Total Firends</p>
        </div>
        <div className="p-8 rounded-md bg-white flex flex-col gap-3 justify-between items-center text-center w-full">
          <h2 className="text-5xl font-medium">{onTrack.length}</h2>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="p-8 rounded-md bg-white flex flex-col gap-3 justify-between items-center text-center w-full">
          <h2 className="text-5xl font-medium">{neeedAttention.length}</h2>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="p-8 rounded-md bg-white flex flex-col gap-3 justify-between items-center text-center w-full">
          <h2 className="text-5xl font-medium">0</h2>
          <p className="text-[#64748B]">Interaction This Month</p>
        </div>
      </div>
      {/* dynamic card data*/}
      <div>
        <h2 className="text-2xl font-bold">Your Frineds</h2>
        <div className="grid grid-cols-4 gap-4">
          {friends.map((friend) => (
            <Link key={friend.id} href={`/friend/${friend.id}`}>
              <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col justify-between items-center gap-2">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <h3 className="text-xl font-semibold text-[#1F2937]">
                  {friend.name}
                </h3>
                <div className="flex flex-col justify-between items-center gap-1">
                  <p className="text-[12px] text-[#64748B]">
                    {friend.days_since_contact}d ago
                  </p>
                  <div className="flex gap-1">
                    {friend.tags.map((tag, ind) => (
                      <div
                        key={ind}
                        className="badge rounded-3xl badge-info text-lg"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`badge rounded-3xl text-lg ${friend.status === "on-track" ? "badge-primary" : friend.status === "overdue" ? "badge-error" : friend.status === "almost due" ? "badge-warning" : ""}`}
                  >
                    {friend.status}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeData;
