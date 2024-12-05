import React from 'react';

const ContactInput = ({ id, name, label, type = 'text', value, onChange, required, error }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default ContactInput;