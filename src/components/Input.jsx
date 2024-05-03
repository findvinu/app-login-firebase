import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ label, type = "text", className = "", hintText, ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-3 py-2 rounded-lg bg-white text-block outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
        {hintText && <p class="mt-2 text-sm text-slate-400">{hintText}</p>}
      </div>
    );
  }
);

export default Input;
