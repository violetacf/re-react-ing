import { useState } from 'react';

export default function UseStateExample({ docsBaseUrl, hook }) {
  const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
  // eslint-disable-next-line
  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState('');
  const fruitsFiltered = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Example using {hook}:</h2>
      <div>
        <input
          type="text"
          placeholder="Search for a fruit"
          onChange={(e) => setSearchTerm(e.target.value)}
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
        {fruitsFiltered.map((fruit) => {
          return <p>{fruit}</p>;
        })}
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
