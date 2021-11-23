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
          Billiards Scoretracker <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A simple scoretracker for all pool enthusiasts. Made with React using
          Context API. Serves as a way to keep track during pool games with
          friends.
        </Paragraph>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://kralmarko123.github.io/billiards-scoretracker-react/"
              target="_blank"
            >
              Github Pages Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/KralMarko123/billiards-scoretracker-react"
              target="_blank"
            >
              Github Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, SCSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/scoretracker/pooltracker-compressed.png" />
        <SimpleGrid columns={[1, 2]} gap={2}>
          <WorkImage src="/images/scoretracker/scoretracker-mobile1-compressed.png" />
          <WorkImage src="/images/scoretracker/scoretracker-tablet1-compressed.png" />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Project;
