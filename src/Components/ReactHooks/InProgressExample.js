import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import BackButton from '../BackButton/BackButton';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function InProgressExample({ docsBaseUrl, hook }) {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div>
      <h2>
        {spanishMode ? `Ejemplo usando ${hook}:` : `Example using ${hook}:`}
      </h2>
      <p>
        {spanishMode ? (
          <p>Trabajando en esto ahora mismo, lo siento!</p>
        ) : (
          <p>Working on this bit at the moment, sorry!</p>
        )}
      </p>
      <a
        href={`${docsBaseUrl}${hook}`}
        target="_blank"
        aria-label="in progress React Hooks"
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
      <DotLottieReact
        src="https://lottie.host/77907add-5b9d-45ad-b5f6-f03b5641c192/LNCGSmhID9.lottie"
        loop
        autoplay
      />
      <div>
        <BackButton />
      </div>
    </div>
  );
}
