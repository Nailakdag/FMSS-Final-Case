import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const ShipDetailPage = () => {
  // Taking the name of the ship from url
  let { ship } = useParams();

  // Navigate
  const navigate = useNavigate();

  // Context
  const { ships } = useDataContext();

  // Function that compare url(ship's name) in the list of ships
  const data = ships?.find(
    (data) => data.name.toLowerCase().replaceAll(" ", "-") === ship
  );

  // Function for return homepage
  const handleReturn = () => {
    navigate("/");
  };

  console.log("ship", ship);
  console.log("ships", ships);

  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems={{ base: "flex-start", lg: "center" }}
      position="relative"
    >
      <Button
        position="absolute"
        top="20px"
        left="20px"
        paddingX={{ base: "30px", sm: "60px" }}
        onClick={handleReturn}
      >
        Return
      </Button>
      <Card maxW={{ base: "90%", md: "500px", xl: "600px" }} marginTop="80px">
        <CardBody>
          <Heading textAlign="center" size="md" mb="2">
            {data?.name}
          </Heading>
          <Image
            src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
            borderRadius="lg"
          />
          <Box mt="2">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Model :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.model}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Hyperdrive Rating :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.hyperdrive_rating}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Passengers :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "250px" }}>
                {data?.passengers}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Max Atmosphering Speed :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.max_atmosphering_speed}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Manufacturer :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.manufacturer}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Crew :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.crew}
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
              borderBottom="1px solid white"
            >
              <Text marginRight="20px">Cargo Capacity :</Text>
              <Text maxWidth={{ base: "100px", sm: "200px", md: "auto" }}>
                {data?.cargo_capacity}
              </Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ShipDetailPage;
