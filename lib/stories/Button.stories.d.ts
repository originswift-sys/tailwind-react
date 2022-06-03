import { Story } from "@storybook/react";
import { ButtonProps } from "../components/button";
declare const _default: {
    title: string;
    component: ({ size, variant, children, disabled, ...props }: ButtonProps) => JSX.Element;
    argTypes: {
        size: {
            type: string;
            options: string[];
            defaultValue: string;
        };
        variant: {
            type: string;
            options: string[];
            defaultValue: string;
        };
        disabled: {
            type: string;
        };
    };
};
export default _default;
export declare const Primary: Story<ButtonProps>;
