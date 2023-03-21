import "./ListItem.scss";
import Button from "../../UI/Button/Button";
import ListItemLink from "../../UI/ListItemLink/ListItemLink";
import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import React from "react";
import ContextCurrentPage from "../../ContextCurrentPage";

function ListItem({ data, infoAboutList }) {
  const currentPage = React.useContext(ContextCurrentPage);

  return (
    <div className="list__item">
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
