import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

import CodeCards from '@/components/header/cards';

import CopyPasteUI from '@/app/components/showcase';
import Scrollxdark from '@/svg/Scrollxdark.svg';
import Scrollxx from '@/svg/Scrollxx.svg';

import { ThemeContext } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [theme]);

  return (
    <section>
      <div
        key={key}
        className={`relative flex flex-col items-center justify-start h-screen w-full pt-10 transition-colors duration-500 overflow-hidden ${
          theme === 'dark'
            ? 'bg-neutral-900 text-neutral-50'
            : 'bg-neutral-50 text-neutral-900'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='absolute right-1 top-[25%] sm:top-[45%] md:top-[15%] w-full sm:w-1/2 h-auto z-10 flex flex-col sm:flex-row items-center justify-center'
        >
          <CodeCards />
        </motion.div>

        {/* Responsive Squares */}
        <motion.div
          initial={{ x: '30%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'anticipate' }}
          className='hidden lg:flex absolute bottom-[10rem] left-[10%] flex-row gap-8 z-15'
        >
          <motion.div className='w-48 h-48 bg-[#ff87b2] rounded-2xl lg:block md:hidden'></motion.div>
          <motion.div className='w-48 h-48 bg-[#ff9346] rounded-2xl lg:block sm:hidden'></motion.div>
          <motion.div className='w-48 h-48 bg-[#7cff67] rounded-2xl lg:block'></motion.div>
        </motion.div>

        {/* SVG Animation */}
        <motion.div
          initial={{ y: '50%', opacity: 0, scale: 0.8 }}
          animate={{ y: '0%', opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
          className='relative w-[92%] max-w-7xl h-auto z-20 mt-20'
        >
          {theme === 'dark' ? <Scrollxx /> : <Scrollxdark />}
        </motion.div>

        {/* Description & Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
          className='absolute bottom-10 left-10 lg:flex flex-col items-start text-left hidden'
        >
          <p className='text-lg max-w-sm'>
            Explore the prebuilt best components and UI elements for Advanced
            users.
          </p>
          <button className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg'>
            Github
          </button>
        </motion.div>

        {/* For smaller screens - Description Below SVG */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
          className='lg:hidden flex flex-col items-center text-center mt-10'
        >
          <p className='text-lg  max-w-sm'>
            Explore the prebuilt best components and UI elements for Advanced
            Coders.
          </p>
          <button className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg'>
            Github
          </button>
        </motion.div>
      </div>
      <CopyPasteUI />
    </section>
  );
};

export default Home;
