import { motion } from 'framer-motion';
import { Heart, PlusCircle, Zap, Shield, Lock, CreditCard } from 'lucide-react';

const categories = [
  {
    id: 'love',
    name: 'Love Elixirs',
    description: 'Attract romance and deepen bonds with velvety notes of rose and moonlight.',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    alt: 'A heart symbol representing love potions',
    cta: 'Shop Love',
  },
  {
    id: 'healing',
    name: 'Healing Draughts',
    description: 'Restore vitality with herbal infusions and crystalline energies.',
    icon: PlusCircle,
    color: 'from-emerald-500 to-green-600',
    alt: 'A medical cross symbol representing healing potions',
    cta: 'Shop Healing',
  },
  {
    id: 'power',
    name: 'Power Tonics',
    description: 'Boost courage and focus with thunderous spice and golden sparks.',
    icon: Zap,
    color: 'from-indigo-500 to-violet-600',
    alt: 'A lightning bolt symbol representing power potions',
    cta: 'Shop Power',
  },
];

export default function Categories({ onCheckoutClick }) {
  return (
    <div className="bg-purple-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">Choose Your Alchemy</h2>
          <p className="mt-4 text-emerald-200 max-w-2xl mx-auto">
            Explore our curated categories crafted to meet your heart’s desire, restore balance, and ignite your inner fire.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-xl border border-purple-800 bg-purple-800/40 p-6 focus-within:ring-2 focus-within:ring-emerald-400"
              >
                <div className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br ${cat.color} p-3`} aria-hidden="true">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-serif text-xl sm:text-2xl text-white">{cat.name}</h3>
                <p className="mt-2 text-emerald-200">{cat.description}</p>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    aria-label={`Shop ${cat.name}`}
                  >
                    {cat.cta}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-xl border border-purple-800 bg-purple-800/40 p-6"
          aria-labelledby="trust-title"
        >
          <h3 id="trust-title" className="font-serif text-2xl text-white">Secure Checkout You Can Trust</h3>
          <p className="mt-2 text-emerald-200">
            Your safety is our spellbound promise. Encrypted payments, verified suppliers, and satisfaction guaranteed.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              <span className="text-white">Buyer Protection</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              <span className="text-white">SSL Encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              <span className="text-white">Trusted Payments</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={onCheckoutClick}
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-yellow-500 text-purple-900 font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
