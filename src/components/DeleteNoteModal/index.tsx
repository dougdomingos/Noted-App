import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Stack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";

import { HiOutlineTrash } from "react-icons/hi";

type TDeleteNoteModal = {
  modalState: boolean;
  closeModal: () => void;
};

function DeleteNoteModal({ modalState, closeModal }: TDeleteNoteModal) {
  return (
    <Modal isOpen={modalState} onClose={closeModal} size={"sm"} isCentered>
      <ModalOverlay />
      <ModalContent py={8}>
        <ModalBody>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
          >
            <Icon
              as={HiOutlineTrash}
              boxSize={14}
              color={"red.400"}
              bgColor={"red.800"}
              p={2}
              rounded={"full"}
            />
            <Text fontSize={"2xl"} fontWeight={600}>
              Delete note?
            </Text>
            <Text fontSize={"xl"}>Are you sure you want to delete "NOTE"?</Text>
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent={"center"} gap={2}>
          <Button variant={"outline"} onClick={closeModal}>No, keep it</Button>
          <Button colorScheme={"red"} onClick={closeModal}>Yes, delete it</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteNoteModal;
