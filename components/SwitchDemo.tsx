import React, { useState } from "react";
import { H3, Switch, XStack, YStack } from "tamagui";

export const SwitchDemo = () => {
  return (
    <YStack mb={"$2"}>
      <H3 mt={"$2"} mb={"$3"}>Switches</H3>  
      <XStack gap={"$3"}>
        <SwitchItem size="$2" />
        <SwitchItem size="$3" />
        <SwitchItem size="$4" />
      </XStack>
    </YStack>
  );
};

const SwitchItem = (props: { size: string }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Switch
      padding={0}
      size={props.size}
      checked={isActive}
      onCheckedChange={(checked) => setIsActive(checked)}
    >
      <Switch.Thumb />
    </Switch>
  );
};
