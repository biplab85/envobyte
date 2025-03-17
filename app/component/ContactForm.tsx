"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import Image from "next/image";
import Star from "../../public/icon/star.svg";
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
        <>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? styles.errorInput : ''}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? styles.errorInput : ''}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? styles.errorInput : ''}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? styles.errorInput : ''}
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
                    Send message
                </button>
            </form>
            <div>
                <h2>Let us know what  you think!</h2>
                <p>
                    Got something on your mind? Share it with us! Drop a
                    message, and we’ll respond quickly to assist you
                </p>

                <div>
                    <div>
                        <Image src={Star} alt="Logo" width={40} />
                        <div>
                            <span>Business:</span>
                            <Link href="#">support@envobyte.com</Link>
                        </div>
                        <div>
                            <span>Whatsapp:</span>
                            <Link href="#">+1 (667) 777 2477</Link>
                        </div>
                        <div>
                            <span>Linkiedin:</span>
                            <Link href="#">www.linkedin.com/company/envobyte</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}