// NotFound.jsx
import React from 'react';
import './NotFound.css'; // Asegúrate de importar el CSS

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">¡Oops!</h1>
                <h2 className="not-found-subtitle">404 - Página No Encontrada</h2>
                <div className="not-found-icon">❌</div>
                <p className="not-found-message">Parece que te has perdido en el espacio. ¡Vuelve a casa!</p>
            </div>
        </div>
    );
};

export default NotFound;