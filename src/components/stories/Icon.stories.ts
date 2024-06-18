import type { Meta, StoryObj } from "@storybook/react";
import { IconName, IconBase } from "../ui/IconBase";

const meta = {
  title: "Design System/Icon",
  component: IconBase,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      options: Object.values(IconName),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof IconBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundedArrowTopIcon: Story = {
  args: {
    icon: IconName.RoundedArrowTop,
    width: 20,
    height: 20,
  },
};

export const CircularSwapIcon: Story = {
  args: {
    icon: IconName.CircularSwap,
    width: 24,
    height: 24,
  },
};

export const ExpandIcon: Story = {
  args: {
    icon: IconName.Expand,
    width: 24,
    height: 24,
  },
};

export const SettingsIcon: Story = {
  args: {
    icon: IconName.Settings,
    width: 24,
    height: 24,
  },
};
