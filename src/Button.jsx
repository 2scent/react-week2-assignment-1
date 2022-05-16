import React from 'react';

function Button({ value, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me! (
      {value}
      )
    </button>
  );
}

export default Button;
