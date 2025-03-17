"use client";

import React, { useState } from "react";
import styles from './faq.module.scss';

// Define the FAQ data type
interface FAQ {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQ[] = [
    {
        id: 1,
        question: "What Technologies​ Do You Use For Web Development?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
    {
        id: 2,
        question: "Test: What Technologies​ Do You Use For Web Development?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
    {
        id: 3,
        question: "Example: What Technologies​ Do You Use For Web Development?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
];

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0); // By default, the first FAQ is open

    // Toggle the accordion section when clicked
    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(-1); // Close the section if it is already active
        } else {
            setActiveIndex(index); // Open the clicked section
        }
    };

    return (
        <div className={styles.faqContainer}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.accordion}>
                {faqData.map((faq, index) => (
                    <div
                        key={faq.id}
                        className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ""}`}
                    >
                        <div
                            className={styles.accordionHeader}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3>{faq.question}</h3>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
