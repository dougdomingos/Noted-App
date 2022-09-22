import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import { trimText } from "../../utils/trimText";

export type TNote = {
  id?: number;
  title: string;
  content: string;
};

export function Note({ title, content }: TNote) {
  const noteBgColor = useColorModeValue("gray.100", "gray.700");

  const contentMaxLength = useBreakpointValue({
    base: 120,
    md: 160,
    lg: 200,
  });

  const trimmedText = trimText(content, contentMaxLength);

  return (
    <Box
      pos={"relative"}
      h={{ base: 40, sm: 48, md: 56}}
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
          <Text>{trimmedText}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
