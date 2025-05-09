import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-green-600 px-4 rounded-md cursor-pointer hover:bg-green-700 transition-all duration-200"
      {...props}
    />
  );
};
