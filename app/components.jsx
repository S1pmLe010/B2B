
import Link from "next/link";

const navigation = [
  ["/catalog", "Katalog"],
  ["/suppliers", "Yetkazib beruvchilar"],
  ["/offers", "Takliflar"],
  ["/about", "Biz haqimizda"],
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Savdochi bosh sahifa">
          <span className="logo-mark">S</span>
          Savdochi
        </Link>

        <nav className="nav-links" aria-label="Asosiy navigatsiya">
          {navigation.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <span className="location-pill">
            <span>⌖</span>
            Toshkent
            <span>→</span>
          </span>

          <Link href="/catalog" className="icon-btn" aria-label="Katalog">
            🛒
          </Link>

          <Link href="/login" className="icon-btn" aria-label="Profil">
            ♙
          </Link>

          <Link href="/login" className="btn btn-primary">
            Kirish
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">S</span>
          Savdochi
        </Link>

        <span>© {new Date().getFullYear()} Savdochi. Barcha huquqlar himoyalangan.</span>

        <div className="footer-links">
          <Link href="/catalog">Katalog</Link>
          <Link href="/suppliers">Kompaniyalar</Link>
          <Link href="/about">Biz haqimizda</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export function SectionTitle({ title, description }) {
  return (
    <div className="page-heading">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
