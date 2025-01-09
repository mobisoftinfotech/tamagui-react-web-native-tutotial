import {
  H3,
  View,
  XStack,
  YStack,
} from "tamagui";

const BoxView = ({ width, height }: { height: number; width: number }) => {
  return <View width={width} height={height} backgroundColor={"#b9daf8"} />;
};

export const StackDemo = () => {
  return (
    <YStack>
      <H3 mb={"$4"}> Horizontal Stack View</H3>
      <XStack gap="$2">
        <BoxView width={40} height={100} />
        <BoxView width={40} height={100} />
        <BoxView width={40} height={100} />
      </XStack>
      <H3 mt={"$4"} mb={"$4"}>
        Vertical Stack View
      </H3>
      <YStack gap="$2">
        <BoxView width={100} height={20} />
        <BoxView width={100} height={20} />
        <BoxView width={100} height={20} />
      </YStack>
    </YStack>
  );
};
