import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // 'idle', 'submitting', 'success', 'error'
  const [status, setStatus] = useState('idle'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // This is the endpoint on your backend server we will create later
    const response = await fetch('https://stacknstones-prototype.onrender.com/api/send-message', {
    method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', phone: '', message: '' }); 
    } catch (error) {
      console.error('There was an error sending the message:', error);
      setStatus('error');
    }
  };

  return (
    <div id = "contact-form" className={styles.contactSection}>
      <motion.div 
        className={styles.contactContainer}
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
        <motion.p variants={itemVariants} className={styles.subtitle}>
          Have a project in mind? Let's talk about it.
        </motion.p>
        <form onSubmit={handleSubmit}>
          <motion.div variants={itemVariants} className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className={styles.formGroup}>
            <label htmlFor="phone">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </motion.div>
          <motion.div variants={itemVariants} className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
          <motion.button 
            variants={itemVariants} 
            type="submit" 
            className={styles.submitButton}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </motion.button>
          
          {status === 'success' && <p className={styles.successMessage}>Message sent successfully! We'll be in touch soon.</p>}
          {status === 'error' && <p className={styles.errorMessage}>Something went wrong. Please try again later.</p>}
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;