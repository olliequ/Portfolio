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
        C Webserver <Badge>2023-</Badge>
      </Title>
      <P>
      A functional webserver coded entirely from scratch in C. This repo does not contain any third-party libs; all incoming HTTP requests have been parsed entirely manually.
      <P>Structs have been used to parse the HTTP requests and responses into their respective HTTP headers. All server responses have also been manually constructed.</P>
      <P>Connections are made between server and client over a websocket. This server has multi-threading capabilities -- each client is given their own thread.</P>
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Local Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/olliequ/C-Server">
          https://github.com/olliequ/C-Server <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/C.png" alt="C" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
