import { motion } from 'framer-motion';
import { socialIcons } from './data/config';

const SocialButtons = () => {
    const animationDuration = 4;
    const variants = {
        initial: { pathLength: 1, strokeOpacity: 1, fillOpacity: 0 },
        animate: {
            pathLength: 1,
            strokeOpacity: 0,
            fillOpacity: 1,
            transition: {
                duration: animationDuration,
                ease: 'easeInOut',
                strokeOpacity: {
                    delay: animationDuration
                },
                fillOpacity: {
                    delay: animationDuration
                }
            }
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };
    return (
        <div className='md:flex ml-10 flex-col items-center border border-amber-300 bg-[#ffffff29] rounded-3xl space-y-11 p-3 max-h-[506px] md:max-h-[386px] hidden '>
            {socialIcons.map((icon) => (
                <button key={icon.id}>
                    <svg viewBox={icon.viewBox} width={40} height={40}>
                        <motion.path
                            d={icon.path}
                            fill='#FFC107'
                            stroke='#FFCE107'
                            strokeWidth={1}
                            variants={variants}
                            initial='initial'
                            animate='animate'
                            whileHover='hover'
                        />
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default SocialButtons;