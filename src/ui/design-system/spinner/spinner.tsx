import clsx from "clsx";
interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "white";
  animate?: "spin" | "none";
}

export const Spinner = ({
  size = "medium",
  variant = "primary",
  animate = "none",
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    animateStyles = "";
  switch (size) {
    case "small":
      sizeStyles = "w-5 h-5";
      break;
    case "medium": //default
      sizeStyles = "w-9 h-9";
      break;
    case "large":
      sizeStyles = "w-12 h-12";
      break;
  }
  switch (variant) {
    case "primary": //default
      variantStyles = "text-primary";
      break;
    case "white":
      variantStyles = "fill-white";
      break;
  }

  return (
    <div>
      <svg
        className={clsx(sizeStyles, variantStyles, "animate-spin")}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#000000"
        />
        <path
          d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
