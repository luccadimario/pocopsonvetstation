'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function TrainAnimation() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated Train */}
      <motion.div
        className="relative z-10"
        initial={{ x: '-100%', left: 0 }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 2,
          ease: 'linear',
        }}
      >
        <Image
          src="/images/placeholders/train.gif"
          alt="Train animation"
          width={400}
          height={300}
          className="object-contain drop-shadow-2xl"
          unoptimized // GIFs need unoptimized to animate
        />
      </motion.div>
    </div>
  );
}
