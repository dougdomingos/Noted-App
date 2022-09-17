import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  useColorMode,
} from "@chakra-ui/react";

import { HiMenu, HiMoon, HiPlus, HiSun } from "react-icons/hi";

type TActionsToggle = {
  triggerNoteModal: () => void;
};

function ActionsToggle({ triggerNoteModal }: TActionsToggle) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pos={"absolute"} bottom={4} left={4}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label={"Open Actions menu"}
          icon={<HiMenu />}
          fontSize={"2xl"}
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
