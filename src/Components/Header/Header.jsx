import React from 'react';
import TextInput from "../Filters/TextInput";

const Header = () => {
  return (
    <div className="p-2 bg-primary mb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className=" h4 text-white ">Наши гости</div>
        <TextInput/>
      </div>
    </div>
  );
};

export default Header;
