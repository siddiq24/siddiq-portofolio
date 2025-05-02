import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from './data/config';
import CostumTitle from './CustomTitle';

const ProjectSection = () => {
  const [positions, setPositions] = useState(projects.map((_, i) => i));
  const [delay, setDelay] = useState(3000);
  const [intervalId, setIntervalId] = useState(null);

  const handleCardClick = (clickedIndex) => {
    const total = projects.length;
    const newOrder = [];

    for (let i = 0; i < total; i++) {
      newOrder.push((clickedIndex + i) % total);
    }

    setPositions(newOrder);
    setDelay(10000);

    setTimeout(() => {
      setDelay(3000);
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift());
        return newOrder;
      });
    }, delay);

    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <section className="w-full text-white px-4 snap-start" id="project">
      <CostumTitle title="My Imagine Projects" />

      <div className="grid grid-cols-8 grid-rows-6 md:grid-rows-2 gap-4 w-full h-[400px] md:h-[600px] px-4 mt-11 md:mt-0 top-8 md:p-8">
        {positions.map((cardIndex, position) => {
          const card = projects[cardIndex];
          const isMain = position === 0;

          let colClass = "";
          let rowClass = "";

          if (position === 0) {
            colClass = "col-span-8 md:col-span-6 md:col-start-1";
            rowClass = "row-span-4 md:row-span-2 md:row-start-1";
          } else {
            const startCol = 1 + (position - 1) * 2;
            colClass = `col-span-2 col-start-${startCol} md:col-span-1`;
            rowClass = "row-start-5 md:row-span-1";

            if (position === 3) {
              colClass += " md:col-span-1 md:col-start-8";
              rowClass += " md:row-span-1 md:row-start-2";
            } else if (position === 4) {
              colClass += " md:col-span-1 md:col-start-7";
              rowClass += " md:row-span-1 md:row-start-2";
            }
          }

            return (
            <motion.div
              key={cardIndex}
              layout
              layoutId={`card-${cardIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.01, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.5,
              }}
              className={`cursor-pointer backdrop-blur-md bg-white/80 shadow-xl md:p-2 p-1 flex flex-col items-center text-center overflow-hidden relative ${isMain ? "rounded-xl" : "rounded-lg"} ${colClass} ${rowClass}`}
              style={{ zIndex: isMain ? 10 : 1 }}
              onClick={() => handleCardClick(cardIndex)}
            >
              <motion.h3
              layout
              className={`text-black font-semibold ${isMain ? "text-xl md:text-2xl mb-4" : "text-md h-[30%] hidden md:block"}`}
              >
              {card.title}
              </motion.h3>
              <motion.img
              layout
              src={card.imgSrc}
              alt={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
              }}
              className={`max-w-[90%] shadow-xl md:max-h-[80%] mb-4 ${isMain ? "rounded-xl max-h-[80%]" : "rounded-md"}`}
              />
              <motion.p
              layout
              className="text-sm text-gray-600 mt-2 break-words hidden md:block overflow-hidden max-h-20"
              >
              {card.description}
              </motion.p>
            </motion.div>
            );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
