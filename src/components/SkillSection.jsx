import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import CustomTitle from './CustomTitle';
import { skills } from './data/config';

const SkillCircle = ({ skill, percentage, icon }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center gap-1'
    >
      <div className='relative'>
        <svg width={120} height={120} className='rotate-[-90deg]'>
          <circle
            cx={60}
            cy={60}
            r={radius}
            fill='transparent'
            stroke='#ffffff29'
            strokeWidth={10}
          />
          <motion.circle
            cx={60}
            cy={60}
            r={radius}
            fill='transparent'
            stroke='#ffc107'
            strokeWidth={10}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
        </svg>
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          <img src={icon} alt={skill} className={`w-10 h-10 mb-1 ${skill === 'Three.js' ? 'invert brightness-200' : ''}`} />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-sm font-semibold'
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <span className='text-lg font-semibold'>{skill}</span>
    </motion.article>
  );
};

const SkillSection = () => {
  return (
    <section className='relative snap-start' id='skills'>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] left-10 top-0 md:block'></header>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] right-10 bottom-10 md:block'></header>
      <CustomTitle title='My Skills' />
      <section className='w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative'>
        <article className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-white py-15 lg:py-29 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
          {skills.map((skill) => (
            <SkillCircle
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          ))}
        </article>
      </section>
    </section>
  );
};

SkillCircle.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillSection;
