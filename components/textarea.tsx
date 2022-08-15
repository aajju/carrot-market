import { cls } from "../libs/utils";

interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className={cls(
          " mb-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 ",
          label ? "" : "mt-3"
        )}
        rows={4}
        {...rest}
      />
    </div>
  );
}
