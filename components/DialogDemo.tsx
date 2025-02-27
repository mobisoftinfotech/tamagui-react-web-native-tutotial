import { X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  Dialog,
  H3,
  Input,
  Label,
  Sheet,    
  Unspaced,
  XStack,
  YStack,
} from "tamagui";

export const DialogDemo = () => {
  return (
    <YStack>
      <H3 mb={"$3"} mt={"$3"}>
        Custom Dialog
      </H3>
      <Dialog modal>
        <Dialog.Trigger asChild>
          <Button width={200}>Show Custom Dialog</Button>
        </Dialog.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4" gap="$4">
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay
            key="overlay"
            animation="slow"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />

          <Dialog.Content
            bordered
            elevate
            key="content"
            animateOnly={["transform", "opacity"]}
            animation={[
              "quicker",
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <Dialog.Title>Update Password</Dialog.Title>
            <Dialog.Description>
              Please enter your password and confirm it. Click 'Save' to
              complete the process."
            </Dialog.Description>
            <YStack>
              <Label htmlFor="passowrd">Password</Label>
              <Input size={"$3"} id="passowrd" />
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input size={"$3"} id="confirmPassword" />
            </YStack>
            <XStack alignSelf="flex-end" gap="$4">
              <Dialog.Close displayWhenAdapted asChild>
                <Button theme="active" aria-label="Close">
                  Save changes
                </Button>
              </Dialog.Close>
            </XStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button
                  position="absolute"
                  top="$3"
                  right="$3"
                  size="$2"
                  circular
                  icon={X}
                />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </YStack>
  );
}
