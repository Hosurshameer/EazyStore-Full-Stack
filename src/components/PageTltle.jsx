import React from "react";

export default function PageTltle({ title }) {
  return (
    <h1 className="text-3xl font-primary font-extrabold text-center text-primary dark:text-primary mt-4 py-2">
      {title}
    </h1>
  );
}
