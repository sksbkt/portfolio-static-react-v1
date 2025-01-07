import { useMemo } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const useTailMerge = (...classes: ClassValue[]) => {
  return useMemo(() => twMerge(clsx(...classes)), [classes]);
};

export default useTailMerge;
