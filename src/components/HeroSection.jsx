import {motion} from 'framer-motion';
import {variants} from './data/config';
import InteractiveButton from './InteractiveButton';
import PropTypes from 'prop-types';
import SocialButtons from './SocialButtons';
import { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { Number } from './data/config';

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

          const [isVisible, setIsVisible] = useState(false);
          const sectionRef = useRef(null);
      
          useEffect(() => {
              const observer = new IntersectionObserver(
                  (entries) => {
                      entries.forEach(entry => {
                          if (entry.isIntersecting) {
                              setIsVisible(true);
                              observer.disconnect();
                          }
                      });
                  },
                  { threshold: 0.1 }
              );
      
              const currentSectionRef = sectionRef.current;
      
              if (currentSectionRef) {
                  observer.observe(currentSectionRef);
              }
      
              return () => {
                  if (currentSectionRef) {
                      observer.unobserve(currentSectionRef);
                  }
              };
          }, []);

return (
  <div className='relative w-full'>
    <section className="w-full min-h-screen text-white px-4 snap-start"
    id="home">
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
              I&apos;m a passionate Frontend Developer with a knack for creating stunning and user-friendly web applications. I love turning ideas into reality through code and design.
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
            <section className='mx-auto w-full relative text-white flex justify-center mt-20'>
                <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] left-10 top-0  md:block
                '></header>
                <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] right-10 bottom-10  md:block
                '></header>
    
                <motion.section
                ref={sectionRef}
                initial={{ opacity: 0,y:50 }}
                whileInView={{ opacity: 1,y:0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                viewport={{once:true, amount:0.5}}
                className='relative z-1 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl border-amber-300 bg-[#ffffff29] shadow-lg md:divide-x divide-amber-300 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12'
                >
                    {Number.map((item) => (
                        <article key={item.id} className='text-center'>
                            <header>
                                <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl'>
                                    +{isVisible &&(
                                        <CountUp
                                        start={0}
                                        end={item.number}
                                        duration={3}
                                        separator=','
                                        />
                                    )}
                                </h2>
                            </header>
                            <p className='text-lg mt-2'>{item.title}</p>
                        </article>
                    ))}
                </motion.section>
            </section>
      </section>
  </div>
)
}

export default HeroSection