import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "../ui/Typography/Paragraph";

const meta = {
  title: "Design System/Paragraph",
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularParagraph1: Story = {
  args: {
    as: "p",
    variant: "regular",
    size: "md",
    children: "Hello, Kohli",
  },
};

export const RegularParagraph2: Story = {
  args: {
    as: "p",
    variant: "regular",
    size: "lg",
    children: "Hello, Virat",
  },
};

export const MediumParagraph2: Story = {
  args: {
    as: "p",
    variant: "medium",
    size: "sm",
    children: "Hello, Sharma!",
  },
};

export const BoldParagraph2: Story = {
  args: {
    as: "p",
    variant: "bold",
    size: "xl",
    children: "Hello, Ned Stark",
  },
};
