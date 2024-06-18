import React, { FC } from "react";
import { IconName, dynamicImports } from "./icon.types";

interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: IconName;
}

const IconBase: FC<IconProps> = ({ icon, ...props }) => {
  const IconComponent = dynamicImports[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default IconBase;
