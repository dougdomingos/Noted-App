import { Box, Flex, Stack, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { HiTrash } from "react-icons/hi";

export type TNote = {
  id?: number;
  title: string;
  content: string;
  triggerDelete?: () => void;
};

export function Note({ title, content, triggerDelete }: TNote) {
  const noteBgColor = useColorModeValue("gray.50", "gray.600");

  return (
    <Box
      pos={"relative"}
      w={"full"}
      bgColor={noteBgColor}
      px={5}
      py={4}
      rounded={"md"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Stack maxW={"85%"}>
          <Text as={"span"} fontWeight={600} fontSize={"lg"}>
            {title}
          </Text>
          <Text
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
          >
            {content}
          </Text>
        </Stack>
        <IconButton
          aria-label='Delete note'
          fontSize={"2xl"}
          variant={"ghost"}
          icon={<HiTrash />}
          onClick={triggerDelete}
        />
      </Flex>
    </Box>
  );
}
