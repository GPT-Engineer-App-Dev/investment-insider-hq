import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>Financial News</Heading>
          <Text fontSize="lg">Stay updated with the latest financial news, market data, and trending topics.</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">News Headline 1</Heading>
                <Text mt={4}>Brief description of the news article...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">News Headline 2</Heading>
                <Text mt={4}>Brief description of the news article...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">News Headline 3</Heading>
                <Text mt={4}>Brief description of the news article...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Market Data</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Market Data 1</Heading>
                <Text mt={4}>Details about market data...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Market Data 2</Heading>
                <Text mt={4}>Details about market data...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Market Data 3</Heading>
                <Text mt={4}>Details about market data...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="xl" mb={4}>Trending Topics</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Trending Topic 1</Heading>
                <Text mt={4}>Details about the trending topic...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Trending Topic 2</Heading>
                <Text mt={4}>Details about the trending topic...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Trending Topic 3</Heading>
                <Text mt={4}>Details about the trending topic...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;