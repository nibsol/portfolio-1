import React from 'react';



const InputField = ({ id, name, type = 'text', placeholder, required }) => {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{placeholder.replace('*', '')}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-b-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
