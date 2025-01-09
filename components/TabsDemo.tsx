import React from "react";
import type { TabsContentProps } from "tamagui";
import { H3, Text } from "tamagui";
import {
  H5,
  Separator,
  SizableText,
  Tabs,
  YStack,
} from "tamagui";

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};

export function TabsDemo() {
  return (
    <YStack mt={"$2"}>
      <H3 mb={"$3"} mt={"$2"}>
        Tabs
      </H3>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width={380}
        height={150}
        borderRadius="$4"
        overflow="hidden"
        borderColor="$borderColor"
      >
        <Tabs.List
          separator={<Separator vertical />}
          disablePassBorderRadius="bottom"
          aria-label="Manage your account"
        >
          <Tabs.Tab flex={1} value="tab1" borderWidth={0}>
            <SizableText fontFamily="$body">Profile</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} value="tab2" borderWidth={0}>
            <SizableText fontFamily="$body">Connections</SizableText>
          </Tabs.Tab>
          <Tabs.Tab flex={1} value="tab3" borderWidth={0}>
            <SizableText fontFamily="$body">Notifications</SizableText>
          </Tabs.Tab>
        </Tabs.List>
        <Separator />
        <TabsContent value="tab1">
          <H5>Profile</H5>
        </TabsContent>

        <TabsContent value="tab2">
          <H5>Connections</H5>
        </TabsContent>

        <TabsContent value="tab3">
          <H5>Notifications</H5>
        </TabsContent>
      </Tabs>
    </YStack>
  );
}
