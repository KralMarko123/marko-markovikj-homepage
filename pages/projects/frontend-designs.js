import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
  return (
    <Layout title="Billiards Scoretracker">
      <Container minW="100%">
        <Title>
          Frontend Designs <Badge>2020-</Badge>
        </Title>
        <Paragraph>
          This is a place where I list all of the designs I've coded personally
          in order to practice my frontend skills or just try learning new
          tools. Pages and solutions I try to recreate are mostly in HTML, CSS
          and JS. I'm currently trying to hone my SCSS skills, if you have any
          interesting sites that would be fun to recreate please send them to
          me!
        </Paragraph>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://kralmarko123.github.io/frontend-portfolio/"
              target="_blank"
            >
              https://kralmarko123.github.io/frontend-portfolio/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/KralMarko123/frontend-portfolio"
              target="_blank"
            >
              Github Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS (SCSS), JS</span>
          </ListItem>
        </List>

        <SimpleGrid columns={2} gap={4}>
          <WorkImage src="\images\frontend\landing-compressed.png" />
          <WorkImage src="\images\frontend\card-compressed.png" />
        </SimpleGrid>
        <WorkImage src="\images\frontend\comingsoon-compressed.png" />
        <SimpleGrid columns={2} gap={4}>
          <WorkImage src="\images\frontend\article-compressed.png" />
          <WorkImage src="\images\frontend\columns-compressed.png" />
        </SimpleGrid>
        <WorkImage src="\images\frontend\cards-compressed.png" />
      </Container>
    </Layout>
  );
};

export default Project;
