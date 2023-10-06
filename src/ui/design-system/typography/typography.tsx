import { clsx } from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  children: React.ReactNode;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "span";
}
export const Typography = ({
  variant = "h3",
  component: Component = "div",
  children,
}: Props) => {
  let variantStyles: string = "";
  switch (variant) {
    case "display":
      variantStyles = "text-red-500";
      break;
    case "h1":
      variantStyles = "text-green-500";
      break;
  }
  return <Component className={clsx(variantStyles)}>{children}</Component>;
};
