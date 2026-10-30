import "./globals.css";

export const metadata = {
  title: "Savdochi — B2B savdo platformasi",
  description:
    "Kompaniyalar, do‘konlar, mahsulotlar va buyurtmalar uchun yagona platforma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}