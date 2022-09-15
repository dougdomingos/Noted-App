import { Box, Flex, Stack, IconButton, Text } from "@chakra-ui/react";
import { HiTrash } from "react-icons/hi";

export type TNote = {
  title: string;
  content: string;
};

export function Note({ title, content }: TNote) {
  return (
    <Box
      pos={"relative"}
      w={"full"}
      bgColor={"gray.600"}
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
        />
      </Flex>
    </Box>
  );
}
