import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { useWindowSize } from "src/hooks/useWindowSize";
import { mergeCn } from "src/utils";

const PageLayout = (props: PropsWithChildren) => {
  const { width } = useWindowSize();

  return (
    <div
      className={mergeCn(
        "max-w-[1152px] mx-[30px] sm:mx-[60px] lg:mx-[90px] xl:mx-[144px]",
        clsx(width > 1296 && "lg:mx-auto xl:mx-auto")
      )}
    >
      {props.children}
    </div>
  );
};

export default PageLayout;
