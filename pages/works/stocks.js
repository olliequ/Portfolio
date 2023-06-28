import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Damianos <Badge>2021-</Badge>
      </Title>
      <P>
        Project Damianos: A ML-Reinforced Trading Bot. It leverages the power of machine learning to autonomously trade cryptocurrencies.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Script deployed on the cloud (Digital Ocean)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/olliequ/MachineLearningTradingBot">
            https://github.com/olliequ/MachineLearningTradingBot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/stocks.png" alt="stocks" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
