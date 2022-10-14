import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { TextProps } from "./Text";
export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem upsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    asChild: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const ComponentAsP: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>test</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
