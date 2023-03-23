import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import Page from "./Pages/Page/Page";

function renderPage(curentPage) {
  console.log(curentPage);
  switch (curentPage.page) {
    case "Home":
      return <Page />;
    case "List":
      return <List data={curentPage.data} />;
    case "Streach":
      return (
        <Detailes
          data={curentPage.data}
          infoAboutList={curentPage.infoAboutList}
        />
      );

    default:
      return <Page data={curentPage.data} />;
  }
}

export default renderPage;
