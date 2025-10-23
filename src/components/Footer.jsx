import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className="bg-purple-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl text-white">Arcana Potions</h3>
            <p className="mt-2 text-emerald-200">
              Handcrafted magical potions for love, healing, and power. Ethically sourced, enchantingly bottled.
            </p>
            <address className="mt-4 not-italic text-emerald-200">
              777 Mystic Way, Moonrise Harbor, Etheria
              <br />
              support@arcanapotions.com
              <br />
              +1 (555) 888-0133
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="font-serif text-2xl text-white">Follow Us</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  className="text-emerald-300 hover:text-emerald-200 underline focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                  href="https://twitter.com" target="_blank" rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-300 hover:text-emerald-200 underline focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                  href="https://instagram.com" target="_blank" rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-300 hover:text-emerald-200 underline focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                  href="https://facebook.com" target="_blank" rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-2xl text-white">Join Our Newsletter</h3>
            <p className="mt-2 text-emerald-200">
              Be the first to receive exclusive offers, new potion releases, and magical tips.
            </p>
            <form
              className="mt-4 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
              aria-label="Newsletter signup"
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@realm.com"
                className="flex-1 rounded-md border border-purple-700 bg-purple-800/50 px-4 py-2 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-required="true"
              />
              <button
                type="submit"
                className="rounded-md bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-emerald-300 text-sm">We respect your privacy. Unsubscribe anytime.</p>
          </motion.div>
        </div>

        <div className="mt-10 border-t border-purple-800 pt-6 text-emerald-300 text-sm flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © {new Date().getFullYear()} Arcana Potions. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Back to top</a>
            <a href="#categories" className="hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Shop</a>
            <a href="#testimonials" className="hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded">Reviews</a>
          </div>
        </div>
      </div>
    </div>
  );
}
