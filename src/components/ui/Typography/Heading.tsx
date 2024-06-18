import React from "react";
import { FontVariant, getFontFamily } from "./helper";
import { mergeCn } from "src/utils";

type HeadingType = "h1" | "h2" | "h3" | "h4";

type HeadingProps<T extends HeadingType> = React.ComponentPropsWithoutRef<T> & {
  variant: FontVariant;
  as: T;
  children: React.ReactNode;
};

const Heading = <T extends HeadingType>({
  as,
  variant,
  children,
  className,
  ...props
}: HeadingProps<T>) => {
  const customProps = {
    ...props,
    className: mergeCn(getFontFamily(variant), `text-${as}`, className),
  };

  return React.createElement(as, customProps, children);
};

export default Heading;
