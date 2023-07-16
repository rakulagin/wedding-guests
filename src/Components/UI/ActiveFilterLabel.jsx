import React from 'react';

import TrashIcon from "./TrashIcon";

const ActiveFilterLabel = ({children, onClick, isActive}) => {
  return (
    <span
      className='bg-body-secondary d-flex align-items-center border px-2 rounded-5'
      onClick={onClick}
    >
      {children}
      <TrashIcon />
    </span>
  );
};

export default ActiveFilterLabel;
