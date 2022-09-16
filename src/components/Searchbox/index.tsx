import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { HiSearch } from "react-icons/hi";

function Searchbox() {
  return (
    <Box w={"full"} h={14} bgColor={"gray.600"} rounded={"md"}>
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
