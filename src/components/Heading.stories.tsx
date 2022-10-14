import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import { HeadingProps } from "./Heading";
export default {
  title: "Components/Heading",
  component: Heading,
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

    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const ComponentAsH1: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Text as a H1</h1>,
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
