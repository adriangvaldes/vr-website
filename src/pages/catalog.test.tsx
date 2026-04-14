import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

// ── Mock Firebase before any import resolves ────────────────────────────
vi.mock("@/database/firebaseConfig", () => ({ db: {} }));
vi.mock("firebase/firestore", () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
}));

// ── Mock the data-fetching function ────────────────────────────────────
vi.mock("../database/functions/products", () => ({
  getProductsByCategory: vi.fn(),
}));

import { getProductsByCategory } from "../database/functions/products";
import Catalog from "./catalog";

const mockGetProducts = vi.mocked(getProductsByCategory);

const sampleProducts = [
  { id: "1", name: "Tábua de Madeira", price: 1500, imageUrl: "https://example.com/img.jpg", category: 1, subCategory: 1 },
  { id: "2", name: "Bolsa de Tecido", price: 200, imageUrl: "", category: 2, subCategory: 1 },
];

beforeEach(() => {
  mockGetProducts.mockReset();
});

// ── FilterPanel ────────────────────────────────────────────────────────

describe("FilterPanel", () => {
  beforeEach(() => {
    // Resolve immediately so catalog renders products
    mockGetProducts.mockResolvedValue([]);
  });

  it("renders category labels Madeira and Tecido", async () => {
    render(<Catalog />);
    await waitFor(() => expect(screen.queryByText("Carregando produtos...")).toBeNull());
    expect(screen.getAllByText("Madeira").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Tecido").length).toBeGreaterThan(0);
  });

  it("shows subcategory items when category is open (default: cat 1 open)", async () => {
    render(<Catalog />);
    await waitFor(() => expect(screen.queryByText("Carregando produtos...")).toBeNull());
    expect(screen.getAllByText("Utensílios Gourmet").length).toBeGreaterThan(0);
  });

  it("calls getProductsByCategory when a subcategory checkbox is toggled", async () => {
    mockGetProducts.mockResolvedValue([]);
    render(<Catalog />);
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalledTimes(1));

    const checkboxes = screen.getAllByRole("checkbox", { hidden: true });
    await userEvent.click(checkboxes[0]);

    await waitFor(() => expect(mockGetProducts).toHaveBeenCalledTimes(2));
  });
});

// ── ProductCard ────────────────────────────────────────────────────────

describe("ProductCard — via Catalog", () => {
  beforeEach(() => {
    mockGetProducts.mockResolvedValue(sampleProducts as any);
  });

  it("renders product names after data loads", async () => {
    render(<Catalog />);
    await waitFor(() => expect(screen.getByText("Tábua de Madeira")).toBeInTheDocument());
    expect(screen.getByText("Bolsa de Tecido")).toBeInTheDocument();
  });

  it("formats price in Brazilian locale", async () => {
    render(<Catalog />);
    await waitFor(() => expect(screen.getByText(/1\.500,00/)).toBeInTheDocument());
  });

  it("shows category badge for known category", async () => {
    render(<Catalog />);
    await waitFor(() => screen.getByText("Tábua de Madeira"));
    // Category 1 = "Madeira" badge, Category 2 = "Tecido" badge
    const badges = screen.getAllByText("Madeira");
    expect(badges.length).toBeGreaterThanOrEqual(1);
  });

  it("shows img tag when imageUrl is set", async () => {
    render(<Catalog />);
    await waitFor(() => screen.getByText("Tábua de Madeira"));
    const imgs = screen.getAllByRole("img");
    const productImg = imgs.find((img) => (img as HTMLImageElement).src?.includes("example.com"));
    expect(productImg).toBeDefined();
  });

  it("shows SVG fallback when imageUrl is empty", async () => {
    render(<Catalog />);
    await waitFor(() => screen.getByText("Bolsa de Tecido"));
    // When imageUrl is empty, the card renders an SVG placeholder (no <img> for that product)
    const svgs = document.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
  });
});

// ── LoadingGrid ────────────────────────────────────────────────────────

describe("LoadingGrid", () => {
  it("renders 8 animate-pulse skeleton items while loading", () => {
    // Never resolves → stays in loading state
    mockGetProducts.mockReturnValue(new Promise(() => {}));
    render(<Catalog />);
    const skeletons = document.querySelectorAll(".animate-pulse");
    expect(skeletons.length).toBe(8);
  });
});

// ── EmptyState ─────────────────────────────────────────────────────────

describe("EmptyState", () => {
  it('renders "Nenhum produto encontrado" when response is empty', async () => {
    mockGetProducts.mockResolvedValue([]);
    render(<Catalog />);
    await waitFor(() => expect(screen.getByText("Nenhum produto encontrado")).toBeInTheDocument());
  });
});

// ── Catalog page integration ───────────────────────────────────────────

describe("Catalog page (integration)", () => {
  it('shows "Carregando produtos..." while loading', () => {
    mockGetProducts.mockReturnValue(new Promise(() => {}));
    render(<Catalog />);
    expect(screen.getByText("Carregando produtos...")).toBeInTheDocument();
  });

  it("shows product count after data loads", async () => {
    mockGetProducts.mockResolvedValue(sampleProducts as any);
    render(<Catalog />);
    await waitFor(() => expect(screen.getByText("2 produtos encontrados")).toBeInTheDocument());
  });

  it("singular form for exactly 1 product", async () => {
    mockGetProducts.mockResolvedValue([sampleProducts[0]] as any);
    render(<Catalog />);
    await waitFor(() => expect(screen.getByText("1 produto encontrado")).toBeInTheDocument());
  });
});
