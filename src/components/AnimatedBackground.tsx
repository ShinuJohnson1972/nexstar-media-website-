import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Parallax } from 'react-parallax';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), {
    stiffness: 100,
    damping: 30
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Parallax Background Images */}
      <Parallax
        blur={0}
        bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        strength={200}
        className="absolute inset-0 -z-20"
      >
        <div className="h-screen" />
      </Parallax>

      {/* Animated Gradient Overlay */}
      <motion.div
        ref={containerRef}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Interactive Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
          style={{ y, opacity }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-3xl"
          style={{ y: useTransform(y, v => v * 1.2), opacity }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 180, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl"
          style={{ y: useTransform(y, v => v * 0.8), opacity }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [180, 270, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated Grid with Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px),
              linear-gradient(to right bottom, rgba(99,102,241,0.1), rgba(16,185,129,0.1))
            `,
            backgroundSize: '72px 72px, 72px 72px, 100% 100%'
          }}
        />

        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
          }}
        />
      </motion.div>
    </>
  );
};

export default AnimatedBackground;