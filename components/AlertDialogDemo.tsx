import { AlertDialog, Button, H3, Text, XStack, YStack } from "tamagui";

export const AlertDialogDemo = () => {
  return (
    <YStack>
      <H3 mb={"$3"} mt={"$3"}>
        Custom Alert Dialog
      </H3>
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
          <Button width={200}>Show Alert Dialog</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              "quick",
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack>
              <AlertDialog.Title>Accept</AlertDialog.Title>
              <AlertDialog.Description>
                By pressing yes, you accept our terms and conditions.
              </AlertDialog.Description>

              <XStack gap="$3" justifyContent="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button theme="active">Accept</Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </YStack>
  );
};
