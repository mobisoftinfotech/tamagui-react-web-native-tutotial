import { H3, Input, Text, XStack, YStack } from "tamagui";

export const InputDemo = () => {
  return (
    <YStack>
      <H3 mb={"$2"} mt={"$2"}>
        Inputs
      </H3>
      <XStack gap="$2" justifyContent="center">
        <Input
          flex={1}
          size={"$3"}
          placeholder={`Size small`}
        />
        <Input
          flex={1}
          size={"$4"}
          placeholder={`Size medium`}
        />
        <Input
          flex={1}
          size={"$5"}
          placeholder={`Size large`}
        />
      </XStack>
    </YStack>
  );
};
