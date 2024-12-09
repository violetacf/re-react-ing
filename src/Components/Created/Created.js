import { useContext } from 'react';
import { SpanishModeContext } from '../../Context/SpanishModeContext';
import ReactImg from '../../Images/react_logo.png';
import './Created.css';

export default function CreatedBy() {
  const { spanishMode } = useContext(SpanishModeContext);

  return (
    <div
      className="fixed bottom-0 left-0 w-full text-center bg-purple-100 flex justify-center items-center m-0 p-0"
      data-testid="created-by"
    >
      <img
        className="w-5 h-auto animate-spin-fast"
        src={ReactImg}
        alt="React logo"
      />
      <p className="text-xs">
        {spanishMode
          ? 'Diseñado y Desarrollado por'
          : 'Designed & Developed by'}{' '}
        <a
          className="text-mainColor hover:text-secondaryColor"
          href="https://violeta.cique.es/"
        >
          Violeta Cique
        </a>{' '}
        - 2024
      </p>
      <img
        className="w-5 h-auto animate-spin-fast"
        src={ReactImg}
        alt="React logo"
      />
      <p className="text-xs">
        {spanishMode ? 'Iconos de' : 'Icons from'}{' '}
        <a
          className="text-mainColor hover:text-secondaryColor"
          href="https://www.flaticon.com/"
        >
          Flaticon
        </a>
      </p>
      <img
        className="w-5 h-auto animate-spin-fast"
        src={ReactImg}
        alt="React logo"
      />
    </div>
  );
}
