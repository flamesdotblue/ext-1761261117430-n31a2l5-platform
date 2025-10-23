import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elara Nightbloom',
    role: 'Astromancer',
    quote:
      'The Love Elixir is pure starlight! Subtle, warm, and utterly enchanting. My heart sings.',
    rating: 5,
  },
  {
    name: 'Thorne Ironwood',
    role: 'Guardian of the Grove',
    quote:
      'Healing Draught restored my strength after a long vigil. A gentle tonic with true power.',
    rating: 5,
  },
  {
    name: 'Mira Sunflare',
    role: 'Artificer',
    quote:
      'Power Tonic sharpened my focus and courage for a crucial trial. Brilliant craftsmanship.',
    rating: 4,
  },
];

export default function Testimonials() {
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">What Our Customers Say</h2>
          <p className="mt-4 text-emerald-200 max-w-2xl mx-auto">
            Verified reviews from our enchanted community.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-purple-800 bg-purple-800/40 p-6"
            >
              <figcaption className="flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg text-white">{t.name}</div>
                  <div className="text-sm text-emerald-300">{t.role}</div>
                </div>
                <div className="flex" aria-label={`Rating: ${t.rating} out of 5 stars`} role="img">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < t.rating ? 'text-yellow-400' : 'text-purple-500'}`}
                      aria-hidden="true"
                      fill={i < t.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
              </figcaption>
              <blockquote className="mt-4 text-emerald-200">“{t.quote}”</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
