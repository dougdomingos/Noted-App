import {
  Center,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import Searchbox from "./components/Searchbox";
import NoteList from "./components/NoteList";
import NoteModal from "./components/NoteModal";
import ToolBar from "./components/Toolbar";

import { TToolbar } from "./components/Toolbar";

function App() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggers: TToolbar = {
    triggerNoteModal: onOpen,
    triggerSetTheme: toggleColorMode,
  };

  return (
    <>
      <Center h={"100vh"}>
        <Stack w={{ base: "90%", md: "70%" }} h={"95vh"} rounded={"xl"} gap={2}>
          <Searchbox />
          <NoteList />
          <ToolBar {...triggers} />
        </Stack>
      </Center>
      <NoteModal modalState={isOpen} closeModal={onClose} />
    </>
  );
}

export default App;
