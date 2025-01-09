import {
  Button,
  H3,
  Popover,
  PopoverProps,
  Text,
  XStack,
  YStack,
} from "tamagui";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "@tamagui/lucide-icons";
import { Platform } from "react-native";

export const RenderPopover = ({
  Icon,
  placement,
}: PopoverProps & { Icon: any }) => {
  const isWeb = Platform.OS === 'web';
  return (
    <Popover size="$5" allowFlip placement={placement}>
      <Popover.Trigger asChild>
        <Button icon={Icon} />
      </Popover.Trigger>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        padding={0}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack padding={"$3"} gap={"$3"}>
          <Text>{"Send Email"}</Text>
          <Text>{"Send SMS"}</Text>
        </YStack>
      </Popover.Content>
    </Popover>
  );
};

export const PopoverDemo = () => {
  return (
    <YStack>
      <H3 mb={"$3"}>Popover</H3>
      <XStack gap={"$3"}>
        <RenderPopover placement="left" Icon={ChevronLeft} />
        <RenderPopover placement="bottom" Icon={ChevronDown} />
        <RenderPopover placement="top" Icon={ChevronUp} />
        <RenderPopover placement="right" Icon={ChevronRight} />
      </XStack>
    </YStack>
  );
};
