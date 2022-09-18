import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

import { HiSearch } from "react-icons/hi";

function Searchbox() {
  const searchboxBgColor = useColorModeValue("gray.50", "gray.600");

  return (
    <Box w={"full"} h={14} bgColor={searchboxBgColor} rounded={"md"}>
      <InputGroup h={"full"} px={5}>
        <Input
          type={"text"}
          variant={"unstyled"}
          fontSize={"lg"}
          placeholder={"Search notes..."}
        />
        <InputRightElement h={"full"} mr={5}>
          <Icon as={HiSearch} boxSize={7} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Searchbox;
