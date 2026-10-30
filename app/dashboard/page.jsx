"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageLayout } from "../components";

export default function DashboardPage() {
  const router = useRouter();
  const [company, setCompany] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const email = sessionStorage.getItem("savdochi-demo-session");
      const savedCompany = JSON.parse(
        localStorage.getItem("savdochi-company") || "null"
      );

      if (!email || !savedCompany || savedCompany.email !== email) {
        router.replace("/login");
        return;
      }

      setCompany(savedCompany);
    } catch {
      router.replace("/login");
    } finally {
      setReady(true);
    }
  }, [router]);

  function logout() {
    sessionStorage.removeItem("savdochi-demo-session");
    router.push("/login");
  }

  if (!ready || !company) {
    return <main className="container page-main">Panel yuklanmoqda...</main>;
  }

  return (
    <PageLayout>
      <main className="container page-main">
        <div className="section-heading">
          <div className="page-heading" style={{ marginBottom: 0 }}>
            <span className="tag">KOMPANIYA PANELI</span>
            <h1 style={{ marginTop: 14 }}>Xush kelibsiz!</h1>
            <p className="muted">{company.company}</p>
          </div>
          <button className="btn btn-outline" onClick={logout}>Chiqish</button>
        </div>

        <div className="notice" style={{ marginBottom: 24 }}>
          <strong>Demo dashboard</strong>
          <br />
          Bu yerda hozircha namunaviy ko‘rsatkichlar. Haqiqiy buyurtmalar,
          ombor qoldiqlari va savdo ma’lumotlari backend ulangandan keyin chiqadi.
        </div>

        <div className="dashboard-grid">
          <article className="card">
            <div className="muted">Mahsulotlar</div>
            <div className="dashboard-number">—</div>
            <span className="tag">Ma’lumot kutilmoqda</span>
          </article>
          <article className="card">
            <div className="muted">Buyurtmalar</div>
            <div className="dashboard-number">—</div>
            <span className="tag">Ma’lumot kutilmoqda</span>
          </article>
          <article className="card">
            <div className="muted">Ombor holati</div>
            <div className="dashboard-number">—</div>
            <span className="tag">Ma’lumot kutilmoqda</span>
          </article>
        </div>

        <div className="card">
          <h3>Kompaniya ma’lumotlari</h3>
          <p><strong>Kompaniya:</strong> {company.company}</p>
          <p><strong>Mas’ul shaxs:</strong> {company.owner}</p>
          <p><strong>Email:</strong> {company.email}</p>
          <p><strong>Telefon:</strong> {company.phone}</p>
          <div style={{ marginTop: 20 }}>
            <Link href="/catalog" className="btn btn-primary">Katalogni ko‘rish →</Link>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}