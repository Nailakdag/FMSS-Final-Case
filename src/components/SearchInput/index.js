import React, { useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useDataContext } from "../../context/DataContext";

const SearchInput = () => {
  const {
    setSearchShipWithName,
    setSearchShipWithModel,
    ships,
    searchShipWithName,
    searchShipWithModel,
    setFilterShipList,
  } = useDataContext();

  useEffect(() => {
    handleFilterShipList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchShipWithName, searchShipWithModel]);

  useEffect(() => {
    if (!searchShipWithName) {
      setFilterShipList(ships);
    }
  }, [searchShipWithName, setFilterShipList, ships]);

  useEffect(() => {
    if (!searchShipWithModel) {
      setFilterShipList(ships);
    }
  }, [searchShipWithModel, setFilterShipList, ships]);

  // Function that seperates is input name or model according to #
  const handleChange = (e) => {
    if (e.target.value[0] === "#") {
      setSearchShipWithModel(e.target.value.slice(1));
      setSearchShipWithName("");
    } else {
      setSearchShipWithName(e.target.value);
      setSearchShipWithModel("");
    }
  };

  // Function that filtering ships with name and model
  const handleFilterShipList = () => {
    if (searchShipWithName) {
      setFilterShipList(
        ships.filter((ship) =>
          ship.name.toLowerCase().includes(searchShipWithName.toLowerCase())
        )
      );
    }
    if (searchShipWithModel) {
      setFilterShipList(
        ships.filter((ship) =>
          ship.name.toLowerCase().includes(searchShipWithModel.toLowerCase())
        )
      );
    }
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Input
        width={{ base: "90%", sm: "70%", md: "50%" }}
        borderRadius="50px"
        onChange={(e) => handleChange(e)}
        placeholder="Search by Name or Model (#)"
        _placeholder={{ textAlign: "center", color: "#e2e2e2" }}
      />
    </Box>
  );
};

export default SearchInput;
