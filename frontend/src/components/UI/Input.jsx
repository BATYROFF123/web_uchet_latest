import React from "react";

const Input = ({ value, onChange, ...props}) => {
    return (
        <div>
            <input
                className="border-2 "
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                {...props}
            />
        </div>
    );
};

export default Input;
