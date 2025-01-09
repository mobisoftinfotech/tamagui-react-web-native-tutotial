import {
  Checkbox,
  CheckboxProps,
  H3,
  Label,
  XStack,
  YStack,
} from "tamagui";
import { Check as CheckIcon } from "@tamagui/lucide-icons";

const CheckboxWithLabel = ({
  size,
  label,
  ...checkboxProps
}: CheckboxProps & { label: string }) => {
  return (
    <XStack alignItems="center" gap="$2">
      <Checkbox id={label} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={label}>
        {label}
      </Label>
    </XStack>
  );
};

export const CheckboxDemo = () => {
  return (
    <YStack>
      <H3 mt={"$4"}>Checkboxes</H3>
      <XStack gap="$2">
        <CheckboxWithLabel size="$3" label="English" />
        <CheckboxWithLabel size="$4" label="French" />
        <CheckboxWithLabel size="$5" label="Spanish" />
      </XStack>
    </YStack>
  );
};
