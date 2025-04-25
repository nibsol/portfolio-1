
import React from 'react';

const Button = ({ text, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center border-black border-[2px] rounded-3xl text-black py-2 px-4 gap-3 font-semibold transition duration-300"
    >
      {text}
      {Icon && <Icon className="mr-2" />}
    </button>
  );
};


export default Button;
