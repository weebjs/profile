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
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { FaGithub } from 'react-icons/fa';

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
                  <Popover placement='top-start'>
                    <PopoverTrigger>
                      <chakra.span
                        bgGradient="linear(to-br, #F5C400, #F5C400)"
                        bgClip="text"
                        cursor="pointer"
                        _hover={{ textDecoration: 'underline' }}
                      >
                        Tahfari
                      </chakra.span>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody fontSize="md">I'm also known as "weeb" on the website called  "<chakra.span
                          bgGradient="linear(to-br, #F5C400, #F5C400)"
                          bgClip="text"
                          cursor="pointer"
                          _hover={{ textDecoration: 'underline' }}
                        >
                            Guilded
                        </chakra.span>"
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Heading>
                <Text maxW="500px" fontSize="lg" textAlign="left" color="gray.500">
                  A full-stack developer tryna know more than meets the eye! 👀 I currently use the following frameworks: <Code children='React' />, <Code children='Next.js' />, and <Code children='Svelte' />. I'm also familiar with <Code children='HTML' />, <Code children='CSS' />, and <Code children='Javascript' />.
                </Text>
                <HStack spacing={5}>
                  <Link href="https://github.com/weebjs" isExternal>
                    <Button colorScheme="custom" bg="#F5C400" variant="solid" rounded="md" size="lg">
                      Github <Icon as={FaGithub} ml={1} h={4} w={4} />
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