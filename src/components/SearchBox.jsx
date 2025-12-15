import React from "react";

export default function SearchBox({ label, placeholder, value, handleSearch }) {
  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
      <label className="text-lg font-semibold text-primary dark:text-primary">
        {label}
      </label>
      <input
        type="text"
        className="px-4 py-2 text-base border rounded-md transition border-primary/50 dark:border-primary/50 bg-white dark:bg-black focus:ring-2 focus:ring-primary dark:focus:ring-primary focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
