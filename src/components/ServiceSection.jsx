// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import CustomTitle from './CustomTitle';
import { services } from './data/config'

export default function ServiceSection() {
    return (
        <section className='relative pt-0 border border-white/0 pb-10 snap-start' id='services'>
            <CustomTitle title='What I Offer?' />
            <section className='relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 '>
                <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] left-10 top-0  md:block
                '></header>
                <header className='absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-800 to-amber-200 opacity-20 blur-[100px] right-10 bottom-10  md:block
                '></header>

            {services.map((item, index) => (
                <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-full h-[350px] p-5 grid place-items-center overflow-hidden rounded-[20px] shadow-lg"
                >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                    style={{
                        background:
                        "conic-gradient(#ff007f, #ffcc00, #00ffcc, #007fff, #ff007f)",
                        width: "200%",
                        height: "200%",
                        position: "absolute",
                        top: "-50%",
                        left: "-50%",
                    }}
                    ></motion.div>
                </div>
                <section className="absolute w-[95%] h-[95%] bg-black rounded-[20px] z-10 text-center text-white border-transparent">
                    <header className=" bg-[#ffffff29] rounded-xl p-3 mb-6 min-h-full min-w-full flex items-center">
                    <section className="mt-4 space-y-4 px-2">
                        <h2 className="border-white uppercase text-xl md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-blue-800">
                        {item.title}
                        </h2>
                        <p className="md:text-lg text-white opacity-80">{item.description}</p>
                    </section>
                    </header>
                </section>
                </motion.article>
            ))}
            </section>
        </section>
    )
}