import React from "react";
import { useRouter } from "next/router";

export const Foo = () => {
  const router = useRouter();
  console.log(router.pathname);

  return null;
};
