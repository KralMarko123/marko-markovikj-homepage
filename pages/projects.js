import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/layout";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbYeDiscord from "../public/images/yediscord/yediscord_eyecatch-compressed.jpg";
import thumbECinema from "../public/images/ecinema/dotnet-compressed.jpg";
import thumbPoolTracker from "../public/images/scoretracker/pooltracker-compressed.png";
import thumbFrontPortfolio from "../public/images/frontend/frontend-compressed.jpg";
import thumbArhiv from "../public/images/arhiv/arhiv-compressed.jpg";
import thumbDom from "../public/images/dom/dom-compressed.jpg";
import Layout from "../components/layouts/article";

const Projects = () => {
  return (
    <Layout>
      <Container minW="100%">
        <Heading as="h3" variant="section-title">
          Personal
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="ye-discord"
              title="Ye-Discord"
              thumbnail={thumbYeDiscord}
            >
              A simple chatting application made using getstream.io with
              channels, emoji and gif support
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="e-cinema-app"
              title="ECinema App"
              thumbnail={thumbECinema}
            >
              A .NET application mimicking the behavior of an ecommerce site
              capable of invoice creation, file uploads and CRUD actions
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="billiards-scoretracker"
              title="Billiards Scoretracker"
              thumbnail={thumbPoolTracker}
            >
              A simple scoretracker for all pool enthusiasts. Made with React
              using Context API
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="frontend-designs"
              title="Frontend Designs"
              thumbnail={thumbFrontPortfolio}
            >
              A place to showcase all the frontend solutions I've coded
              personally using HTML, CSS and JS
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" variant="section-title">
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="political-party-dom"
              thumbnail={thumbDom}
              title="Political Party DOM"
            >
              The official website for the political party DOM. Made with
              Wordpress and extra HTML, CSS and JS
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="national-archives"
              thumbnail={thumbArhiv}
              title="National Archives"
            >
              The official website for the national archives. Made with
              Wordpress and extra HTML, CSS and JS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
