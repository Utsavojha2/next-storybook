export type FontVariant = "regular" | "medium" | "bold";

export const getFontFamily = (variant: FontVariant) => {
  switch (variant) {
    case "regular":
      return "font-inter-regular";
    case "medium":
      return "font-inter-medium";
    case "bold":
      return "font-inter-bold";
  }
};
