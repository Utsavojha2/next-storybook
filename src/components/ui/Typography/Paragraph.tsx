import React from "react";
import { FontVariant, getFontFamily } from "./helper";
import { mergeCn } from "src/utils";

type ParagraphFontSize = "xl" | "sm" | "md" | "lg";

type ParagraphType = "p" | "span";

type ParagraphProps<T extends ParagraphType> =
  React.ComponentPropsWithoutRef<T> & {
    variant: FontVariant;
    children: React.ReactNode;
    size?: ParagraphFontSize;
    as?: ParagraphType;
  };

const Paragraph = <T extends ParagraphType>({
  as = "p",
  size = "md",
  variant,
  children,
  className,
  ...props
}: ParagraphProps<T>) => {
  const customProps = {
    ...props,
    className: mergeCn(getFontFamily(variant), `text-p-${size}`, className),
  };

  return React.createElement(as, customProps, children);
};

export default Paragraph;
