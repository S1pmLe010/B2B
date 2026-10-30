import Link from "next/link";
import { PageLayout, SectionTitle } from "../components";

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="container page-main">
        <SectionTitle
          title="Savdochi haqida"
          description="Bizneslar o‘rtasidagi savdo jarayonlarini soddalashtirishga qaratilgan platforma."
        />

        <div className="card" style={{ marginBottom: 20 }}>
          <div className="card-icon">🌱</div>
          <h3>Bizning maqsadimiz</h3>
          <p>
            Do‘konlar va yetkazib beruvchi kompaniyalar o‘rtasida qulay raqamli
            aloqa yaratish. Mahsulot topish, buyurtma berish va savdoni
            boshqarish jarayonlarini bitta tizimda birlashtirish.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <div className="card-icon">🔎</div>
            <h3>Topish</h3>
            <p>Kerakli mahsulot va kompaniyalarni qidirish.</p>
          </article>
          <article className="card">
            <div className="card-icon">🧾</div>
            <h3>Buyurtma</h3>
            <p>Mahsulot va xarid shartlarini kelishish.</p>
          </article>
          <article className="card">
            <div className="card-icon">📊</div>
            <h3>Nazorat</h3>
            <p>Ombor qoldiqlari va savdo ma’lumotlarini kuzatish imkoniyatini yaratish.</p>
          </article>
        </div>

        <div style={{ marginTop: 28 }}>
          <Link href="/register" className="btn btn-primary">
            Kompaniyangizni qo‘shing →
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}