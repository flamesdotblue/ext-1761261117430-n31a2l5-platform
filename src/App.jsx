import { useCallback } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 text-white font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-emerald-700 focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-purple-900/60 bg-purple-900/80 border-b border-purple-800">
        <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            className="text-xl font-serif tracking-wide hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
            onClick={() => scrollToId('hero')}
            aria-label="Go to hero section"
          >
            Arcana Potions
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToId('categories')}
              className="px-3 py-2 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Browse potion categories"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToId('testimonials')}
              className="px-3 py-2 rounded hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Read testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label="Go to contact and newsletter"
            >
              Contact
            </button>
          </div>
        </nav>
      </header>

      <main id="main" className="pt-16">
        <section id="hero" aria-label="Hero">
          <Hero onShopClick={() => scrollToId('categories')} />
        </section>
        <section id="categories" aria-label="Potion Categories" className="scroll-mt-16">
          <Categories onCheckoutClick={() => scrollToId('contact')} />
        </section>
        <section id="testimonials" aria-label="Customer Testimonials" className="scroll-mt-16">
          <Testimonials />
        </section>
      </main>

      <footer id="contact" aria-label="Footer" className="scroll-mt-16">
        <Footer />
      </footer>
    </div>
  );
}
