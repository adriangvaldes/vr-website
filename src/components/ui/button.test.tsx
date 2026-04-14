import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Button } from "./button";

describe("Button", () => {
  it("renders a <button> element by default", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies default variant classes (bg-primary)", () => {
    render(<Button>Default</Button>);
    expect(screen.getByRole("button").className).toContain("bg-primary");
  });

  it("applies destructive variant classes", () => {
    render(<Button variant="destructive">Del</Button>);
    expect(screen.getByRole("button").className).toContain("bg-destructive");
  });

  it("applies sm size class (h-9)", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button").className).toContain("h-9");
  });

  it("applies lg size class (h-11)", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button").className).toContain("h-11");
  });

  it("merges className prop without losing variant classes", () => {
    render(<Button className="my-custom">Merge</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("my-custom");
    expect(btn.className).toContain("bg-primary");
  });

  it("passes through disabled attribute", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick handler when clicked", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("asChild renders the child element instead of <button>", () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    );
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("ref forwarding: ref.current is the button DOM node", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
