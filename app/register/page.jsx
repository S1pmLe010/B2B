"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    company: "",
    owner: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    setMessage("");

    if (form.password.length < 8) {
      setMessage("Parol kamida 8 ta belgidan iborat bo‘lishi kerak.");
      return;
    }

    const company = {
      company: form.company.trim(),
      owner: form.owner.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("savdochi-company") || "null");

      if (existing?.email === company.email) {
        setMessage("Bu email bilan kompaniya allaqachon ro‘yxatdan o‘tgan.");
        return;
      }

      // Faqat frontend demo. Haqiqiy parolni localStorage'ga saqlamang.
      localStorage.setItem("savdochi-company", JSON.stringify(company));
      setMessage("Demo registratsiya bajarildi. Endi kirish sahifasiga o‘tishingiz mumkin.");
    } catch {
      setMessage("Ma’lumotni saqlashda xato yuz berdi. Qayta urinib ko‘ring.");
    }
  }

  return (
    <main className="container">
      <div className="form-shell">
        <Link href="/" className="logo">
          <span className="logo-mark">S</span> Savdochi
        </Link>

        <h1 style={{ marginTop: 28 }}>Kompaniya ochish</h1>
        <p>Kompaniyangiz ma’lumotlarini kiriting va Savdochi bilan tanishing.</p>

        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="company">Kompaniya nomi</label>
            <input className="form-input" id="company" name="company" value={form.company} onChange={update} required placeholder="Masalan, Tech Supply" />
          </div>

          <div className="form-group">
            <label htmlFor="owner">Mas’ul shaxs</label>
            <input className="form-input" id="owner" name="owner" value={form.owner} onChange={update} required placeholder="Ism va familiya" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Korporativ email</label>
            <input className="form-input" id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="company@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon raqami</label>
            <input className="form-input" id="phone" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+998 90 123 45 67" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Parol</label>
            <input className="form-input" id="password" name="password" type="password" value={form.password} onChange={update} required minLength={8} placeholder="Kamida 8 ta belgi" />
          </div>

          {message && <div className="form-message" role="status">{message}</div>}

          <button className="btn btn-primary" type="submit">Kompaniyani ro‘yxatdan o‘tkazish</button>
        </form>

        <div className="form-footer">
          Hisobingiz bormi? <Link href="/login">Kirish</Link>
        </div>
        <p className="muted" style={{ fontSize: 11, marginTop: 20 }}>
          Demo versiya: bu hali xavfsiz, haqiqiy autentifikatsiya emas. Ishlab chiqarish uchun backend zarur.
        </p>
      </div>
    </main>
  );
}