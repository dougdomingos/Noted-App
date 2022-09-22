import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export type TNote = {
  id?: number;
  title: string;
  content: string;
};

export function Note({ title, content }: TNote) {
  const noteBgColor = useColorModeValue("gray.50", "gray.600");

  return (
    <Box
      pos={"relative"}
      h={56}
      bgColor={noteBgColor}
      px={5}
      py={4}
      rounded={"md"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Stack>
          <Text as={"span"} fontWeight={600} fontSize={"lg"}>
            {title}
          </Text>
          <Text overflow={"hidden"}>{content}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
