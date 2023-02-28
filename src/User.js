import Link from "./Link";
import Title from "./Title";
import "./User.css";

function User(props) {
  console.log(props.user);
  return (
    <div className="item">
      <div className="index-container">
        <span className="item__index">{props.user.id}</span>
      </div>
      <Title gender={props.user.gender} text={props.user.name} />
      <ul>
        <li>{props.user.username}</li>
        <li>{props.user.address.suite}</li>
        <li>{props.user.address.city}</li>
        <li>{props.user.email}</li>
      </ul>
      <Link text="Read more" />
    </div>
  );
}

export default User;
