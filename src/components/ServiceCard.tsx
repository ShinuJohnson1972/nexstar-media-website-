import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="p-8">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 360 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl text-primary">{service.icon.charAt(0)}</span>
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold mb-4"
          animate={{
            color: isHovered ? "#6366F1" : "#1F2937"
          }}
        >
          {service.title}
        </motion.h3>

        <p className="text-gray-600 mb-6">{service.description}</p>

        <ul className="space-y-3 mb-6">
          {service.benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.span 
                className="text-primary mr-2 text-xl"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              >
                •
              </motion.span>
              {benefit}
            </motion.li>
          ))}
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-primary font-medium group"
        >
          <span className="relative">
            Learn More
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <motion.svg
            className="w-4 h-4 ml-2"
            animate={{
              x: isHovered ? 5 : 0
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </div>

      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}