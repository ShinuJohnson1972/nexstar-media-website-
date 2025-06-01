import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import AnimatedText from './AnimatedText';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  videoBtnText?: string;
  videoBtnLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  videoBtnText,
  videoBtnLink,
}) => {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
      strength={200}
      className="relative overflow-hidden"
    >
      <div className="relative min-h-screen flex items-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[200px]"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-16"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text={title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            />
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to={ctaLink}>
                <motion.button
                  className="btn bg-white text-primary hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ctaText}
                </motion.button>
              </Link>
              {videoBtnText && videoBtnLink && (
                <a
                  href={videoBtnLink}
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center"
                >
                  <motion.div
                    className="mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <Play size={20} />
                  </motion.div>
                  {videoBtnText}
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;