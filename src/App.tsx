import { Center, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";

import Searchbox from "./components/Searchbox";
import NoteList from "./components/NoteList";
import NoteModal from "./components/NoteModal";
import ActionsToggle from "./components/ActionsToggle";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const appColor = useColorModeValue("gray.200", "gray.700")

  return (
    <>
      <Center h={"100vh"} bgColor={backgroundColor}>
        <Stack
          pos={"relative"}
          bgColor={appColor}
          w={"90%"}
          h={"95vh"}
          maxW={"440px"}
          rounded={"3xl"}
          gap={2}
          p={6}
        >
          <Searchbox />
          <NoteList />
          <ActionsToggle triggerNoteModal={onOpen} />
        </Stack>
      </Center>
      <NoteModal modalState={isOpen} closeModal={onClose} />
    </>
  );
}

export default App;
