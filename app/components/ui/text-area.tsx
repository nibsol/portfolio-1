import React from 'react';

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ 
  id, 
  name, 
  placeholder, 
  rows = 3,
  required 
}) => {
  return (
    <div className='w-full'>
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-b-2 resize-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea; 