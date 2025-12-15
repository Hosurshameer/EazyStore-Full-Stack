import React from "react";

export default function Dropdown({
  label,
  options,
  selectedValue,
  handleSort,
}) {
  return (
    <div className="flex items-center gap-2 justify-end pr-12 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-primary">
        {label}
      </label>
      <select
        className="px-3 py-2 text-base border rounded-md transition border-primary/50 dark:border-primary/50 bg-white dark:bg-black focus:ring-2 focus:ring-primary dark:focus:ring-primary focus:outline-none text-gray-800 dark:text-gray-200"
        value={selectedValue}
        onChange={(event) => handleSort(event.target.value)}
      >
        {options.map((optionVal, index) => (
          <option
            key={index}
            value={optionVal}
            className="bg-white dark:bg-black dark:text-gray-200"
          >
            {optionVal}
          </option>
        ))}
      </select>
    </div>
  );
}
