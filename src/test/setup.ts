import "@testing-library/jest-dom";

// IntersectionObserver stub — stores the callback so tests can trigger it.
export let observerCallback: IntersectionObserverCallback | null = null;
export const mockObserve    = vi.fn();
export const mockUnobserve  = vi.fn();
export const mockDisconnect = vi.fn();

export const MockIntersectionObserver = vi.fn(
  (cb: IntersectionObserverCallback) => {
    observerCallback = cb;
    return { observe: mockObserve, unobserve: mockUnobserve, disconnect: mockDisconnect };
  }
);

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

beforeEach(() => {
  observerCallback = null;
  MockIntersectionObserver.mockClear();
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();
});
