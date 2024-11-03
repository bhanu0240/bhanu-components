import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { LoginComponent } from "./login-component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Bhanu-Components/Crazy-Login",
  component: LoginComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    textfieldOneProps: { control: "object" },
    textfieldTwoProps: { control: "object" },
    btnProps: { control: "object" },
  },
} satisfies Meta<typeof LoginComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    textfieldOneProps: {
      type: "text",
      placeholder: "Enter Email",
      id: "email",
      className: "email",
    },
    textfieldTwoProps: {
      type: "password",
      placeholder: "Enter Password",
      id: "password",
      className: "password",
    },
    btnProps: {
      label: "Login",
      primary: true,
      size: "large",
      onClick: fn(),
      onMouseEnter: fn(),
    },
  },
};
