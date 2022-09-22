import { SimpleGrid } from "@chakra-ui/react";
import { generateNoteMocks } from "../../utils/noteMocks";
import { Note, TNote } from "../Note";

import "./NoteList.styles.css";

function NoteList() {
  const notes: TNote[] = generateNoteMocks(6);

  return (
    <SimpleGrid
      overflowY={"auto"}
      gap={1.5}
      columns={{ base: 1, sm: 2, lg: 3 }}
    >
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
    </SimpleGrid>
  );
}

export default NoteList;
