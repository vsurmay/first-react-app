import "./ListItem.scss";
import Button from "../../UI/Button/Button";
import ListItemLink from "../../UI/ListItemLink/ListItemLink";
import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import React from "react";
import ContextCurrentPage from "../../ContextCurrentPage";

function ListItem({ data, infoAboutList, addButton }) {
  const currentPage = React.useContext(ContextCurrentPage);
  // console.log(infoAboutList);
  // console.log(data);
  return (
    <div className="list__item">
      <Button
        onClick={() => {
          currentPage.deleteRecept(infoAboutList, data);
        }}
        back
        className="list__item-delete"
      >
        Delete recept
      </Button>
      <Image url={data.image} alt={data.name} />
      <div className="list__item-discription">
        <ListItemLink />
        <ListItemLink />
        <ListItemLink />
      </div>
      <Title center less>
        {data.name}
      </Title>
      <Button
        onClick={() => {
          currentPage.setCurrentPage({
            page: "Streach",
            data: data,
            infoAboutList: infoAboutList,
            addButton: addButton,
          });
        }}
        listButton
      >
        Show details
      </Button>
    </div>
  );
}

export default ListItem;
