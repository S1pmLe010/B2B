import Link from "next/link";
import { PageLayout, SectionTitle } from "../components";

const suppliers = [
  { name: "Tech Supply", category: "Elektronika", description: "Elektronika va ofis texnikasi mahsulotlari." },
  { name: "Office Market", category: "Kanselyariya", description: "Ofis va ta’lim uchun kundalik mahsulotlar." },
  { name: "Green Pack", category: "Qadoqlash", description: "Qadoqlash va saqlash materiallari." },
];

export default function SuppliersPage() {
  return (
    <PageLayout>
      <main className="container page-main">
        <SectionTitle
          title="Hamkor kompaniyalar"
          description="Yangi biznes aloqalarini toping va mahsulot yetkazib beruvchilar bilan tanishing."
        />

        <div className="card-grid">
          {suppliers.map((supplier) => (
            <article className="card" key={supplier.name}>
              <div className="card-icon">🏢</div>
              <span className="tag">{supplier.category}</span>
              <h3 style={{ marginTop: 16 }}>{supplier.name}</h3>
              <p>{supplier.description}</p>
              <div className="card-bottom">
                <span className="muted">Demo kompaniya</span>
                <Link href="/login" className="btn btn-outline">Bog‘lanish</Link>
              </div>
            </article>
          ))}
        </div>

        <p className="muted" style={{ marginTop: 24 }}>
          Bu hozircha namuna ma’lumotlar. Haqiqiy kompaniyalar bazasi keyin ulanadi.
        </p>
      </main>
    </PageLayout>
  );
}