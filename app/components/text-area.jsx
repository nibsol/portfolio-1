import React from 'react';


const TextArea = ({ id, name, placeholder, rows = 3 }) => {
  return (
    <div className='w-full'>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-b-2 resize-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
