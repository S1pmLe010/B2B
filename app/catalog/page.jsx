"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageLayout, SectionTitle } from "../components";

const products = [
  { name: "Ofis qog‘ozi A4", category: "Kanselyariya", price: "45 000", unit: "1 quti" },
  { name: "Simsiz klaviatura", category: "Elektronika", price: "185 000", unit: "1 dona" },
  { name: "LED lampa", category: "Yoritish", price: "28 000", unit: "1 dona" },
  { name: "Qadoqlash qutisi", category: "Qadoqlash", price: "6 500", unit: "1 dona" },
  { name: "Kompyuter sichqonchasi", category: "Elektronika", price: "72 000", unit: "1 dona" },
  { name: "Tozalash vositasi", category: "Xo‘jalik mollari", price: "32 000", unit: "1 dona" },
];

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Barchasi");

  const categories = ["Barchasi", ...new Set(products.map((p) => p.category))];

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "Barchasi" || p.category === category;
        return matchesQuery && matchesCategory;
      }),
    [query, category]
  );

  return (
    <PageLayout>
      <main className="container page-main">
        <SectionTitle
          title="Mahsulotlar katalogi"
          description="Biznesingiz uchun kerakli mahsulotlarni qidiring va takliflar bilan tanishing."
        />

        <div className="search-wrap">
          <input
            className="search-input"
            placeholder="Mahsulot nomini kiriting..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          {categories.map((item) => (
            <button
              className={`btn ${category === item ? "btn-primary" : "btn-outline"}`}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {filtered.length ? (
          <div className="card-grid">
            {filtered.map((product) => (
              <article className="card" key={product.name}>
                <div className="card-icon">📦</div>
                <span className="tag">{product.category}</span>
                <h3 style={{ marginTop: 16 }}>{product.name}</h3>
                <p>Namunaviy mahsulot. Narx yetkazib beruvchi tomonidan tasdiqlanadi.</p>
                <div className="product-price">{product.price} so‘m</div>
                <div className="card-bottom">
                  <span className="muted">{product.unit}</span>
                  <Link href="/login" className="btn btn-outline">
                    Bog‘lanish
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">Mos mahsulot topilmadi. Boshqa so‘z bilan qidiring.</div>
        )}
      </main>
    </PageLayout>
  );
}