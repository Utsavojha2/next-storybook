import type { Meta, StoryObj } from "@storybook/react";
import Home from "../modules/Home";

const meta = {
  title: "Modules/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePageView: Story = {
  args: {},
};
