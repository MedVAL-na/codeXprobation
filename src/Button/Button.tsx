import React, { PropsWithChildren } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  view?: "solid" | "outline" | "soft" | "ghost";
  size?: "small" | "medium" | "large";
  theme?: "primary" | "secondary" | "danger";
  iconType?: "none" | "leading" | "trailing" | "leadingTrailing" | "standalone";
  state?: "default" | "hover" | "disabled";
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 5V10M10 15V10M15 10H10M10 10H5"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
);

export const Button = ({
  view: type = "solid",
  size = "medium",
  theme: style = "primary",
  iconType = "none",
  state = "default",
  iconLeft = <Icon />,
  iconRight = <Icon />,
  ...props
}: ButtonProps) => {
  const WrappedIcon: React.FC<PropsWithChildren<{}>> = ({ children }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {children}
    </span>
  );

  const hasLeftIcon =
    iconLeft && ["leading", "leadingTrailing", "standalone"].includes(iconType);
  const hasRightIcon =
    iconRight && ["trailing", "leadingTrailing"].includes(iconType);

  return (
    <button
      type="button"
      className={[
        "button",
        `button-size-${size}`,
        `button-style-${style}`,
        `button-type-${type}`,
        `button-iconType-${iconType}`,
        `button-state-${state}`,
      ].join(" ")}
      {...props}
    >
      {hasLeftIcon && <WrappedIcon>{iconLeft}</WrappedIcon>}
      {iconType !== "standalone" && <div>Button</div>}
      {hasRightIcon && <WrappedIcon>{iconRight}</WrappedIcon>}
    </button>
  );
};