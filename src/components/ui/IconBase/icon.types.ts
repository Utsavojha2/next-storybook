import dynamic from "next/dynamic";
import { ComponentType } from "react";

export enum IconName {
  SquareChevronTop = "chevronTopSquare",
  SquareChevronRight = "chevronRightSquare",
  SquareChevronLeft = "chevronLeftSquare",
  SquareChevronDown = "chevronDownSquare",
  SquareArrowTop = "arrowTopSquare",
  SquareArrowRight = "arrowRightSquare",
  SquareArrowLeft = "arrowLeftSquare",
  SquareArrowDown = "arrowDownSquare",
  RoundedChevronTop = "chevronTopRounded",
  RoundedChevronRight = "chevronRightRounded",
  RoundedChevronLeft = "chevronLeftRounded",
  RoundedChevronDown = "chevronDownRounded",
  RoundedArrowTopRight = "arrowTopRightRounded",
  RoundedArrowTopLeft = "arrowTopLeftRounded",
  RoundedArrowTop = "arrowTopRounded",
  RoundedArrowRight = "arrowRightRounded",
  RoundedArrowLeft = "arrowLeftRounded",
  RoundedArrowDown = "arrowDownRounded",
  RoundedArrowBottomRight = "arrowBottomRightRounded",
  RoundedArrowBottomLeft = "arrowBottomLeftRounded",
  HorizontalSwap = "horizontalSwap",
  VerticalSwap = "verticalSwap",
  Stretch = "stretch",
  Expand = "expand",
  Collapse = "collapse",
  CircularSwap = "circularSwap",
  ChevronTop = "chevronTop",
  ChevronRight = "chevronRight",
  ChevronLeft = "chevronLeft",
  ChevronDown = "chevronDown",
  ArrowTopRight = "arrowTopRight",
  ArrowTopLeft = "arrowTopLeft",
  ArrowTop = "arrowTop",
  ArrowRight = "arrowRight",
  ArrowLeft = "arrowLeft",
  ArrowDown = "arrowDown",
  ArrowBottomRight = "arrowBottomRight",
  ArrowBottomLeft = "arrowBottomLeft",
  Settings = "settings",
  LoadingSpinner = "loadingSpinner",
  LogoIcon = "logo",
}

const importDynamicSVG = (component: string) => {
  return dynamic<React.ComponentPropsWithoutRef<"svg">>(() =>
    import(`./icons/${component}`).then((mod) => mod[component])
  );
};

export const dynamicImports: Record<IconName, ComponentType> = {
  [IconName.SquareChevronTop]: importDynamicSVG("SquareChevronTop"),
  [IconName.SquareChevronRight]: importDynamicSVG("SquareChevronRight"),
  [IconName.SquareChevronLeft]: importDynamicSVG("SquareChevronLeft"),
  [IconName.SquareChevronDown]: importDynamicSVG("SquareChevronDown"),
  [IconName.SquareArrowTop]: importDynamicSVG("SquareArrowTop"),
  [IconName.SquareArrowRight]: importDynamicSVG("SquareArrowRight"),
  [IconName.SquareArrowLeft]: importDynamicSVG("SquareArrowLeft"),
  [IconName.SquareArrowDown]: importDynamicSVG("SquareArrowDown"),
  [IconName.RoundedChevronTop]: importDynamicSVG("RoundedChevronTop"),
  [IconName.RoundedChevronRight]: importDynamicSVG("RoundedChevronRight"),
  [IconName.RoundedChevronLeft]: importDynamicSVG("RoundedChevronLeft"),
  [IconName.RoundedChevronDown]: importDynamicSVG("RoundedChevronDown"),
  [IconName.RoundedArrowTopRight]: importDynamicSVG("RoundedArrowTopRight"),
  [IconName.RoundedArrowTopLeft]: importDynamicSVG("RoundedArrowTopLeft"),
  [IconName.RoundedArrowTop]: importDynamicSVG("RoundedArrowTop"),
  [IconName.RoundedArrowRight]: importDynamicSVG("RoundedArrowRight"),
  [IconName.RoundedArrowLeft]: importDynamicSVG("RoundedArrowLeft"),
  [IconName.RoundedArrowDown]: importDynamicSVG("RoundedArrowDown"),
  [IconName.RoundedArrowBottomRight]: importDynamicSVG(
    "RoundedArrowBottomRight"
  ),
  [IconName.RoundedArrowBottomLeft]: importDynamicSVG("RoundedArrowBottomLeft"),
  [IconName.HorizontalSwap]: importDynamicSVG("HorizontalSwap"),
  [IconName.VerticalSwap]: importDynamicSVG("VerticalSwap"),
  [IconName.Stretch]: importDynamicSVG("Stretch"),
  [IconName.Expand]: importDynamicSVG("Expand"),
  [IconName.Collapse]: importDynamicSVG("Collapse"),
  [IconName.CircularSwap]: importDynamicSVG("CircularSwap"),
  [IconName.ChevronTop]: importDynamicSVG("ChevronTop"),
  [IconName.ChevronRight]: importDynamicSVG("ChevronRight"),
  [IconName.ChevronLeft]: importDynamicSVG("ChevronLeft"),
  [IconName.ChevronDown]: importDynamicSVG("ChevronDown"),
  [IconName.ArrowTopRight]: importDynamicSVG("ArrowTopRight"),
  [IconName.ArrowTopLeft]: importDynamicSVG("ArrowTopLeft"),
  [IconName.ArrowTop]: importDynamicSVG("ArrowTop"),
  [IconName.ArrowRight]: importDynamicSVG("ArrowRight"),
  [IconName.ArrowLeft]: importDynamicSVG("ArrowLeft"),
  [IconName.ArrowDown]: importDynamicSVG("ArrowDown"),
  [IconName.ArrowBottomRight]: importDynamicSVG("ArrowBottomRight"),
  [IconName.ArrowBottomLeft]: importDynamicSVG("ArrowBottomLeft"),
  [IconName.Settings]: importDynamicSVG("Settings"),
  [IconName.LoadingSpinner]: importDynamicSVG("LoadingSpinner"),
  [IconName.LogoIcon]: importDynamicSVG("LogoIcon"),
};
