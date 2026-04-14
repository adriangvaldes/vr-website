import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("firebase/firestore", () => ({
  collection: vi.fn(() => "productsRef"),
  getDocs: vi.fn(),
  query: vi.fn((_ref, ...constraints) => ({ ref: _ref, constraints })),
  where: vi.fn((field, op, value) => ({ field, op, value })),
}));

vi.mock("@/database/firebaseConfig", () => ({ db: {} }));

import { collection, getDocs, query, where } from "firebase/firestore";
import { getProductsByCategory } from "./products";

function makeSnapshot(docs: { id: string; data: Record<string, unknown> }[]) {
  return {
    docs: docs.map((d) => ({ id: d.id, data: () => d.data })),
  };
}

beforeEach(() => {
  vi.mocked(getDocs).mockReset();
  vi.mocked(where).mockClear();
  vi.mocked(query).mockClear();
});

describe("getProductsByCategory", () => {
  it("returns mapped docs with id merged", async () => {
    vi.mocked(getDocs).mockResolvedValue(
      makeSnapshot([{ id: "abc", data: { name: "Chair", price: 200 } }]) as any
    );

    const result = await getProductsByCategory([], []);
    expect(result).toEqual([{ name: "Chair", price: 200, id: "abc" }]);
  });

  it("returns empty array for empty snapshot", async () => {
    vi.mocked(getDocs).mockResolvedValue(makeSnapshot([]) as any);
    const result = await getProductsByCategory([], []);
    expect(result).toEqual([]);
  });

  it("calls where('category') when category array is non-empty", async () => {
    vi.mocked(getDocs).mockResolvedValue(makeSnapshot([]) as any);
    await getProductsByCategory([1], []);
    expect(where).toHaveBeenCalledWith("category", "in", [1]);
  });

  it("calls where('subCategory') when subCategories array is non-empty", async () => {
    vi.mocked(getDocs).mockResolvedValue(makeSnapshot([]) as any);
    await getProductsByCategory([], [2]);
    expect(where).toHaveBeenCalledWith("subCategory", "in", [2]);
  });

  it("calls both where clauses when both arrays are non-empty", async () => {
    vi.mocked(getDocs).mockResolvedValue(makeSnapshot([]) as any);
    await getProductsByCategory([1], [2]);
    expect(where).toHaveBeenCalledWith("category", "in", [1]);
    expect(where).toHaveBeenCalledWith("subCategory", "in", [2]);
  });

  it("calls where 0 times when both arrays are empty", async () => {
    vi.mocked(getDocs).mockResolvedValue(makeSnapshot([]) as any);
    await getProductsByCategory([], []);
    expect(where).not.toHaveBeenCalled();
  });

  it("propagates thrown errors", async () => {
    vi.mocked(getDocs).mockRejectedValue(new Error("Firestore down"));
    await expect(getProductsByCategory([], [])).rejects.toThrow("Firestore down");
  });
});
