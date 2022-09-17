import { Center, Stack, useDisclosure } from "@chakra-ui/react";

import Searchbox from "./components/Searchbox";
import NoteList from "./components/NoteList";
import NoteModal from "./components/NoteModal";
import ActionsToggle from "./components/ActionsToggle";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center h={"100vh"}>
        <Stack
          pos={"relative"}
          bgColor={"gray.700"}
          w={"90%"}
          h={"95vh"}
          maxW={"440px"}
          rounded={"3xl"}
          gap={2}
          p={6}
        >
          <Searchbox />
          <NoteList />
          <ActionsToggle />
        </Stack>
      </Center>
      <NoteModal modalState={isOpen} closeModal={onClose} />
    </>
  );
}

export default App;
