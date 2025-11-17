export default function UserCard({ user }) {
  const roleColors = {
    admin: "bg-danger text-white",
    user: "bg-success text-white",
    moderator: "bg-warning"
  };

  return (
    <div className="card text-center p-3 shadow-sm">
      <img
        src={user.image}
        alt="profile"
        className="rounded-circle mx-auto mb-3"
        width="80"
        height="80"
      />

      <span className={`badge mb-3 ${roleColors[user.role]}`}>{user.role}</span>

      <h5>{user.username}</h5>
      <p className="text-muted mb-1">{user.email}</p>
      <p className="text-muted mb-1">{user.phone}</p>
      <p className="text-muted">{user.birthDate}</p>
    </div>
  );
}
