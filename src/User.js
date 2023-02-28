import "./User.css";

function User(props) {
  console.log(props.user);
  return (
    <div className="item">
      <div className="index-container">
        <span className="item__index">{props.user.id}</span>
      </div>

      <h2>{props.user.name}</h2>
      <ul>
        <li>{props.user.username}</li>
        <li>{props.user.address.suite}</li>
        <li>{props.user.address.city}</li>
        <li>{props.user.email}</li>
      </ul>
    </div>
  );
}

export default User;
