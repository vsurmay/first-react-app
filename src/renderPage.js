import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import Page from "./Pages/Page/Page";

function renderPage(curentPage) {
  switch (curentPage.page) {
    case "Home":
      return <Page />;
    case "List":
      return <List data={curentPage.data} addButton={curentPage.addButton} />;
    case "Streach":
      return (
        <Detailes
          data={curentPage.data}
          infoAboutList={curentPage.infoAboutList}
          addButton={curentPage.addButton}
        />
      );

    default:
      return <Page data={curentPage.data} />;
  }
}

export default renderPage;
