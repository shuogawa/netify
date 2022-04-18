import React from "react";
import {Link} from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom"

const Links: React.FC = () => {
  return (
    <>
      <Link as={ReactRouterLink} to="/a">PageA</Link>
      <Link as={ReactRouterLink} to="/a">PageB</Link>
      <Link as={ReactRouterLink} to="/a">PageC</Link>
      <Link as={ReactRouterLink} to="/a">PageD</Link>
      <Link as={ReactRouterLink} to="/a">PageE</Link>
    </>
  )
}

export default Links;