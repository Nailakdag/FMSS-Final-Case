import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import ShipList from "../components/ShipList";

function Homepage() {
  return (
    <>
      <Box
        backgroundColor="black"
        paddingBottom={4}
        borderBottom={"3px solid white"}
        position="sticky"
        top="0"
      >
        <Header />
        <SearchInput />
      </Box>
      <ShipList />
    </>
  );
}

export default Homepage;
