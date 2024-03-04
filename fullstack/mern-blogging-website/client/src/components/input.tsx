import { ReactNode } from "react";

type IInputBox = JSX.IntrinsicElements["input"] & {
  name: string;
  placeholder: string;
  id?: string;
  defaultValue?: string;
  icon: ReactNode;
};

export const InputBox = (props: IInputBox) => {
  return (
    <div className="relative w-[100%] mb-4">
      <input {...props} className="input-box" />
      {props.icon}
    </div>
  );
};
