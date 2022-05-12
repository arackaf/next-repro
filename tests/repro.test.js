import React from "react";
import * as nextRouter from "next/router";
import { render } from "@testing-library/react";

import { Foo } from "../Component";

jest.spyOn(nextRouter, "useRouter").mockReturnValue({
  pathname: "Hello",
});

test("repro", () => {
  render(<Foo />);
  expect(1).toBe(1);
});
