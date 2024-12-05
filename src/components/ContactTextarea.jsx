import React from 'react';

const ContactTextarea = ({ id, name, label, value, onChange, required, error }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea
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

export default ContactTextarea;