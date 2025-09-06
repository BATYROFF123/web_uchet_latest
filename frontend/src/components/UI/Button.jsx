import React from 'react';

const Button = ({type='button', onClick}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="border-none bg-blue-500 text-gray-50 px-2 py-1 rounded"
        >
            отправить
        </button>
    );
};

export default Button;