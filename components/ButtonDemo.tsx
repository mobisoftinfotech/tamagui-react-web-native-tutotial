import { Button, H3, Text, XStack, YStack } from "tamagui";
import { Activity } from "@tamagui/lucide-icons";
import { StyleSheet } from "react-native";

export const ButtonDemo = () => {
  return (
    <YStack>
      <H3 mb={"$4"} mt={"$3"}>
        Buttons
      </H3>
      <XStack gap="$2" style={styles.buttonsContainer}>
        <Button size="$3" theme="active">
          Active
        </Button>
        <Button size="$4" variant="outlined">
          Medium Outlined
        </Button>
        <Button iconAfter={Activity} size="$5">
          Large with Icon
        </Button>
      </XStack>
    </YStack>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: { flexDirection: "row", flexWrap: "wrap" },
});
