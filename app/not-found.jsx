import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container page-main" style={{ textAlign: "center" }}>
      <div className="eyebrow">404 — Sahifa topilmadi</div>
      <h1 style={{ fontSize: 64, margin: "22px 0 0" }}>Yo‘qolib qoldingizmi?</h1>
      <p className="muted">Bu sahifa mavjud emas yoki manzil noto‘g‘ri yozilgan.</p>
      <Link href="/" className="btn btn-primary">Bosh sahifaga qaytish</Link>
    </main>
  );
}