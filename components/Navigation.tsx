import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/freebie', label: 'Freebie' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand/40 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl text-ink">
          Wooden Button Knits
        </Link>
        <ul className="flex items-center gap-5 text-sm text-ink/80">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-moss">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
