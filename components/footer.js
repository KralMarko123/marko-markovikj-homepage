import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="12" fontFamily="Fira Code">
      &copy; {new Date().getFullYear()} Marko Markovikj. All Rights Reserved.
    </Box>
  );
};

export default Footer;
