import { Container, Link, List, ListItem, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/project";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { Badge, Heading, SimpleGrid, UnorderedList } from "@chakra-ui/layout";

const Project = () => {
  return (
    <Layout title="ECinema App">
      <Container minW="100%">
        <Title>
          ECinema App <Badge>2021</Badge>
        </Title>
        <Paragraph>
          This is a project I made while studying an ASP.NET course at my
          university. Nothing special but it does have some features that helped
          me better understand the importance of MVC patterns, payments,
          invoices and so on. It still has some tweaking left so that it would
          be a complete package.
        </Paragraph>

        <List my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/KralMarko123/ECinemaTicket"
              target="_blank"
            >
              https://github.com/KralMarko123/ECinemaTicket{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Demo Video</Meta>
            <Link
              href="https://drive.google.com/file/d/1DB6NtPK3cIR21pPTPfaLolEbqGYGzD7o/view?usp=sharing"
              target="_blank"
            >
              Google Drive Link
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>.NET, Bootstrap</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={2}>
          <Center>App Capabilities</Center>
        </Heading>

        <UnorderedList my={4} mb={4}>
          <ListItem>
            Invoice creation (Creating PDF's according to user orders)
          </ListItem>
          <ListItem>Importing users through uploaded Excel files</ListItem>
          <ListItem>Exporting data to an Excel file</ListItem>
          <ListItem>Default authentication</ListItem>
          <ListItem>Cart management (ECommerce behavior)</ListItem>
          <ListItem>Stripe testing payments</ListItem>
        </UnorderedList>

        <SimpleGrid columns={[1, 2]} gap={2}>
          <WorkImage src="/images/ecinema/ecinema-ticket-compressed.png" />
          <WorkImage src="/images/ecinema/ecinema-register-compressed.png" />
        </SimpleGrid>
        <WorkImage src="/images/ecinema/ecinema-payment-compressed.png" />
      </Container>
    </Layout>
  );
};

export default Project;
