import {motion} from 'framer-motion';
import {variants} from './data/config';
import InteractiveButton from './InteractiveButton';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import SocialButtons from './SocialButtons';

const HeroSection = () => {
    const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, delay = 1000 }) => {
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
      
        useEffect(() => {
          let timeout;
          const currentText = texts[index];
      
          if (!isDeleting) {
            // Efek mengetik
            if (displayedText.length < currentText.length) {
              timeout = setTimeout(() => {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
              }, speed);
            } else {
              // Tunggu sebelum menghapus
              timeout = setTimeout(() => setIsDeleting(true), delay);
            }
          } else {
            // Efek menghapus
            if (displayedText.length > 0) {
              timeout = setTimeout(() => {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
              }, eraseSpeed);
            } else {
              // Pindah ke teks berikutnya
              setIsDeleting(false);
              setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
          }
      
          return () => clearTimeout(timeout);
        }, [displayedText, isDeleting, index, texts, speed, eraseSpeed, delay]);
        TypingEffect.propTypes = {
            texts: PropTypes.arrayOf(PropTypes.string).isRequired,
            speed: PropTypes.number,
            eraseSpeed: PropTypes.number,
            delay: PropTypes.number,
        };
        
        return (
          <p className="text-3xl text-transparent md:text-5xl lg:text-6xl">
            {displayedText}
            <span className="animate-blink text-white transform">|</span>
          </p>
        );
      };

return (
    <div className='relative w-full'>
        <section>
            <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] left-10 top-0  md:block
            '></header>
            <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] right-10 bottom-10  md:block
            '></header>
            <section className='w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative'>
                <article className='flex flex-col lg:flex-row pt-15 lg:pt-29 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
                  <section className=' lg:py-6 flex lg:w-max w-full justify-center items-center'>
                    <SocialButtons/>
                    <section className=' md:ml-12 w-full'>
                        <header className='text-center lg:text-left'>
                            <h1 className='pt-4 text-white font-bold md:text-5xl lg:text-6xl'>
                                {"Hi, I'm "} <br/>
                                <span className='flex justify-center lg:justify-start bg-clip-text bg-gradient-to-br from-yellow-300 to-blue-500'>
                                <TypingEffect texts={["SIDIK WISNU", "SASMITO"]} />
                                </span>
                            </h1>
                        </header>
                        <p className='text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl mb-10 lg:mb-0'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, iusto? Dolorem quam nisi commodi neque explicabo ratione maiores soluta voluptatem quo, perspiciatis omnis voluptatibus quas, velit blanditiis consequuntur? Rerum, laudantium.
                        </p>
                        <section className='lg:flex gap-8 p-4 justify-around'>
                            <figure className='flex items-center justify-center'>
                                <InteractiveButton text='Hire Me'/>                                
                            </figure>
                                <motion.button
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center hover:backdrop-blur-xs duration-100 hover:bg-[rgba(115,115,160,0.1)] justify-center w-full border border-yellow-300 text-yellow-300 text-xl sm:px-4 py-2 rounded-3xl my-5'
                                >
                                    <svg viewBox='0 0 24 24' width={40} height={40}>
                                        <motion.path
                                            d='M12 16l-6-6h4V4h4v6h4l-6 6z'
                                            fill='#FFc107'
                                            strokeWidth={0.5}
                                            variants={variants}
                                            initial='initial'
                                            animate='animate'
                                        />
                                        <motion.path
                                            d='M5 18h14v2H5z'
                                            fill='#FFc107'
                                            strokeWidth={0.5}
                                            variants={variants}
                                            initial='initial'
                                            animate='animate'
                                        />
                                    </svg>
                                    <span>Download Resume</span>
                                </motion.button>
                        </section>
                    </section>
                  </section>
                  
                  <figure className='justify-center items-center flex lg:flex-1 my-8 lg:pt-20 '>
                    <motion.div
                    className=' w-[300px] h-[300px] flex justify-center items-center p-3 rounded-full overflow-hidden relative'
                    animate={{
                      backgroundColor:['#ffc107', '#ff7556', '#ff6667'],
                      scale: [1, 1.1, 1],
                      rotate: [1, 5,5, 1],
                    }}
                    transition={{
                      duration:2,
                      ease:'easeInOut',
                      repeat:Infinity,
                      repeatType:'reverse',
                    }}
                    >
                      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60 h-full w-full'/>
                      <img src="/heroPic.jpg" alt="Hero Pic"
                        className='relative z-10 rounded-full w-full h-full object-cover object-top shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110' />
                    </motion.div>
                  </figure>

                </article>
            </section>
        </section>
    </div>
)
}

export default HeroSection