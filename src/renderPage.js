import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import Page from "./Pages/Page/Page";

function renderPage(curentPage, data) {
  switch (curentPage) {
    case "Home":
      return <Page data={data} />;
    case "List":
      return <List data={data} />;
    case "Streach":
      return <Detailes />;

    default:
      return <Page />;
  }
}

export default renderPage;
