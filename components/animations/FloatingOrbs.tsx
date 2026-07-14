'use client';

import { motion } from 'framer-motion';

const orbs = [
  {
    size: 'w-72 h-72',
    color: 'bg-primary-300/30',
    position: 'top-10 -right-20',
    duration: 18,
    delay: 0,
  },
  {
    size: 'w-96 h-96',
    color: 'bg-accent-300/25',
    position: 'bottom-20 -left-32',
    duration: 22,
    delay: 2,
  },
  {
    size: 'w-64 h-64',
    color: 'bg-primary-400/20',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    duration: 26,
    delay: 4,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl`}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
