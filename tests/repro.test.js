import React from "react";
import * as nextRouter from "next/router";
//swap this line for what's above, and the test will pass
//import nextRouter from "next/router";

import { render } from "@testing-library/react";

import { Foo } from "../Component";

jest.spyOn(nextRouter, "useRouter").mockReturnValue({
  pathname: "Hello",
});

test("repro", () => {
  render(<Foo />);
  expect(1).toBe(1);
});
