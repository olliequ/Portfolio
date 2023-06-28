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
  <Layout title="walknote">
    <Container>
      <Title>
        KittiBot <Badge>2022-</Badge>
      </Title>
      <P>
        A Discord bot written entirely from scratch for my computer science community with over 1,500 members. I am the founder of this repository,
        and there&apos;s over 10 stars, 60+ commits and 6 contributers.
      </P>
      
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Script deployed on the cloud</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/olliequ/KittyBot">
            https://github.com/olliequ/KittyBot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kitti.png" alt="kitti" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
