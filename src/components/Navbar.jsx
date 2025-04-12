import { useState, useEffect } from 'react';
import { useAnimate, stagger } from 'framer-motion';

const Path = (props) => (
  <path
    fill='transparent'
    strokeWidth='3'
    stroke='white'
    strokeLinecap='round'
    {...props}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen ? [
      [
        'nav',
        { transform: 'translateX(0%)' },
        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
      ],
      [
        'li',
        { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
        { delay: stagger(0.05), at: '-0.1' }
      ]
    ] : [
      [
        'li',
        { transform: 'scale()0.5', opacity: 0, filter: 'blur(10px)' },
        { delay: stagger(0.05, { from: 'last' }), at: '<' }
      ],
      [
        'nav',
        { transform: 'translateX(-100%)' },
        { at: '-0.1' }
      ]
    ];

    // Animate path and menu
    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.7' : 'M 2 2.5 L 20 2.5' },
        { at: '<' }
      ],
      [
        'path.middle',
        { opacity: isOpen ? 0 : 1 },
        { at: '<' }
      ],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' }
      ],
      ...menuAnimations
    ]);
  }, [isOpen, animate]);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { id: 'services', text: 'What I Offer' },
    { id: 'projects', text: 'My Skill' },
    { id: 'experience', text: 'Education & Experience' },
    { id: 'work', text: 'My Work' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <div className='relative flex justify-between px-12 py-2'>
      <div ref={scope} className='relative flex items-center justify-center '>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='absolute top-4 z-40 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-blue-600 flex items-center justify-center'
          style={{ 
            boxShadow: isOpen ? '0 0 22px rgba(255, 255, 255, 0.8)' : '0 0 22px rgba(138, 43, 226, 1)'
          }}
        >
          <svg width='23' height='18' viewBox='0 0 23 18'>
            <Path
              className='top'
              d='M 2 2.5 L 20 2.5'
            />
            <Path
              className='middle'
              d='M 2 9.423 L 20 9.423'
              opacity='1'
            />
            <Path
              className='bottom'
              d='M 2 16.346 L 20 16.346'
            />
          </svg>
        </button>
        <nav className={`fixed top-0 left-0 h-full w-64 z-30 flex items-center bg-gradient-to-br from-[#b6ff7154] to-[#2d106379] shadow-[#2d106379] backdrop-blur-md transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
        `}>
          <ul className='flex flex-col p-6'>
            {navItems.map((item) => (
              <li key={item.id} className="text-white text-4xl font-bold mt-10">
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='font-bold text-2xl text-white  right-8 my-5 px-8 lg:pr-16 '>
        <div className=''>DEVLOFT</div>
        <div className='text-[16px] transform -translate-y-2 '>PRODUCTION</div>
      </div>
    </div>
  );
}

export default Navbar;