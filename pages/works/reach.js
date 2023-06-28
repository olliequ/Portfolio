import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Reach <Badge>2021-</Badge>
      </Title>
      <P>
        Reach is a website focused on mental health, which provides services such as allowing users to create personalised accounts, 
        write & save journal entries, as well as plan and undertake meditation sessions.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/olliequ/Reach">
          https://github.com/olliequ/Reach <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/reach.png" alt="reach" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
