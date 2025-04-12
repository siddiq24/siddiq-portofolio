import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import CostumTitle from './CustomTitle';
import { experience, education } from './data/config';

const SectionItem = ({ title, subtitle, description, year, detail, icon }) => {
  return (
    <motion.article
      className='relative flex flex-col items-center justify-center w-full p-6 border rounded-lg shadow-lg bg-[#ffffff29] border-amber-300 transition-transform duration-300'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-16 h-16 p-2 bg-light dark:bg-dark rounded-full shadow-md flex items-center justify-center'>
        <img src={icon} alt={title} className='w-full h-full object-contain' />
      </div>
      <h3 className='mt-4 text-xl font-bold text-white text-center'>{title}</h3>
      <p className='text-sm font-semibold text-white/70 text-center'>{subtitle}</p>
      <p className='text-sm text-white/70 text-center'>{description}</p>
      <p className='text-sm text-white/70 text-center'>{year}</p>
      <p className='text-sm text-white/70 text-center'>{detail}</p>
    </motion.article>
  );
};

const EducationAndExperience = () => {
  return (
    <>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] left-10 top-0  md:block
            '></header>
      <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] right-10 bottom-10  md:block
            '></header>
      <div className=' bg-light dark:bg-dark'>
        <CostumTitle title="Education & Experience" />
        <div className=' pt-20 px-8 pb-8'>
          <div className='grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3'>
            {education.map((item) => (
              <SectionItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                year={item.year}
                detail={item.detail}
                icon={item.icon}
              />
            ))}
          </div>
          <div className='mt-15 grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3'>
            {experience.map((item) => (
              <SectionItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                year={item.year}
                detail={item.detail}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

SectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  year: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default EducationAndExperience;