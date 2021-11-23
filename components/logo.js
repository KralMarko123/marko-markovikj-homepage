import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease-in-out;
    transform: rotate(-40deg);
  }
  &:hover img {
    transform: rotate(0deg);
  }
`;

const Logo = () => {
  const footPrintImg = `/images/MarkoLogoIcon${useColorModeValue(
    "Black",
    "White"
  )}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="Fira Code"
            fontWeight="bold"
            ml={1}
          >
            Marko Markovikj
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
