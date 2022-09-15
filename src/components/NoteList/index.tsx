import { Stack } from "@chakra-ui/react";

import { Note, TNote } from "../Note";

import "./NoteList.styles.css";

function NoteList() {
  const notes: TNote[] = new Array(6).fill({
    title: "Sample note",
    content: `
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Illum minus id ullam ut nisi? 
        Labore beatae veniam ratione repellat amet.`,
  });

  return (
    <Stack gap={1.5} overflowY={"auto"} h={"full"} rounded={"md"}>
      {notes.map((note) => (
        <Note key={note.title} title={note.title} content={note.content} />
      ))}
    </Stack>
  );
}

export default NoteList;
