import DetailesMain from "../../components/DetailesMain/DetailesMain";
import data from "../../data";

// тестовий варіант
const item = data[0].items[0];

function Detailes() {
  return (
    <div className="detailes-page">
      <DetailesMain data={item} />
    </div>
  );
}
export default Detailes;
