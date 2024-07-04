import React, { useState } from 'react';
import '../App.css';
import data from "./AccordionData"
import AccordionItem from './AccordionItem';
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) =>
            (prevIndex === index ? null : index));
    };

    return (
        <div className='container'>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.header}
                    answer={item.content}
                    isOpen={activeIndex === index}

                    // isOpen={true}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
};

export default Accordion;
