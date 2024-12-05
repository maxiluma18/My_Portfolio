import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ContactInput from './ContactInput';
import ContactTextarea from './ContactTextarea';
import ContactButton from './ContactButton';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };
    const validateFields = () => {
        let valid = true;
        let newErrors = { name: '', email: '', message: '' };
        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio.';
            valid = false;
        } else {
            const nameRegex = /^[A-Za-z\s]+$/;
            if (!nameRegex.test(formData.name)) {
                newErrors.name = 'El nombre solo puede contener letras y espacios.';
                valid = false;
            }
        }
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
            valid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'El formato del correo electrónico es inválido.';
                valid = false;
            }
        }
        if (!formData.message) {
            newErrors.message = 'El mensaje es obligatorio.';
            valid = false;
        } else {
            if (formData.message.length < 10 || formData.message.length > 500) {
                newErrors.message = 'El mensaje debe tener entre 10 y 500 caracteres.';
                valid = false;
            }
        }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) {
            toast.error('Por favor, corrige los errores antes de enviar el formulario.');
            return;
        }
        const response = await fetch(import.meta.env.VITE_FORMSPREE_KEY, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            toast.success('Mensaje enviado con éxito!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
        } else {
            toast.error('Hubo un problema al enviar el mensaje.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <ContactInput
                id="name"
                name="name"
                label="Nombre:"
                value={formData.name}
                onChange={handleChange}
                required
                error={errors.name}
            />
            <ContactInput
                id="email"
                name="email"
                label="Correo Electrónico:"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
            />
            <ContactTextarea
                id="message"
                name="message"
                label="Mensaje:"
                value={formData.message}
                onChange={handleChange}
                required
                error={errors.message}
            />
            <ContactButton />
        </form>
    );
};

export default ContactForm;