import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey there! I&apos;m a graduate software engineer based in Australia & the US!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Oliver Quarm
          </Heading>
          <p>Junior Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ollie.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Background
        </Heading>
        <Paragraph>
        I am a recent graduate student from The University of Melbourne (undertaking a Master of Information Technology), 
        primarily interested in machine learning, web development, and distributed systems. I have written projects in 
        each of these domains, which are all open‐source and available on my GitHub page{' '}(
          <Link
            as={NextLink}
            href="https://github.com/olliequ"
            passHref
            target="_blank"
          >
            olliequ
          </Link>).
        </Paragraph>
        <br></br>
        <Paragraph>
        I am extremely familiar with command‐line tools, git, vim, UNIX‐like machines, web-development frameworks (React, NextJS, Django) and cloud technologies 
        (AWS, Redis etc.). My strongest programming languages are Python, JavaScript, and C. I thoroughly enjoy designing novel solutions to challenging 
        problems (especially with teams!), as well as learning new technologies and skills.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2015</BioYear>
          Graduated from The Alice Smith School (Malaysia) with A-level grades of A<sup>*</sup>AA.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from The University of Melbourne with Bachelor of Science (majored in Chemical Systems).
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from The University of Melbourne with Master of Information Technology (majored in Computing).
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          For the last semester of my Masters degree, I spent the last semester of my degree on <b>exchange</b> at University of Illinois Urbana Champaign (UIUC), one of the best computer science universities in America.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color='green.500' />
            Languages: I speak native English, B2 Mandarin Chinese, and B1 Spanish! 🗣️
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color='green.500' />
            Making music 🎵
          </ListItem>
          <ListItem>
            <ListIcon as={ChevronRightIcon} color='green.500' />
            Playing soccer ⚽
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={ChevronRightIcon} color='green.500' />
            Learning new technologies! 💻 
          </ListItem>
        </List>   
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/olliequ" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @olliequ
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/oliverquarm/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                oliverquarm
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
