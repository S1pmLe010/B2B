"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    setMessage("");

    try {
      const company = JSON.parse(
        localStorage.getItem("savdochi-company") || "null"
      );

      if (!company || company.email !== email.trim().toLowerCase()) {
        setMessage("Bu email uchun demo kompaniya topilmadi. Avval registratsiyadan o‘ting.");
        return;
      }

      if (!password) {
        setMessage("Parolni kiriting.");
        return;
      }

      // Demo rejimi: bu haqiqiy parol tekshiruvi emas.
      sessionStorage.setItem("savdochi-demo-session", company.email);
      router.push("/dashboard");
    } catch {
      setMessage("Kirishda xato yuz berdi. Qayta urinib ko‘ring.");
    }
  }

  return (
    <main className="container">
      <div className="form-shell">
        <Link href="/" className="logo">
          <span className="logo-mark">S</span> Savdochi
        </Link>

        <h1 style={{ marginTop: 28 }}>Xush kelibsiz</h1>
        <p>Kompaniya paneliga kirish uchun ma’lumotlaringizni kiriting.</p>

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="company@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Parol</label>
            <input
              id="password"
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Parolingiz"
            />
          </div>

          {message && <div className="form-message" role="alert">{message}</div>}

          <button className="btn btn-primary" type="submit">
            Kirish →
          </button>
        </form>

        <div className="form-footer">
          Hali kompaniyangiz yo‘qmi? <Link href="/register">Ro‘yxatdan o‘tish</Link>
        </div>

        <p className="muted" style={{ fontSize: 11, marginTop: 20 }}>
          Demo login: haqiqiy parol tekshiruvi server va autentifikatsiya tizimi ulangandan keyin ishlaydi.
        </p>
      </div>
    </main>
  );
}