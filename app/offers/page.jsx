import Link from "next/link";
import { PageLayout, SectionTitle } from "../components";

const offers = [
  { title: "Ulgurji xaridlar", text: "Ko‘p miqdordagi mahsulotlar bo‘yicha yetkazib beruvchidan narx so‘rash.", icon: "📦" },
  { title: "Yangi hamkorlik", text: "Kompaniyangiz uchun yangi biznes hamkorlarini topish.", icon: "🤝" },
  { title: "Yetkazib berish", text: "Buyurtma shartlari va yetkazib berish tafsilotlarini kelishish.", icon: "🚚" },
];

export default function OffersPage() {
  return (
    <PageLayout>
      <main className="container page-main">
        <SectionTitle
          title="Biznes takliflari"
          description="Savdo aloqalarini rivojlantirish va ulgurji xaridlarni tashkil etish uchun imkoniyatlar."
        />
        <div className="card-grid">
          {offers.map((offer) => (
            <article className="card" key={offer.title}>
              <div className="card-icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
              <div className="card-bottom">
                <span className="tag">B2B</span>
                <Link href="/register" className="btn btn-primary">Boshlash →</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}