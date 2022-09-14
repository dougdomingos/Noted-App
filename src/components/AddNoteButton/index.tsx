import { Box, IconButton } from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";

function AddNoteButton() {
  return (
    <Box pos={"absolute"} right={4} bottom={4}>
      <IconButton
        aria-label="Add new note"
        icon={<HiPlus />}
        boxSize={"min-content"}
        fontSize={"4xl"}
        p={2}
        rounded={"full"}
      />
    </Box>
  );
}

export default AddNoteButton;
