import {
  Box,
  Flex,
  Stack,
  Icon,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { IconType } from "react-icons";

import { HiPlusCircle, HiMoon, HiSun } from "react-icons/hi";

type TTolbarAction = {
  icon: IconType;
  label: string;
  action: () => void;
};

export type TToolbar = {
  triggerNoteModal: () => void;
  triggerSetTheme: () => void;
};

const ToolbarAction = ({ icon, label, action }: TTolbarAction) => (
  <Button h={"full"} variant={"unstyled"} onClick={action}>
    <Stack align={"center"}>
      <Icon as={icon} boxSize={8} />
      <Text maxW={"10ch"} fontSize={"sm"} textAlign={"center"}>
        {label}
      </Text>
    </Stack>
  </Button>
);

function Toolbar({ triggerNoteModal, triggerSetTheme }: TToolbar) {
  const themeActionIcon = useColorModeValue(HiMoon, HiSun);

  return (
    <Box>
      <Flex h={16} justifyContent={"center"} gap={12}>
        <ToolbarAction
          icon={HiPlusCircle}
          label={"New Note"}
          action={triggerNoteModal}
        />
        <ToolbarAction
          icon={themeActionIcon}
          label={"Set theme"}
          action={triggerSetTheme}
        />
      </Flex>
    </Box>
  );
}

export default Toolbar;
