import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";

const ShipList = () => {
  const { ships, setShips, filterShipList, setFilterShipList } =
    useDataContext();

  // State for Load More
  const [numberOfShip, setnumberOfShip] = useState(6);

  // Fetching data when page loaded.
  useEffect(() => {
    if (!ships) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filterlist created.
  useEffect(() => {
    setFilterShipList([...ships]);
    localStorage.setItem("ShipList", JSON.stringify(ships));
  }, [ships, setFilterShipList]);

  // Fetching data from API
  const getData = async () => {
    await axios(`https://swapi.dev/api/starships/?page=1`).then((res) => {
      setShips((prev) => [...prev, ...res.data.results]);
    });
    await axios(`https://swapi.dev/api/starships/?page=2`).then((res) => {
      setShips((prev) => [...prev, ...res.data.results]);
    });
    await axios(`https://swapi.dev/api/starships/?page=3`).then((res) => {
      setShips((prev) => [...prev, ...res.data.results]);
    });
    await axios(`https://swapi.dev/api/starships/?page=4`).then((res) => {
      setShips((prev) => [...prev, ...res.data.results]);
    });
  };

  // İncrease listed ships
  const handleLoadMore = () => {
    setnumberOfShip(numberOfShip + 6);
  };

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="4"
      mb="4"
    >
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={5}
        paddingX="3"
      >
        {filterShipList?.slice(0, numberOfShip).map((ship, index) => (
          <Link
            to={`starships/${ship.name.toLowerCase().replaceAll(" ", "-")}`}
            key={index}
          >
            <GridItem
              w="100%"
              textAlign="center"
              bg="black"
              bgSize="cover"
              cursor="pointer"
              borderRadius="20px"
            >
              <Image
                src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
                borderTopLeftRadius="20px"
                borderTopRightRadius="20px"
                height={{ "2xl": "280px" }}
              />
              <Heading size="md" color="white">
                {ship.name}
              </Heading>
              <Text color="white">{ship.model}</Text>
              <Text color="yellow">{ship.hyperdrive_rating}</Text>
            </GridItem>
          </Link>
        ))}
      </Grid>
      {numberOfShip < 36 && filterShipList.length > 6 ? (
        <Button onClick={handleLoadMore} mt="4">
          Load More
        </Button>
      ) : null}
    </Box>
  );
};

export default ShipList;
