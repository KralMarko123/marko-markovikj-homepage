import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const PoolBallsSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const PoolBallsContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="pool-balls"
    m="auto"
    mt={["-20px", "-60px", "-180px"]}
    mb={["-40px", "-140px", "-200px"]}
    w={[120, 150, 300]}
    h={[120, 150, 300]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <PoolBallsContainer>
      <PoolBallsSpinner />
    </PoolBallsContainer>
  );
};

export default Loader;
