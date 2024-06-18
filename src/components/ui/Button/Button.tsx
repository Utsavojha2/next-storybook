import React, { FC, MouseEventHandler, useState } from "react";
import clsx from "clsx";
import { mergeCn, timeout } from "src/utils";
import { IconBase, IconName } from "../IconBase";

type ButtonKind = "primary" | "secondary" | "tertiary";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  /* Kind of the button */
  kind: ButtonKind;
  /* Text content of the button */
  text?: string;
  /* is loading state */
  loading?: boolean;
  /* is disabled state */
  disabled?: boolean;
  /* size of the button */
  size?: ButtonSize;
  /* Left icon used in the button */
  leftIcon?: IconName;
  /* Right icon used in the button */
  rightIcon?: IconName;
  /* Callback to be executed on click */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const sizeStyles = {
  sm: {
    padding: "px-6 py-2",
    fontSize: "text-sm",
    lineHeight: "leading-4",
    iconSize: 16,
  },
  md: {
    padding: "px-8 py-3.5",
    fontSize: "text-base",
    lineHeight: "leading-5",
    iconSize: 16,
  },
  lg: {
    padding: "px-8 py-4",
    fontSize: "text-lg",
    lineHeight: "leading-6",
    iconSize: 24,
  },
};

const disabledButtonStyles = {
  background: "bg-neutral-silver",
  color: "text-neutral-gray-blue",
  border: "border-0",
} as const;

const buttonKindStyles = {
  primary: {
    background: "bg-primary",
    color: "text-neutral-white",
    border: "border-0",
    borderColorOnFocus: "focus:border-2 focus:border-neutral-gray-dark",
    borderColorOnClick: "border-0",
    borderColorOnLoading: "border-0",
    backgroundOnHover: "hover:bg-primary-shade-100",
    backgroundOnClick: "bg-primary-shade-200",
    backgroundOnLoading: "bg-primary-shade-200",
  },
  secondary: {
    background: "bg-neutral-white",
    color: "text-primary",
    border: "border border-primary",
    borderColorOnFocus: "focus:border-2 focus:border-neutral-gray-light",
    borderColorOnClick: "border-0",
    borderColorOnLoading: "border-0",
    backgroundOnHover: "hover:bg-neutral-silver",
    backgroundOnClick: "bg-neutral-silver",
    backgroundOnLoading: "bg-neutral-silver",
  },
  tertiary: {
    background: "bg-transparent",
    color: "text-primary",
    border: "border-0",
    borderColorOnFocus: "focus:border-2 focus:border-neutral-gray-dark",
    borderColorOnClick: "border-0",
    borderColorOnLoading: "border-0",
    backgroundOnHover: "hover:bg-neutral-silver",
    backgroundOnClick: "bg-primary-tint-500",
    backgroundOnLoading: "bg-primary-tint-500",
  },
} as const;

const Button: FC<ButtonProps> = ({
  text,
  leftIcon,
  rightIcon,
  kind,
  loading,
  onClick,
  disabled,
  size = "lg",
}) => {
  const {
    background,
    color,
    border,
    backgroundOnClick,
    borderColorOnClick,
    backgroundOnLoading,
    borderColorOnLoading,
    backgroundOnHover,
    borderColorOnFocus,
  } = buttonKindStyles[kind];

  const { fontSize, iconSize, lineHeight, padding } = sizeStyles[size];

  const [showClickColor, setShowClickColor] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (loading || disabled) {
      return;
    }
    onClick(e);
    setShowClickColor(true);
    await timeout(250);
    setShowClickColor(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={mergeCn(
        "rounded flex flex-row items-center justify-center gap-2",
        background,
        border,
        color,
        padding,
        clsx({
          "cursor-pointer": !disabled,
          "cursor-not-allowed": disabled,
        }),
        clsx(!disabled && !showClickColor && backgroundOnHover),
        clsx(!disabled && borderColorOnFocus),
        clsx(showClickColor && backgroundOnClick),
        clsx(showClickColor && borderColorOnClick),
        clsx(loading && backgroundOnLoading, loading && borderColorOnLoading),
        clsx(
          disabled && disabledButtonStyles["background"],
          disabled && disabledButtonStyles["color"],
          disabled && disabledButtonStyles["border"]
        )
      )}
    >
      {leftIcon && (
        <IconBase width={iconSize} height={iconSize} icon={leftIcon} />
      )}
      {text && (
        <span className={mergeCn(fontSize, lineHeight, "font-inter-regular")}>
          {text}
        </span>
      )}
      {rightIcon && (
        <IconBase width={iconSize} height={iconSize} icon={rightIcon} />
      )}
    </button>
  );
};

export default Button;
