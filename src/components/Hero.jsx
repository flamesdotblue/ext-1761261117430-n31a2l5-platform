import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onShopClick }) {
  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] bg-purple-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/60 to-purple-900"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl px-6 text-center"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-white">
            Enchant Your World with Arcana Potions
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-emerald-200">
            Discover love, healing, and power in every shimmering vial. Crafted with care, bottled with magic.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onShopClick}
              className="px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              aria-label="Shop potion categories"
            >
              Shop Potions
            </button>
            <a
              href="#testimonials"
              className="px-6 py-3 rounded-md bg-purple-800 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              See Testimonials
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
