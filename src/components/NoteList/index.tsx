import { Stack, useDisclosure } from "@chakra-ui/react";
import DeleteNoteModal from "../DeleteNoteModal";
import { Note, TNote } from "../Note";

import "./NoteList.styles.css";

function NoteList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const notes: TNote[] = new Array(6).fill({
    title: "Sample note",
    content: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Illum minus id ullam ut nisi? 
        Labore beatae veniam ratione repellat amet.`,
  });

  return (
    <Stack gap={1.5} overflowY={"auto"} h={"full"} rounded={"md"}>
      <DeleteNoteModal modalState={isOpen} closeModal={onClose} />
      {notes.map((note) => (
        <Note
          key={note.title}
          title={note.title}
          content={note.content}
          triggerDelete={onOpen}
        />
      ))}
    </Stack>
  );
}

export default NoteList;
