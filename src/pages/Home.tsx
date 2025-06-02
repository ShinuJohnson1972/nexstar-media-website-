import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import NewsCard from '../components/NewsCard';
import ServiceCard from '../components/ServiceCard';
import ClientCard from '../components/ClientCard';
import AnimatedCounter from '../components/AnimatedCounter';
import PerformanceChart from '../components/PerformanceChart';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedCurveBackground from '../components/AnimatedCurveBackground';
import { fetchNews } from '../utils/newsApi';
import { services } from '../data/services';
import { NewsArticle, Client } from '../utils/types';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetchNews({ pageSize: 4, sortBy: 'publishedAt' });
        setLatestNews(response.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, []);

  // Sample clients data
  const clients: Client[] = [
    {
      id: 1,
      name: 'ABC Corporation',
      logo: 'https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Retail',
      description: 'Leading national retail chain with over 500 locations across the United States.',
    },
    {
      id: 2,
      name: 'TechFuture Inc.',
      logo: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Technology',
      description: 'Innovative technology company specializing in AI and machine learning solutions.',
    },
    {
      id: 3,
      name: 'Global Finance Group',
      logo: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Finance',
      description: 'International financial services provider with expertise in investment banking and wealth management.',
    },
    {
      id: 4,
      name: 'HealthPlus',
      logo: 'https://images.pexels.com/photos/4021803/pexels-photo-4021803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      industry: 'Healthcare',
      description: 'Leading healthcare network providing quality medical services across multiple states.',
    },
  ];

  return (
    <div className="relative">
      <AnimatedCurveBackground />
      
      <Hero
        title="Leading Media Solutions for the Digital Age"
        subtitle="Nexstar Media Group delivers innovative broadcast, digital, and content solutions for businesses of all sizes."
        ctaText="Get Started"
        ctaLink="/contact"
        videoBtnText="Watch Video"
        videoBtnLink="#"
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div 
          className="container"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={fadeInUp} className="p-6">
              <AnimatedCounter end={200} suffix="+" />
              <p className="text-gray-600">TV Stations</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <AnimatedCounter end={100} suffix="M+" />
              <p className="text-gray-600">Viewers Reached</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <AnimatedCounter end={6} prefix="$" suffix="B+" />
              <p className="text-gray-600">Annual Revenue</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <AnimatedCounter end={25} suffix="+" />
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections... */}
      {/* Note: Content truncated for brevity - the rest of the Home component remains unchanged */}
    </div>
  );
};

export default Home;