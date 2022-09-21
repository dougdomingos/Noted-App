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

  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const appColor = useColorModeValue("gray.200", "gray.700");

  const triggers: TToolbar = {
    triggerNewNote: onOpen,
    triggerSetTheme: toggleColorMode,
  };

  return (
    <>
      <Center h={"100vh"} bgColor={backgroundColor}>
        <Stack
          pos={"relative"}
          bgColor={appColor}
          w={"90%"}
          h={"95vh"}
          maxW={"440px"}
          rounded={"xl"}
          gap={2}
          p={6}
        >
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
