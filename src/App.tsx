import { Center, Stack } from "@chakra-ui/react";

import Searchbox from "./components/Searchbox";
import NoteList from "./components/NoteList";
import AddNoteButton from "./components/AddNoteButton";

function App() {
  return (
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
        <AddNoteButton />
      </Stack>
    </Center>
  );
}

export default App;
