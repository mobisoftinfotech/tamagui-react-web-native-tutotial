import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { H2, ScrollView, TamaguiProvider, Theme } from "tamagui";
import { tamaguiConfig } from "./tamagui.config";
import { ButtonDemo } from "./components/ButtonDemo";
import { CheckboxDemo } from "./components/CheckboxDemo";
import { PopoverDemo } from "./components/PopoverDemo";
import { StackDemo } from "./components/StackDemo";
import { InputDemo } from "./components/InputDemo";
import { DialogDemo } from "./components/DialogDemo";
import { AlertDialogDemo } from "./components/AlertDialogDemo";
import { TabsDemo } from "./components/TabsDemo";
import { SelectDemo } from "./components/SelectDemo";
import { CollapsibleDemo } from "./components/CollapsibleDemo";
import { SwitchDemo } from "./components/SwitchDemo";

export default function RootLayout() {
  const isWeb = Platform.OS === "web";

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={"light"}>
      <Theme name="light">
        <Theme name="blue">
          <SafeAreaView style={styles.container}>
            <ScrollView
              maxWidth={isWeb ? 450 : undefined}
              gap={"$2"}
              padding={"$3"}
            >
              <H2 mb={"$4"}>Tamagui Components</H2>
              <StackDemo />
              <ButtonDemo />
              <InputDemo />
              <CheckboxDemo />
              <SwitchDemo/>
              <SelectDemo/>
              <PopoverDemo />
              <AlertDialogDemo />
              <DialogDemo />
              <CollapsibleDemo/>
              <TabsDemo />
            </ScrollView>
          </SafeAreaView>
          <StatusBar style="auto" />
        </Theme>
      </Theme>
    </TamaguiProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
});
