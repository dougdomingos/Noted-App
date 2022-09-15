import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

function Searchbox() {
  return (
    <Box w={"full"} h={14} bgColor={"gray.600"} rounded={"md"}>
      <Flex
        h={"full"}
        px={5}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={4}
      >
        <Icon as={HiSearch} fontSize={"3xl"} />
        <Input
          type={"text"}
          variant={"unstyled"}
          fontSize={"md"}
          placeholder={"Search notes..."}
        />
      </Flex>
    </Box>
  );
}

export default Searchbox;
