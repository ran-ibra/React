import UserCard from "./UserCard";

export default function UsersList({ users, search }) {
  const filtered = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row">
      {filtered.map((user) => (
        <div key={user.id} className="col-md-3 mb-4">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
}
