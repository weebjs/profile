import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  chakra,
  useColorModeValue,
  Container,
  Heading,
  Stack,
  HStack,
  Avatar,
  Icon
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { FaGithub, FaHandshake } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="70vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Container maxW="7xl" p={4}>
              <Stack direction="column" spacing={6} alignItems="left" mt={8} mb={16}>
                <Stack justifyContent="left" alignItems="left">
                </Stack>
                <Heading as="h1" fontSize="5xl" fontWeight="bold" textAlign="left" maxW="600px">
                  Hello! I'm&nbsp;
                  <chakra.span
                    bgGradient="linear(to-br, #F5C400, #F5C400)"
                    bgClip="text"
                    cursor="pointer"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Tahfari
                  </chakra.span>
                </Heading>
                <Text maxW="500px" fontSize="lg" textAlign="left" color="gray.500">
                  A full-stack developer tryna know more than meets the eye! 👀 I currently use the following frameworks: <Code children='React' />, <Code children='Next.js' />, and <Code children='Svelte' />. I'm also familiar with <Code children='HTML' />, <Code children='CSS' />, and <Code children='Javascript' />.
                </Text>
                <HStack spacing={5}>
                  <Link href="https://www.behance.net/weebthedev" isExternal>
                    <Button colorScheme="custom" bg="#F5C400" variant="solid" rounded="md" size="lg">
                      Hire Me <Icon as={FaHandshake} ml={2} h={7} w={7} />
                    </Button>
                  </Link>
                </HStack>
              </Stack>
            </Container>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;