import { IconProps } from "@/types/iconProps";
import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "iconButton";
  icon?: IconProps;
  iconTheme?: "accent" | "gray" | "secondary";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  size = "medium", //default
  variant = "accent", //derault, if we omit define button we heve minimum default values (size, variant)
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconButtonSize: number = 0;
  switch (variant) {
    case "accent":
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900  rounded ";
      break;
    case "disabled":
      variantStyles =
        "bg-gay-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "iconButton":
      if (iconTheme === "accent") {
        // default
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-700 hover:bg-gray-600 text-white rounded-full";
      }
      break;
  }
  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "iconButton"
          ? " flex justify-center items-center w-[40px] h-[40px]"
          : "px-[12px] py-[11px]"
      } `;
      iconButtonSize = 18;
      break;
    case "medium":
      sizeStyles = `text-caption2 font-mediu  ${
        variant === "iconButton"
          ? " flex justify-center items-center w-[50px] h-[50px]"
          : "px-[16px] py-[15px]"
      }  `;
      iconButtonSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium   ${
        variant === "iconButton"
          ? " flex justify-center items-center w-[60px] h-[60px]"
          : "px-[20px] py-[18px]"
      }  `;
      iconButtonSize = 24;
      break;
  }
  return (
    <button
      type="button"
      className={clsx(variantStyles, sizeStyles, iconButtonSize)}
      onClick={() => console.log("click")}
      disabled={disabled}
    >
      {icon && variant === "iconButton" ? (
        <icon.icon size={iconButtonSize} />
      ) : (
        <div className={clsx(icon && "flex items-center gap-1")}>
          {icon && iconPosition === "left" && (
            <icon.icon size={iconButtonSize} />
          )}
          {children}
          {icon && iconPosition === "right" && (
            <icon.icon size={iconButtonSize} />
          )}
        </div>
      )}
    </button>
  );
};
