import Detailes from "./Pages/Detailes/Detailes";
import List from "./Pages/List/List";
import Page from "./Pages/Page/Page";

function renderPage(curentPage) {
  switch (curentPage) {
    case "Home":
      return <Page />;
    case "List":
      return <List />;
    case "Streach":
      return <Detailes />;

    default:
      return <Page />;
  }
}

export default renderPage;
