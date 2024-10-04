import { ReactNode } from "react";

interface Box {
  children: ReactNode;
  title: string;
}

export default function Box({ children, title }: Box) {
  return (
    <div className="mx-10 my-4 px-4 py-4 bg-white rounded-lg">
      <h1 className="text-2xl py-4">{title}</h1>
      {children}
    </div>
  );
}
