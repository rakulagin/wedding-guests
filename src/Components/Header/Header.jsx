import React from 'react';
import TextInput from "../Filters/TextInput";

const Header = () => {
  return (
    <div className="pt-2 pb-2 bg-primary mb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h6 className="text-white mb-0">Наши гости</h6>
        <TextInput/>
      </div>
    </div>
  );
};

export default Header;
