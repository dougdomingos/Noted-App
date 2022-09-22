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
  const searchboxStyles = useColorModeValue(
    {
      bgColor: "gray.100",
    },
    {
      bgColor: "transparent",
      border: "1px",
      borderColor: "gray.600",
    }
  );

  return (
    <Box
      w={{ base: "full", md: "60%" }}
      h={16}
      mx={{ md: "auto" }}
      rounded={"lg"}
      {...searchboxStyles}
    >
      <InputGroup h={"full"}>
        <Input
          type={"text"}
          px={4}
          variant={"unstyled"}
          fontSize={"lg"}
          placeholder={"Search notes..."}
        />
        <InputRightElement h={"full"}>
          <Icon as={HiSearch} boxSize={6} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

export default Searchbox;
