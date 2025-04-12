import { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Number } from './data/config';
// Removed unused import

export default function NumberSection(){
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
        <section className='mx-auto w-full relative text-white mt-10 flex justify-center'>
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
    )
}