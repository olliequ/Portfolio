import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tenzies">
    <Container>
      <Title>
        Tenzies <Badge>2023-</Badge>
      </Title>
      <P>
        A web app written in ReactJS emulating the popular game Tenzies.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, JavaScript, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/olliequ/Tenzies">
          https://github.com/olliequ/Tenzies <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Tenzies.jpeg" alt="tenzies" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
