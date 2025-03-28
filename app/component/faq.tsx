"use client";

import React, { useState } from "react";
import Image from "next/image";
import Plus from "../../public/icon/Plus.svg";
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
        question: "What Technologies​ Do You Use For Web Development?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
    {
        id: 3,
        question: "What​ If​ I Need Ongoing Support﻿ After The Website​ Is Launched?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
    {
        id: 4,
        question: "Can​ I Customize​ My Website According​ To​ My Business Needs?",
        answer:
            "We use modern technologies such​ as WordPress, HTML5, CSS3, JavaScript, PHP, and MySQL​ to ensure your website​ is scalable, secure, and responsive.",
    },
    {
        id: 5,
        question: "Do You﻿ Offer Seo Services​ As Part​ Оf Your Web Development?",
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
        <section className={`${styles.faqContainerWrapper} bg-white`}>
            <div className={styles.faqContainer}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
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
                                <h3>
                                    <span>0{faq.id}</span>
                                    {faq.question}
                                    <Image className={styles.collapsible} src={Plus} alt="Collapsible" />
                                </h3>
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
        </section>

    );
};

export default FAQPage;
