import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { TNoteModal } from "../NoteModal"

export function CreateNoteModal({ modalState, closeModal }: TNoteModal) {
  return (
    <Modal
      isOpen={modalState}
      onClose={closeModal}
      size={{ base: "sm", md: "md" }}
      isCentered
      motionPreset={"slideInBottom"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap={2}>
            <Input
              type={"text"}
              variant={"outline"}
              placeholder={"Note title..."}
              fontWeight={600}
            />
            <Textarea
              variant={"outline"}
              placeholder={"Note content..."}
              rows={6}
              resize={"none"}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant={"ghost"} mr={3} onClick={closeModal}>
            CANCEL
          </Button>
          <Button colorScheme={"green"}>SAVE NOTE</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateNoteModal;
