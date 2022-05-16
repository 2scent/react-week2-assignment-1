import React from 'react';

export default function NumberButtons({ onClick }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" key={i} onClick={() => onClick(i)}>
          {i}
        </button>
      ))}
    </>
  );
}