import type { Meta, StoryObj } from "@storybook/react";
import Heading from "../ui/Typography/Heading";

const meta = {
  title: "Design System/Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    as: "h1",
    variant: "bold",
    children: "Hello, Storybook",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    variant: "bold",
    children: "Hello, NextJS",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
    variant: "bold",
    children: "You know nothing Jon Snow",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
    variant: "bold",
    children: "Hello JavaScript",
  },
};
