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
    <Layout title="National Archives">
      <Container minW="100%">
        <Title>
          National Archives <Badge>2020</Badge>
        </Title>
        <Paragraph>
          The official website for the national archives. Made with Wordpress
          and extra HTML, CSS and JS. Worked together with Marjan from Bad Dog -
          DM DOOEL and had an excellent time doing so. Check him out!
        </Paragraph>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://arhiv.mk/" target="_blank">
              https://arhiv.mk/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Collaborator</Meta>
            <Link
              href="https://www.linkedin.com/in/marjan-krstev-2a3a801a/"
              target="_blank"
            >
              Marjan Krstev
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Wordpress, HTML, CSS, JS</span>
          </ListItem>
        </List>

        <WorkImage src="\images\arhiv\arhiv-compressed.jpg" />
      </Container>
    </Layout>
  );
};

export default Project;
