import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
};

const contentStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  minWidth: '300px',
  textAlign: 'center',
  maxWidth: '600px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 0.3s forwards',
};

const Modal = ({ visible, content, close }) => {
  if (!content) return null; // Verificar si content es null antes de intentar renderizar

  return (
    <div
      style={{
        ...modalStyle,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div style={contentStyle}>
        <h3>{content?.nombre || 'No disponible'}</h3> {/* Usar encadenamiento opcional */}
        <p>{content?.descripcion || 'Descripción no disponible'}</p> {/* Usar encadenamiento opcional */}
        <button
          onClick={close}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
