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
    <Layout title="Ye-Discord">
      <Container minW="100%">
        <Title>
          Ye-Discord <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A simple chatting application made using getstream.io with channels,
          emoji and gif support. Followed an online tutorial in order to learn
          more about express.js. It also looked like a fun way to make a dummy
          version of discord for me and my friends :D
        </Paragraph>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ye-discord.netlify.app/" target="_blank">
              https://ye-discord.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Stream-Chat, Express.js</span>
          </ListItem>
        </List>

        <WorkImage src="/images/yediscord/yeDiscordPageImage2.png" />
        <WorkImage src="/images/yediscord/yeDiscordPageImage1.png" />
      </Container>
    </Layout>
  );
};

export default Project;
