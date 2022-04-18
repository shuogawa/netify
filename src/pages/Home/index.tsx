import React from "react";
import Links from "../../components/Links";
import {Box} from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <>
      <Box p={4}>
        <Links/>
        Home
      </Box>
    </>
  )
}

export default Home;