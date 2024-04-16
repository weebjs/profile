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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Container maxW="7xl" p={4}>
              <Stack direction="column" spacing={6} alignItems="center" mt={8} mb={16}>
                <Heading as="h1" fontSize="4xl" fontWeight="bold" textAlign="center" maxW="600px">
                  Hello! I'm <chakra.span bgGradient="linear(to-br, #F5C400, #F5C400)" bgClip="text">
                    weeb
                  </chakra.span>!
                </Heading>
                <Text maxW="500px" fontSize="lg" textAlign="center" color="gray.500">
                  Our mission is to empower anyone to build UIs, faster. We're reducing the entry barrier,
                  making design skills accessible.
                </Text>
                <HStack spacing={5}>
                  <Button colorScheme="custom" bg="#F5C400" variant="solid" rounded="md" size="lg">
                    Get Started
                  </Button>
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