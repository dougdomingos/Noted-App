import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";

import { HiMenu, HiPlus, HiSun } from "react-icons/hi";

function ActionsToggle() {
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
          <MenuItem icon={<HiPlus size={20} />}>Create a note</MenuItem>
          <MenuItem icon={<HiSun size={20} />}>Toggle dark mode</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default ActionsToggle;
