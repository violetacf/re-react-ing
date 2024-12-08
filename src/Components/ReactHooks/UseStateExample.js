import { useState, useContext, useEffect } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';

export default function UseStateExample({ docsBaseUrl, hook }) {
  const { spanishMode } = useContext(SpanishModeContext);

  const fruits = spanishMode
    ? ['manzana', 'mango', 'naranja', 'kiwi', 'uva']
    : ['apple', 'mango', 'orange', 'kiwi', 'grape'];

  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFruitsData(fruits);
  }, [spanishMode]);

  const fruitsFiltered = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>
        {spanishMode ? `Ejemplo usando ${hook}:` : `Example using ${hook}:`}
      </h2>
      <p>
        {spanishMode ? (
          <>
            <strong>useState</strong>se usa aquí para crear dos piezas de
            estado:
            <ul>
              <li>
                <strong>- fruitsData:</strong>Contiene el array de frutas.
                Inicialmente, se establece en una lista de nombres de frutas
                (manzana, plátano, etc.).
              </li>
              <li>
                <strong>- searchTerm:</strong>Almacena el término de búsqueda
                actual, y a medida que escribes, se actualiza el término de
                búsqueda utilizado para filtrar la lista de frutas.
              </li>
            </ul>
            Cuando escribes en el cuadro de búsqueda, el estado
            <strong>searchTerm</strong>se actualiza, y la lista de frutas se
            filtra según ese término. El array<strong>fruitsFiltered</strong>se
            muestra a continuación.
          </>
        ) : (
          <>
            <strong>useState</strong> is used here to create two pieces of
            state:
            <ul>
              <li>
                <strong>- fruitsData:</strong>This holds the array of fruits.
                Initially, it's set to a list of fruit names (apple, banana,
                etc.).
              </li>
              <li>
                <strong>- searchTerm:</strong>This stores the current search
                input, and as you type, it updates the search term used to
                filter the fruit list.
              </li>
            </ul>
            When you type in the search box, the<strong>searchTerm</strong>
            state is updated, and the list of fruits is filtered based on that
            term. The<strong>fruitsFiltered</strong>array is displayed below.
          </>
        )}
      </p>
      <div>
        <input
          type="text"
          placeholder={spanishMode ? 'Buscar una fruta' : 'Search for a fruit'}
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
          return <p key={fruit}>{fruit}</p>;
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
          {spanishMode ? `${hook} docs` : `${hook} docs`}
        </button>
      </a>
    </div>
  );
}
