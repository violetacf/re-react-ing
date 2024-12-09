import React, { useState, useEffect } from 'react';
import BackButton from '../BackButton/BackButton';

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return debouncedText;
};

export default function UseEffectExample({ docsBaseUrl, hook }) {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h1>Example using {hook}:</h1>
      <div>
        <input
          type="text"
          placeholder="Type some text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
        <p>Debounced value: {debouncedText}</p>
      </div>
      <a
        href={`${docsBaseUrl}${hook}`}
        target="_blank"
        aria-label="useEffect React Hooks"
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
      <div>
        <BackButton />
      </div>
    </div>
  );
}
