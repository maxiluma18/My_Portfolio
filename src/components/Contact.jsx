import React from 'react';
import ContactForm from './ContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contacto</h1>
            <ContactForm />
            <ToastContainer
                position="top-right"
                autoClose={1000}
                closeOnClick
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};