import React, { useState, useRef, useEffect } from 'react';

function PhoneNumberInput({ maxLength = 10 }) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const carretPositionRef = useRef(0);
  const inputChange = (e) => {
    const target = e.target;
    const currentValue = target.value;
    const selectionStart = target.selectionStart;
    const numbers = currentValue.replace(/[^0-9]/g, '');
    const size = numbers.length;

    if (size > maxLength) return;

    const formatedValue = [];
    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formatedValue.push('(');
      }

      formatedValue.push(numbers[i]);

      if (size > 6 && i === 5) {
        formatedValue.push('-');
      }

      if (size > 3 && i === 2) {
        formatedValue.push(')');
      }
    }

    const diff = formatedValue.length - currentValue.length;
    if (selectionStart) {
      carretPositionRef.current = selectionStart + diff;
    }

    setInput(formatedValue.join(''));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        carretPositionRef.current,
        carretPositionRef.current
      );
    }
  }, [input]);
  return (
    <input
      type="text"
      value={input}
      onChange={inputChange}
      ref={inputRef}
      placeholder="Enter your number"
      style={{
        width: '300px',
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        border: '2px solid black',
        borderRadius: '4px',
        outline: 'none',
      }}
    />
  );
}

export default function UseRefExample({ docsBaseUrl, hook }) {
  return (
    <div>
      <h2>Example using {hook}:</h2>
      <div className="phone-number-container">
        <PhoneNumberInput maxLength={10} />
      </div>

      <a
        href={`${docsBaseUrl}${hook}`}
        target="_blank"
        aria-label="useState React Hooks"
        rel="noreferrer"
      >
        <button
          style={{
            border: '2px solid black',
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          {' '}
          {hook} docs{' '}
        </button>
      </a>
    </div>
  );
}
