import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";

import { useState } from "react";
import { HiDotsHorizontal, HiTrash, HiPencil } from "react-icons/hi";
import { trimText } from "../../utils/trimText";

export type TNote = {
  id?: number;
  title: string;
  content: string;
};

const NoteOptionsMenu = () => {
  return (
    <Box pos={"absolute"} top={4} right={5}>
      <Menu placement={"left-start"}>
        <MenuButton>
          <HiDotsHorizontal size={24} />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<HiPencil size={20} />}>Edit</MenuItem>
          <MenuItem icon={<HiTrash size={20} />}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export function Note({ title, content }: TNote) {
  const noteBgColor = useColorModeValue("gray.100", "gray.700");

  // for options menu display
  const [showOptionsButton, setShowOptionsButton] = useState(false);
  const [isSmallerThanLg] = useMediaQuery("(max-width: 62em)");

  const contentMaxLength = useBreakpointValue({
    base: 120,
    md: 160,
    lg: 200,
  });

  const trimmedText = trimText(content, contentMaxLength);

  return (
    <Box
      pos={"relative"}
      h={{ base: 40, sm: 48, md: 56 }}
      bgColor={noteBgColor}
      px={5}
      py={4}
      rounded={"md"}
      onMouseEnter={() => setShowOptionsButton(true)}
      onMouseLeave={() => setShowOptionsButton(false)}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Stack>
          <Text as={"span"} fontWeight={600} fontSize={"lg"}>
            {title}
          </Text>
          <Text>{trimmedText}</Text>
        </Stack>
      </Flex>
      {(isSmallerThanLg || showOptionsButton) && <NoteOptionsMenu />}
    </Box>
  );
}
