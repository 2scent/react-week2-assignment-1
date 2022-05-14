import React from 'react';
import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </div>
  );
}
