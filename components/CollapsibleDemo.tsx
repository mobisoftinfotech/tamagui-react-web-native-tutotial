import { ChevronDown } from "@tamagui/lucide-icons";
import { Accordion, H3, Paragraph, Square, YStack } from "tamagui";

export const CollapsibleDemo = () => {
  return (
    <YStack mt={"$3"}>
      <H3 mb={"$3"}>Accordion / Collapsible</H3>
      <Accordion overflow="hidden" width="$20" type="multiple">
        <Accordion.Item value="a1">
          <Accordion.Trigger flexDirection="row" justifyContent="space-between">
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>Personal Information</Paragraph>
                <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                  <ChevronDown size="$1" />
                </Square>
              </>
            )}
          </Accordion.Trigger>
          <Accordion.HeightAnimator animation="medium">
            <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
              <Paragraph>
                John Doe is a 28-year-old male with the email
                john.doe@example.com and phone number +1-234-567-890.
              </Paragraph>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>

        <Accordion.Item value="a2">
          <Accordion.Trigger flexDirection="row" justifyContent="space-between">
            {({ open }: { open: boolean }) => (
              <>
                <Paragraph>Address Information</Paragraph>
                <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                  <ChevronDown size="$1" />
                </Square>
              </>
            )}
          </Accordion.Trigger>
          <Accordion.HeightAnimator animation="medium">
            <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
              <Paragraph>
                John Doe resides at 123 Maple Street, Springfield, IL 62704,
                USA.
              </Paragraph>
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
      </Accordion>
    </YStack>
  );
};
