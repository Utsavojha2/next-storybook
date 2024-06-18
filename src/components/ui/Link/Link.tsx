import clsx from "clsx";
import React, { FC, useState } from "react";
import { mergeCn, timeout } from "src/utils";

type LinkSize = "sm" | "md" | "lg";

const sizeStyles = {
  sm: {
    fontSize: "text-sm",
    lineHeight: "leading-4",
    underlineOffset: "underline-offset-3",
  },
  md: {
    fontSize: "text-base",
    lineHeight: "leading-5",
    underlineOffset: "underline-offset-4",
  },
  lg: {
    fontSize: "text-lg",
    lineHeight: "leading-6",
    underlineOffset: "underline-offset-5",
  },
} as const;

interface LinkProps extends React.ComponentPropsWithoutRef<"span"> {
  size?: LinkSize;
  disabled?: boolean;
  text: string;
}

const Link: FC<LinkProps> = ({ size = "sm", disabled, text }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const { fontSize, lineHeight, underlineOffset } = sizeStyles[size];

  const style =
    "font-inter-regular hover:underline focus:border focus:border-neutral-gray-light focus:rounded-sm";

  const onClick = async () => {
    if (disabled) {
      return;
    }
    setHasClicked(true);
    await timeout(250);
    setHasClicked(false);
  };

  return (
    <a
      onClick={onClick}
      className={mergeCn(
        style,
        fontSize,
        lineHeight,
        underlineOffset,
        !hasClicked ? "text-primary" : "text-primary-shade-200",
        !disabled ? "cursor-pointer" : "cursor-not-allowed",
        clsx(disabled && "text-neutral-gray-blue")
      )}
    >
      {text}
    </a>
  );
};

export default Link;
