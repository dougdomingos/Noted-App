import { Center, Stack } from "@chakra-ui/react";

import Searchbox from "./components/Searchbox";

function App() {
  return (
    <Center h={"100vh"}>
      <Stack
        bgColor={"gray.700"}
        w={"90%"}
        h={"95vh"}
        maxW={"440px"}
        rounded={"3xl"}
      >
        <Searchbox />
      </Stack>
    </Center>
  );
}

export default App;
