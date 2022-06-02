import { Story, Meta } from "@storybook/react";
import React from "react";

import { Button, ButtonProps } from "../components/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      type: "string",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    variant: {
      type: "string",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    disabled: {
      type: "boolean",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
  children: "Button",
};
