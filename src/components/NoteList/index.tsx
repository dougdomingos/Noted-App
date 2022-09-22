import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { generateNoteMocks } from "../../utils/noteMocks";
import DeleteNoteModal from "../DeleteNoteModal";
import { Note, TNote } from "../Note";

import "./NoteList.styles.css";

function NoteList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const notes: TNote[] = generateNoteMocks(6);

  return (
    <SimpleGrid
      overflowY={"auto"}
      gap={1.5}
      columns={{ base: 1, sm: 2, lg: 3 }}
    >
      <DeleteNoteModal modalState={isOpen} closeModal={onClose} />
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          triggerDelete={onOpen}
        />
      ))}
    </SimpleGrid>
  );
}

export default NoteList;
