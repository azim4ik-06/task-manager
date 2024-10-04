import { ReactNode } from "react";

interface Box {
    children: ReactNode;
    title: string
}

export default function Box({ children, title }: Box) {
  return (
    <div className="mx-10 my-4 px-4 py-2 bg-gray-400 rounded-lg">
      <h1 className="text-2xl py-4">{title}</h1>
      {children}
    </div>
  );
}
