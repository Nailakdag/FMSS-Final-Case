import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [searchShipWithName, setSearchShipWithName] = useState("");
  const [searchShipWithModel, setSearchShipWithModel] = useState("");
  const [ships, setShips] = useState(
    localStorage.getItem("ShipList")
      ? JSON.parse(localStorage.getItem("ShipList"))
      : ""
  );
  const [filterShipList, setFilterShipList] = useState([]);

  const data = {
    searchShipWithName,
    setSearchShipWithName,
    searchShipWithModel,
    setSearchShipWithModel,
    ships,
    setShips,
    filterShipList,
    setFilterShipList,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
export { useDataContext };
