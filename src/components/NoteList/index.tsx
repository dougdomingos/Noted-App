import { Stack, useDisclosure } from "@chakra-ui/react";
import { generateNoteMocks } from "../../utils/noteMocks";
import DeleteNoteModal from "../DeleteNoteModal";
import { Note, TNote } from "../Note";

import "./NoteList.styles.css";

function NoteList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const notes: TNote[] = generateNoteMocks(6);

  return (
    <Stack gap={1.5} overflowY={"auto"} h={"full"} rounded={"md"}>
      <DeleteNoteModal modalState={isOpen} closeModal={onClose} />
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          triggerDelete={onOpen}
        />
      ))}
    </Stack>
  );
}

export default NoteList;
