import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Button, useColorMode, Heading, Text, Image, IconButton, Stack, Badge, useColorModeValue, Flex, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg={bgColor} color={color} minH="100vh">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Flex w="100%">
              <Heading as="h1" size="xl">
                Online Tea Store
              </Heading>
              <Spacer />
              <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound={true} size="md" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
              <IconButton ml={2} icon={<FaUserCircle />} isRound={true} size="md" aria-label="Account" />
              <IconButton ml={2} icon={<FaHeart />} isRound={true} size="md" aria-label="Favorite Products" />
              <IconButton ml={2} icon={<FaShoppingCart />} isRound={true} size="md" aria-label="Shopping Cart" />
            </Flex>
            <Stack direction="row" spacing={4}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Stack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

const ProductCard = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Image src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWF8ZW58MHx8fHwxNzA4NjE1MjE5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
            100g &bull; Premium
          </Box>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          Himalayan Green Tea
        </Box>
        <Box>
          $20.00
          <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box>
        </Box>
        <Flex mt="2" alignItems="center">
          <Button size="sm" leftIcon={<FaHeart />} colorScheme="pink" variant="outline">
            Favorite
          </Button>
          <Spacer />
          <Button size="sm" leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
            Add to Cart
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
