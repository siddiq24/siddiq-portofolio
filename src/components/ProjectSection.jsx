import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { projects } from "./data/config";
import CostumTitle from "./CustomTitle";

const Card = memo(({ id, title, description, imageUrl, className, onClick, isLarge, layoutId }) => (
    <motion.div
        layout
        layoutId={layoutId}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        whileHover={{ scale: isLarge ? 1.01 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
      cursor-pointer 
      ${isLarge ? "bg-white/90 shadow-xl p-2" : "bg-white/70 shadow-md p-1 sm:p-6"} 
      backdrop-blur-md rounded-2xl flex flex-col gap-4 ${className}`}
    >
        <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className={`rounded-xl w-full object-cover ${isLarge ? "h-80" : "h-32"}`}
        />
        <h3 className={`font-bold ${isLarge ? "text-2xl" : "text-lg hidden sm:block"}`}>{title}</h3>
        <p className={`text-gray-600 ${isLarge ? "" : "hidden"}`}>{description}</p>
    </motion.div>
));

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    isLarge: PropTypes.bool,
    layoutId: PropTypes.string.isRequired,
};

Card.defaultProps = {
    className: "",
    onClick: () => { },
    isLarge: false,
    layoutId: "",
};

export default function ProjectSection() {
    const [cards, setCards] = useState(projects);
    const [userClicked, setUserClicked] = useState(false);

    useEffect(() => {
        if (userClicked) return;

        const interval = setInterval(() => {
            setCards((prev) => {
                const newOrder = [...prev.slice(1), prev[0]];
                return newOrder;
            });
        }, 8000);

        return () => clearInterval(interval);
    }, [userClicked]);

    const handleCardClick = (clickedId) => {
        setUserClicked(true);
        setCards((prev) => {
            const clickedCard = prev.find((c) => c.id === clickedId);
            const rest = prev.filter((c) => c.id !== clickedId);
            return [clickedCard, ...rest];
        });
    };

    return (
        <>
            <CostumTitle title="My Project Completed" />
            <div className="grid grid-cols-6 grid-rows-5 sm:grid-rows-2 gap-4 mt-12 h-[80vh] p-8 bg-transparent">
                <Card
                    key={cards[0].id}
                    id={cards[0].id}
                    title={cards[0].title}
                    description={cards[0].description}
                    imageUrl={cards[0].imageUrl}
                    layoutId={`card-${cards[0].id}`}
                    className="sm:col-span-4 sm:row-span-2 row-span-4 col-span-6"
                    isLarge
                />

                <Card
                    key={cards[1].id}
                    id={cards[1].id}
                    title={cards[1].title}
                    description={cards[1].description}
                    imageUrl={cards[1].imageUrl}
                    layoutId={`card-${cards[1].id}`}
                    onClick={() => handleCardClick(cards[1].id)}
                    className="col-span-1 row-span-1 col-start-2 row-start-5 sm:col-start-5 sm:row-start-1"
                />
                <Card
                    key={cards[2].id}
                    id={cards[2].id}
                    title={cards[2].title}
                    description={cards[2].description}
                    imageUrl={cards[2].imageUrl}
                    layoutId={`card-${cards[2].id}`}
                    onClick={() => handleCardClick(cards[2].id)}
                    className="col-span-1 row-span-1 col-start-3 row-start-5 sm:col-start-6 sm:row-start-1"
                />
                <Card
                    key={cards[4].id}
                    id={cards[4].id}
                    title={cards[4].title}
                    description={cards[4].description}
                    imageUrl={cards[4].imageUrl}
                    layoutId={`card-${cards[4].id}`}
                    onClick={() => handleCardClick(cards[4].id)}
                    className="col-span-1 row-span-1 col-start-5 row-start-5 sm:col-start-5 sm:row-start-2"
                />
                <Card
                    key={cards[3].id}
                    id={cards[3].id}
                    title={cards[3].title}
                    description={cards[3].description}
                    imageUrl={cards[3].imageUrl}
                    layoutId={`card-${cards[3].id}`}
                    onClick={() => handleCardClick(cards[3].id)}
                    className="col-span-1 row-span-1 sm:col-start-6 sm:row-start-2 col-start-4 row-start-5"
                />
            </div>
        </>
    );
}
