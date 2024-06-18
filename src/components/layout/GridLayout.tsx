import React, { FC, useMemo } from "react";
import { useWindowSize } from "src/hooks/useWindowSize";
import { mergeCn } from "src/utils";

interface Props
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  children: ((cols: number) => JSX.Element) | React.ReactNode;
}

const GridLayout: FC<Props> = ({ children, ...props }) => {
  const { width } = useWindowSize();

  const numberOfColumns = useMemo(() => {
    if (width >= 976) {
      return 12;
    } else if (width >= 768 && width < 976) {
      return 8;
    } else if (width >= 480 && width < 768) {
      return 6;
    } else {
      return 4;
    }
  }, [width]);

  return (
    <div
      {...props}
      className={mergeCn(
        "grid place-items-center grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6",
        props.className
      )}
    >
      {typeof children === "function" ? children(numberOfColumns) : children}
    </div>
  );
};

export default GridLayout;
