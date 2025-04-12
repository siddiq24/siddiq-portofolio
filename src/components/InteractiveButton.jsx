import {useRef, useState} from 'react'
import {motion} from 'framer-motion'

const CYCLE_PER_LETTER = 2;
const SUFFLE_TIME = 50;
const CHARS = '!@#$%&():{}|<>?/;[]=-+';

// eslint-disable-next-line react/prop-types
export default function InteractiveButton({ text }) {
  return (
    <div className='justify-center items-center flex lg:w-36 w-full'>
        <CustomButton text={text} />
    </div>
)}

// eslint-disable-next-line react/prop-types
const CustomButton = ({text}) => {
    const intervalRef = useRef(null);
    const [displayText, setDisplayText] = useState(text);

    const scramble = () => {
        let pos=0;
        intervalRef.current = setInterval(() => {
            // eslint-disable-next-line react/prop-types
            const scrambled = text.split('').map((char,index) => {
                if (pos/CYCLE_PER_LETTER > index) {
                    return char;
                }
                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];
                return randomChar;
            }).join('');
            setDisplayText(scrambled);
            pos++;
            if(pos >= text.length * CYCLE_PER_LETTER) {
                stopScramble();
            }
        }, SUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setDisplayText(text);
    };

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className='w-full p-2 text-lg font-bold text-black rounded-lg bg-gradient-to-r from-[rgba(51,255,0,0.9)] to-[rgba(0,38,255,0.62)] relative group'
        >  
            <span className='absolute inset-0 w-full bg-yellow-300 rounded-lg transform scale-x-0 
            transition-transform duration-200 hover:scale-x-100 origin-left ease-out group-hover:scale-100'></span>
            <span className='relative z-10 '>
                {displayText}
            </span>
        </motion.button>
    );
};