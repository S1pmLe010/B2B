
import Link from "next/link";
import { PageLayout } from "./components";

const categories = [
  { icon: "🥫", name: "Oziq-ovqat", href: "/catalog" },
  { icon: "💧", name: "Ichimliklar", href: "/catalog" },
  { icon: "🧴", name: "Maishiy kimyo", href: "/catalog" },
  { icon: "🧱", name: "Qurilish materiallari", href: "/catalog" },
  { icon: "🌱", name: "Qishloq xo‘jaligi", href: "/catalog" },
  { icon: "💻", name: "Elektronika", href: "/catalog" },
];

const benefits = [
  {
    icon: "♧",
    title: "Ishonchli hamkorlar",
    description: "Tekshirilgan yetkazib beruvchilar",
  },
  {
    icon: "♡",
    title: "Eng yaxshi narxlar",
    description: "Bevosita ishlab chiqaruvchilardan",
  },
  {
    icon: "▣",
    title: "Qulay to‘lov shartlari",
    description: "Naqd yoki hisobvaraq orqali",
  },
  {
    icon: "♧",
    title: "Tez va ishonchli yetkazib berish",
    description: "Butun O‘zbekiston bo‘ylab",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      <main>
        <section className="hero">
          <div className="hero-background" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">
                <span>◉</span>
                B2B ULGURJI SAVDO PLATFORMASI
              </span>

              <h1>
                Biznesingiz uchun
                <br />
                ulgurji xarid —
                <br />
                endi yanada <span>oson.</span>
              </h1>

              <p>
                Ishlab chiqaruvchilar va distribyutorlardan
                to‘g‘ridan-to‘g‘ri, eng yaxshi narxlarda xarid qiling.
              </p>

              <div className="hero-actions">
                <Link href="/catalog" className="btn btn-primary">
                  Katalogni ko‘rish <span>→</span>
                </Link>

                <Link href="/about" className="play-link">
                  <span className="play-circle">▶</span>
                  Qanday ishlaydi?
                </Link>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-icon">♙</span>
                <div>
                  <strong>500+</strong>
                  <small>Ishonchli yetkazib beruvchilar</small>
                </div>
              </div>

              <div className="hero-stat">
                <span className="stat-icon">▣</span>
                <div>
                  <strong>20 000+</strong>
                  <small>Mahsulot turi</small>
                </div>
              </div>

              <div className="hero-stat">
                <span className="stat-icon">🚚</span>
                <div>
                  <strong>Tez yetkazib berish</strong>
                  <small>Butun O‘zbekiston bo‘ylab</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="category-strip">
          <div className="container category-grid">
            <Link href="/catalog" className="category-card">
              <strong>Barcha<br />kategoriyalar</strong>
            </Link>

            {categories.map((category) => (
              <Link
                href={category.href}
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">{category.icon}</span>
                <small>{category.name}</small>
              </Link>
            ))}

            <Link href="/catalog" className="category-card">
              <span className="category-icon">•••</span>
              <small>Boshqalar</small>
            </Link>
          </div>
        </section>

        <section className="advantages">
          <div className="container">
            <div className="advantage-grid">
              {benefits.map((benefit) => (
                <div className="advantage" key={benefit.title}>
                  <span className="advantage-icon">{benefit.icon}</span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <small>{benefit.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>Savdoni osonroq boshqaring</h2>
                <p className="muted">
                  Mahsulot izlashdan tortib hamkorlikkacha — barchasi bir joyda.
                </p>
              </div>
            </div>

            <div className="card-grid">
              <Link href="/catalog" className="card">
                <div className="card-icon">📦</div>
                <h3>Mahsulotlar katalogi</h3>
                <p>
                  Kerakli mahsulotlarni toping, narxlarni solishtiring va
                  yetkazib beruvchilar bilan bog‘laning.
                </p>
                <div className="card-bottom">
                  <span className="tag">Katalog</span>
                  <span>→</span>
                </div>
              </Link>

              <Link href="/suppliers" className="card">
                <div className="card-icon">🏢</div>
                <h3>Yetkazib beruvchilar</h3>
                <p>
                  Kompaniyalarni o‘rganing va biznesingiz uchun yangi
                  hamkorlar toping.
                </p>
                <div className="card-bottom">
                  <span className="tag">Hamkorlar</span>
                  <span>→</span>
                </div>
              </Link>

              <Link href="/dashboard" className="card">
                <div className="card-icon">📊</div>
                <h3>Kompaniya paneli</h3>
                <p>
                  Mahsulotlar, buyurtmalar va ombor boshqaruvini
                  bir joyda tashkil qiling.
                </p>
                <div className="card-bottom">
                  <span className="tag">Boshqaruv</span>
                  <span>→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
