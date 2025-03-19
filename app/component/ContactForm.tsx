"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import Image from "next/image";
import Mail from "../../public/icon/mail.svg";
import WhatsUp from "../../public/icon/whatsUp.svg";
import Linkdin from "../../public/icon/linkdin.svg";
import Arrow from "../../public/icon/arrow.svg";
import styles from './ContactForm.module.scss';
import Link from 'next/link';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form data
            console.log('Form data submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear the error for the field being edited
        if (errors[name]) {
            setErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleCloseErrorBox = () => {
        setErrors({}); // Clear all errors
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactContainerContent}>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.fieldContainer}>
                        <div className={`${styles.formGroup} w-[48%]`}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                                className={`${errors.name ? styles.errorInput : ''} placeholder-[rgba(255, 255, 255, 0.5)]`}
                            />
                        </div>
                        <div className={`${styles.formGroup} w-[48%]`}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='support@envobyte.com'
                                className={`${errors.email ? styles.errorInput : ''} placeholder-[rgba(255, 255, 255, 0.5)]`}
                            />
                        </div>
                    </div>
                    <div className={styles.fieldContainer}>
                        <div className={`${styles.formGroup} w-[48%]`}>
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='+1 (667) 777 2477'
                                className={`${errors.phone ? styles.errorInput : ''} placeholder-[rgba(255, 255, 255, 0.5)]`}
                            />
                        </div>
                        <div className={`${styles.formGroup} w-[48%]`}>
                            <label>Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder='Envobyte'
                                className={`${errors.company ? styles.errorInput : ''} placeholder-[rgba(255, 255, 255, 0.5)]`}
                            />
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            placeholder='Type your message here...'
                            onChange={handleChange}
                            className={`${errors.message ? styles.errorInput : ''} placeholder-[rgba(255, 255, 255, 0.5)]`}
                        />
                    </div>

                    {/* Display all errors in a single box */}
                    {Object.keys(errors).length > 0 && (
                        <div className={styles.errorBox}>
                            <div className={styles.errorMessages}>
                                {Object.values(errors).map((error, index) => (
                                    <span key={index}>{error}</span>
                                ))}
                            </div>
                            <button type="button" onClick={handleCloseErrorBox} className={styles.closeButton}>
                                &times;
                            </button>
                        </div>
                    )}

                    <button type="submit" className={styles.submitButton}>
                        Send message<Image src={Arrow} alt=" Send message" width={12} />
                    </button>
                </form>
                <div className={styles.rightAsside}>
                    <h2 className={styles.title}>Let us know what  you think!</h2>
                    <p className={styles.shortDesc}>
                        Got something on your mind? Share it with us! Drop a
                        message, and we’ll respond quickly to assist you
                    </p>

                    <div>
                        <div className={styles.socialLink}>
                            <Image src={Mail} alt="" width={40} />
                            <div className={styles.socialContent}>
                                <span>Business:</span>
                                <Link href="#">support@envobyte.com</Link>
                            </div>
                        </div>
                        <div className={styles.socialLink}>
                            <Image src={WhatsUp} alt="" width={40} />
                            <div className={styles.socialContent}>
                                <span>Whatsapp:</span>
                                <Link href="#">+1 (667) 777 2477</Link>
                            </div>
                        </div>
                        <div className={styles.socialLink}>
                            <Image src={Linkdin} alt="" width={40} />
                            <div className={styles.socialContent}>
                                <span>Linkiedin:</span>
                                <Link href="#">www.linkedin.com/company/envobyte</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
}