import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn()", () => {
  it("returns empty string with no args", () => {
    expect(cn()).toBe("");
  });

  it("joins multiple class strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("deduplicates conflicting tailwind classes (last wins)", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("ignores falsy values", () => {
    expect(cn("a", false, undefined, null, "b")).toBe("a b");
  });

  it("handles object syntax", () => {
    expect(cn({ "text-red-500": true, "text-blue-500": false })).toBe("text-red-500");
  });
});
