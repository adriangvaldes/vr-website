import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import * as React from "react";
import { useInView } from "./useInView";
import {
  mockObserve,
  mockUnobserve,
  mockDisconnect,
  MockIntersectionObserver,
} from "@/test/setup";

// Wrapper component using React.createElement (no JSX — this is a .ts file)
function Target({ threshold }: { threshold?: number }) {
  const { ref, inView } = useInView(threshold);
  return React.createElement("div", { ref, "data-testid": "target" }, inView ? "visible" : "hidden");
}

function getLastCallback(): IntersectionObserverCallback {
  const calls = MockIntersectionObserver.mock.calls;
  return calls[calls.length - 1][0];
}

describe("useInView", () => {
  it("initial inView is false (renders 'hidden')", () => {
    render(React.createElement(Target));
    expect(screen.getByTestId("target").textContent).toBe("hidden");
  });

  it("observer created with default threshold 0.15", () => {
    render(React.createElement(Target));
    expect(MockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.15 }
    );
  });

  it("observer created with custom threshold when passed", () => {
    render(React.createElement(Target, { threshold: 0.5 }));
    expect(MockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 }
    );
  });

  it("inView becomes true after intersecting entry", () => {
    render(React.createElement(Target));
    const cb = getLastCallback();
    act(() => {
      cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
    expect(screen.getByTestId("target").textContent).toBe("visible");
  });

  it("calls unobserve after first intersection (fire-once)", () => {
    render(React.createElement(Target));
    const cb = getLastCallback();
    act(() => {
      cb([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
    expect(mockUnobserve).toHaveBeenCalledTimes(1);
  });

  it("non-intersecting entry leaves inView as false", () => {
    render(React.createElement(Target));
    const cb = getLastCallback();
    act(() => {
      cb([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver);
    });
    expect(screen.getByTestId("target").textContent).toBe("hidden");
  });

  it("disconnect called on unmount", () => {
    const { unmount } = render(React.createElement(Target));
    unmount();
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
  });

  it("no crash when IntersectionObserver is undefined (SSR safety)", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    expect(() => render(React.createElement(Target))).not.toThrow();
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });
});
