import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Design System/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLargeButton: Story = {
  args: {
    kind: "primary",
    text: "Shop Now",
    onClick: fn(),
  },
};

export const PrimaryMediumButton: Story = {
  args: {
    kind: "primary",
    text: "Shop Now",
    onClick: fn(),
    size: "md",
  },
};

export const PrimarySmallButton: Story = {
  args: {
    kind: "primary",
    text: "Shop Now",
    onClick: fn(),
    size: "sm",
  },
};

export const SecondaryButton: Story = {
  args: {
    kind: "secondary",
    text: "Shop Kit",
    onClick: fn(),
  },
};

export const TertiaryButton: Story = {
  args: {
    kind: "tertiary",
    text: "Shop Kit",
    onClick: fn(),
  },
};

export const DisabledButton: Story = {
  args: {
    kind: "primary",
    text: "Shop Now",
    onClick: fn(),
    disabled: true,
  },
};
