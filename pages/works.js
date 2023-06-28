import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbC from '../public/images/works/C.png'
import thumbStocks from '../public/images/works/stocks.png'
import thumbKitti from '../public/images/works/kitti.png'
import thumbPortweb from '../public/images/works/portweb.png'
import thumbTenzies from '../public/images/works/Tenzies.jpeg'
import thumbReach from '../public/images/works/reach.png'

const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="stocks" title="ML-Reinforced Trading Bot" thumbnail={thumbStocks}>
            Trading bot that leverages the power of machine learning to autonomously trade cryptocurrencies.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="tenzies"
            title="Tenzies"
            thumbnail={thumbTenzies}
          >
            A web app written in ReactJS emulating the popular game Tenzies.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="kitti"
            title="KittiBot"
            thumbnail={thumbKitti}
          >
            A Discord bot written entirely from scratch for my computer science community with over 1,500 members.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="portweb" thumbnail={thumbPortweb} title="Personal Website">
            My personal website showcasing my personal projects & background information!
          </WorkGridItem>
        </Section>

        <Section delay={1.0}>
          <WorkGridItem
            id="reach"
            title="Reach"
            thumbnail={thumbReach}
          >
            Reach is a website focused on mental health, which provides services such as allowing users to create personalised accounts, 
            write & save journal entries, as well as plan and undertake meditation sessions.
          </WorkGridItem>
        </Section>
        <Section delay={1.0}>
          <WorkGridItem id="C" thumbnail={thumbC} title="C Webserver">
            A functional webserver coded entirely from scratch in C.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
