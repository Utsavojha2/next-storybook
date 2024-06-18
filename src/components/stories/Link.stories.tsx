import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "../ui/Link";

const meta = {
  title: "Design System/Link",
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnkerLinkNormal: Story = {
  args: {
    size: "lg",
    text: "Label",
  },
};

export const AnkerLinkMedium: Story = {
  args: {
    size: "md",
    text: "Label",
  },
};

export const AnkerLinkSmall: Story = {
  args: {
    size: "sm",
    text: "Label",
    disabled: false,
  },
};
