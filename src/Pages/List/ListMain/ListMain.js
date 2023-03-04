import "./ListMain.scss";
import ListItem from "./ListItem/ListItem";
import image01 from "./img/burger.jpg";
import image02 from "./img/delish.jpg";
import image03 from "./img/salad.jpg";
import image04 from "./img/pasta.jpg";
import image05 from "./img/coctails.jpg";
import image06 from "./img/cake.jpg";
import image07 from "./img/green-salad.jpg";

function ListMain() {
  return (
    <section className="section__list">
      <div className="container__less">
        <div className="list__wrapper">
          <ListItem image={image01} />
          <ListItem image={image02} />
          <ListItem image={image03} />
          <ListItem image={image04} />
          <ListItem image={image05} />
          <ListItem image={image06} />
          <ListItem image={image07} />
          <ListItem image={image01} />
          <ListItem image={image01} />
          <ListItem image={image02} />
          <ListItem image={image03} />
          <ListItem image={image04} />
          <ListItem image={image05} />
          <ListItem image={image06} />
          <ListItem image={image07} />
          <ListItem image={image01} />
        </div>
      </div>
    </section>
  );
}

export default ListMain;
