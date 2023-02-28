import Link from "./Link";
import Title from "./Title";
import List from "./List";
import "./User.css";

function User(props) {
  return (
    <div className="item">
      <div className="index-container">
        <span className="item__index">{props.user.id}</span>
      </div>
      <Title gender={props.user.gender} text={props.user.name} />
      <List
        username={props.user.username}
        suite={props.user.address.suite}
        city={props.user.address.city}
        email={props.user.email}
      />
      <Link text="Read more" />
    </div>
  );
}

export default User;
