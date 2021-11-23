import {
  Button,
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Text,
  List,
  ListItem,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container minW="100%">
        <Box
          borderRadius="xl"
          mt={4}
          p={4}
          bg={useColorModeValue("#ffe8d6", "whiteAlpha.200")}
          mb={4}
          align="center"
        >
          <Text fontSize={16}>
            Hello, I'm a developer and tester based in Skopje!
          </Text>
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Marko Markovikj
            </Heading>
            <Text fontStyle="italic">
              Software Engineer ( Developer / Tester )
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={4}
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              src="/images/markoProfile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Paragraph>
            Marko is a software developer and tester based in Skopje with a
            knack for web development. He loves designing and coding pet
            projects and is currently finishing his studies as a software
            engineer. When not in front of a computer screen, he teaches street
            dance and plays billiards. He is currently working as an automation
            tester at{" "}
            <Link href="https://www.endava.com/" target="_blank">
              <a>Endava</a>
            </Link>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Skopje, Macedonia
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Finished High School and started studies at the Faculty of Computer
            Science and Engineering (FINKI)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <Paragraph>
            Music,{" "}
            <Link target="_blank" href="https://www.instagram.com/kralmarko/">
              Dance
            </Link>
            , Billiards, Running,{" "}
            <NextLink href="/projects/frontend-designs">
              <Link>Front-end development</Link>
            </NextLink>
            .
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading variant="section-title">Links</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/KralMarko123" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @KralMarko123
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/marko-markovikj-bb852a1a6/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @MarkoMarkovikj
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
