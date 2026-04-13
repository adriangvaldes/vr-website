import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, PackageOpen, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import banner from "@/assets/wood/background2.jpg";
import { getProductsByCategory } from "../database/functions/products";

// ── Types ──────────────────────────────────────────────────────────────
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: number;
  subCategory: number;
};

type FilterPanelProps = {
  openCategories: Record<number, boolean>;
  toggleCategory: (id: number) => void;
  selectedSubItems: Set<string>;
  handleSelectSubCategory: (
    checked: boolean,
    categoryValue: number,
    subCategoryValue: number
  ) => void;
};

// ── Static data ────────────────────────────────────────────────────────
const FILTER_CATEGORIES = [
  {
    id: 1,
    label: "Madeira",
    items: [
      { id: 1, label: "Utensílios Gourmet" },
      { id: 2, label: "Pequenos móveis utilitários" },
      { id: 3, label: "Utensílios decorativos" },
      { id: 4, label: "Luminárias" },
    ],
  },
  {
    id: 2,
    label: "Tecido",
    items: [
      { id: 1, label: "Bolsas e Nécessaires" },
      { id: 2, label: "Utilitários Gourmet" },
      { id: 3, label: "Outros utilitários" },
    ],
  },
];

const CATEGORY_LABELS: Record<number, string> = {
  1: "Madeira",
  2: "Tecido",
  3: "Laser",
};

// ── FilterPanel ────────────────────────────────────────────────────────
function FilterPanel({
  openCategories,
  toggleCategory,
  selectedSubItems,
  handleSelectSubCategory,
}: FilterPanelProps) {
  return (
    <div className='py-2'>
      {FILTER_CATEGORIES.map((cat) => (
        <div key={cat.id}>
          {/* Accordion header */}
          <button
            type='button'
            onClick={() => toggleCategory(cat.id)}
            className='flex items-center justify-between w-full px-4 py-3 text-background hover:bg-white/5 transition-colors'
          >
            <span className='text-sm font-medium tracking-wide'>{cat.label}</span>
            <ChevronDown
              size={14}
              className={cn(
                "text-textGrey transition-transform duration-200",
                openCategories[cat.id] && "rotate-180"
              )}
            />
          </button>

          {/* Accordion items */}
          {openCategories[cat.id] && (
            <div className='pb-2'>
              {cat.items.map((item) => {
                // Use compound key "catId-subId" to avoid false positives
                // when two categories share the same numeric sub-item ID.
                const isChecked = selectedSubItems.has(`${cat.id}-${item.id}`);
                return (
                  <label
                    key={item.id}
                    className='flex items-center gap-3 px-5 py-2 cursor-pointer group'
                  >
                    <input
                      type='checkbox'
                      className='sr-only'
                      checked={isChecked}
                      onChange={(e) =>
                        handleSelectSubCategory(e.target.checked, cat.id, item.id)
                      }
                    />
                    {/* Custom checkbox */}
                    <span
                      className={cn(
                        "w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-150",
                        isChecked
                          ? "bg-spotlight border-spotlight"
                          : "border-background/30 group-hover:border-background/55"
                      )}
                    >
                      {isChecked && (
                        <svg
                          viewBox='0 0 10 10'
                          className='w-2.5 h-2.5 text-white'
                          fill='none'
                        >
                          <path
                            d='M1.5 5l2.5 2.5 4.5-4.5'
                            stroke='currentColor'
                            strokeWidth='1.8'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className={cn(
                        "text-sm transition-colors",
                        isChecked
                          ? "text-background"
                          : "text-textGrey group-hover:text-textBright"
                      )}
                    >
                      {item.label}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── ProductCard ────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <div className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
      {/* Image area — overflow-hidden lives on the outer card only,
          so the hover scale is clipped there without extra stacking contexts. */}
      <div className='relative w-full aspect-[4/5]'>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-[1.05]'
          sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
        {/* Hover overlay */}
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300' />
        {/* Category badge */}
        {CATEGORY_LABELS[product.category] && (
          <span className='absolute top-2.5 left-2.5 bg-accentDarker/80 text-background text-xs px-2.5 py-1 rounded-md tracking-wide font-medium'>
            {CATEGORY_LABELS[product.category]}
          </span>
        )}
      </div>

      {/* Info area */}
      <div className='p-3 md:p-4'>
        <h3 className='font-medium text-accentDarker text-sm leading-snug mb-1.5 line-clamp-2'>
          {product.name}
        </h3>
        <p className='text-spotlight font-semibold text-sm md:text-base'>
          R${" "}
          {typeof product.price === "number"
            ? product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
            : product.price}
        </p>
      </div>
    </div>
  );
}

// ── Loading skeleton ───────────────────────────────────────────────────
function LoadingGrid() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className='rounded-xl overflow-hidden bg-white shadow-sm animate-pulse'>
          <div className='aspect-[4/5] bg-gray-200' />
          <div className='p-3 md:p-4 space-y-2'>
            <div className='h-3.5 bg-gray-200 rounded w-3/4' />
            <div className='h-3.5 bg-gray-200 rounded w-1/2' />
            <div className='h-4 bg-gray-200 rounded w-1/3 mt-1' />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Empty state ────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center py-28 text-center'>
      <PackageOpen size={52} className='text-accentDarker/20 mb-5' />
      <h3 className='text-lg font-medium text-accentDarker mb-2'>
        Nenhum produto encontrado
      </h3>
      <p className='text-sm text-gray-400 max-w-xs leading-6'>
        Tente ajustar ou remover os filtros para encontrar o que procura.
      </p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────
export default function Catalog() {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>({ 1: true });
  const [category, setCategory] = useState<number[]>([]);
  const [subCategory, setSubCategory] = useState<number[]>([]);
  // Tracks selections as "catId-subId" strings so checkboxes across
  // different categories with the same numeric subId don't conflict.
  const [selectedSubItems, setSelectedSubItems] = useState<Set<string>>(new Set());
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggleCategory(id: number) {
    setOpenCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  // Filter logic: original Firebase query state preserved exactly.
  // selectedSubItems is maintained in parallel only for checkbox display.
  function handleSelectSubCategory(
    checked: boolean,
    categoryValue: number,
    subCategoryValue: number
  ) {
    const key = `${categoryValue}-${subCategoryValue}`;

    setSelectedSubItems((prev) => {
      const next = new Set(prev);
      checked ? next.add(key) : next.delete(key);
      return next;
    });

    setSubCategory((prev) =>
      checked ? [...prev, subCategoryValue] : prev.filter((el) => el !== subCategoryValue)
    );
    setCategory((prev) =>
      !checked && subCategory.length - 1 === 0
        ? [...prev, categoryValue]
        : prev.filter((el) => el !== categoryValue)
    );
  }

  async function loadProducts() {
    setLoading(true);
    try {
      const data = await getProductsByCategory(category, subCategory);
      setProducts(data as Product[]);
    } catch (err) {
      console.error("Failed to load products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategory]);

  const selectedCount = selectedSubItems.size;

  return (
    <div className='min-h-screen bg-background'>

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <div
        className='relative flex flex-col items-center justify-center h-48 md:h-60 w-full bg-center bg-cover overflow-hidden'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url(${banner.src})`,
        }}
      >
        <h1 className='text-background text-3xl md:text-4xl font-light tracking-[0.35em] mb-2'>
          CATÁLOGO
        </h1>
        <p className='text-textGrey text-sm tracking-wider'>
          {loading
            ? "Carregando produtos..."
            : `${products.length} produto${products.length !== 1 ? "s" : ""} encontrado${products.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {/* ── MAIN LAYOUT ─────────────────────────────────────────── */}
      <div className='max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-10'>

        {/* Mobile: collapsible filter bar */}
        <div className='md:hidden mb-5'>
          <button
            type='button'
            onClick={() => setFiltersOpen(!filtersOpen)}
            className='flex items-center justify-between w-full bg-accentDarker text-background px-4 py-3 rounded-xl text-sm font-medium'
          >
            <span className='flex items-center gap-2'>
              <SlidersHorizontal size={14} />
              Filtros
              {selectedCount > 0 && (
                <span className='bg-spotlight text-white text-xs px-2 py-0.5 rounded-full leading-none'>
                  {selectedCount}
                </span>
              )}
            </span>
            <ChevronDown
              size={14}
              className={cn(
                "text-textGrey transition-transform duration-200",
                filtersOpen && "rotate-180"
              )}
            />
          </button>

          {filtersOpen && (
            <div className='mt-2 bg-accentDarker rounded-xl overflow-hidden'>
              <FilterPanel
                openCategories={openCategories}
                toggleCategory={toggleCategory}
                selectedSubItems={selectedSubItems}
                handleSelectSubCategory={handleSelectSubCategory}
              />
            </div>
          )}
        </div>

        <div className='flex gap-7'>
          {/* Desktop sidebar */}
          <aside className='hidden md:block w-52 flex-shrink-0'>
            <div className='bg-accentDarker rounded-xl overflow-hidden sticky top-24'>
              <div className='flex items-center gap-2 px-4 py-3.5 border-b border-white/10'>
                <SlidersHorizontal size={13} className='text-textGrey' />
                <span className='text-background text-xs font-semibold tracking-[0.15em] uppercase'>
                  Filtros
                </span>
                {selectedCount > 0 && (
                  <span className='ml-auto bg-spotlight text-white text-xs px-2 py-0.5 rounded-full leading-none'>
                    {selectedCount}
                  </span>
                )}
              </div>
              <FilterPanel
                openCategories={openCategories}
                toggleCategory={toggleCategory}
                selectedSubItems={selectedSubItems}
                handleSelectSubCategory={handleSelectSubCategory}
              />
            </div>
          </aside>

          {/* Product grid */}
          <main className='flex-1 min-w-0'>
            {loading ? (
              <LoadingGrid />
            ) : products.length === 0 ? (
              <EmptyState />
            ) : (
              <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
