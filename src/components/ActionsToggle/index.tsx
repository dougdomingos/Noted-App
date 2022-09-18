import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { HiViewGrid, HiMoon, HiPlus, HiSun } from "react-icons/hi";

type TActionsToggle = {
  triggerNoteModal: () => void;
};

function ActionsToggle({ triggerNoteModal }: TActionsToggle) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuButtonBgColor = useColorModeValue("white", "gray.900");
  const menuButtonShadow = useColorModeValue("md", "none");

  return (
    <Box pos={"absolute"} bottom={4} left={4}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label={"Open Actions menu"}
          icon={<HiViewGrid />}
          bgColor={menuButtonBgColor}
          fontSize={"3xl"}
          boxSize={12}
          rounded={"full"}
          shadow={menuButtonShadow}
        />
        <MenuList>
          <MenuItem icon={<HiPlus size={20} />} onClick={triggerNoteModal}>
            Create a note
          </MenuItem>
          <MenuItem
            icon={
              colorMode === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />
            }
            onClick={toggleColorMode}
          >
            Toggle {colorMode == "dark" ? "light" : "dark"} mode
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default ActionsToggle;
