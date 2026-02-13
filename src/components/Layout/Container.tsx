import type { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="px-[200px]">{children}</div>;
}
