const FriendDetails = async ({ params }) => {
  const { friendId } = await params;
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  const friend = data.find((friend) => friend.id === Number(friendId));
  return (
    <div>
      <h2>{friend.name}</h2>
    </div>
  );
};

export default FriendDetails;
