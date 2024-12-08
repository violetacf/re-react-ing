import { SpanishModeContext } from '../../Context/SpanishModeContext';
import ReactHooks from '../ReactHooks/ReactHooks';
import './About.css';
import React, { useContext } from 'react';

export default function About({ exampleBaseRoute, hooks }) {
  const { spanishMode } = useContext(SpanishModeContext);
  return (
    <div className="about-container">
      <div className="intro-text-container">
        <p>
          {spanishMode ? (
            <>
              Hace tiempo que no trabajo con React, y quería refrescarme creando
              una miniaplicación que me sea útil. Además, como no he estado
              programando mucho desde que volví a España, decidí hacer esto.
              Aquí tienes lo que mi compi, ChatGPT, entiende sobre React:
              <br />
              <em>
                "React es una biblioteca popular de JavaScript, desarrollada por
                Facebook, para crear interfaces de usuario, especialmente en
                aplicaciones de una sola página donde los datos cambian
                frecuentemente. Permite crear componentes reutilizables,
                pequeñas piezas de la interfaz que se actualizan dinámicamente
                cuando los datos cambian. La característica principal de React
                es su DOM virtual, una representación ligera del DOM real, que
                optimiza el renderizado y mejora el rendimiento de la
                aplicación."
              </em>
              <br />
              <br />
              ¿Y yo cómo lo entiendo? De humana a human@:
              <br />
              <em>
                "React es como construir con Lego. Haces piezas pequeñas
                (componentes) y las juntas para hacer interfaces más complejas.
                Ayuda a mantener las cosas rápidas, actualizando sólo lo
                necesario."
              </em>
            </>
          ) : (
            <>
              It's been a while since I worked with React, and I wanted to
              refresh my skills by creating a mini-app that would be useful for
              me. Also, since I haven't coded much since moving back to Spain,
              this is a good start. Here's what my colleague, ChatGPT,
              understands about React:
              <br />
              <em>
                "React is a popular JavaScript library, developed by Facebook,
                for building user interfaces, particularly single-page
                applications where data changes frequently. It allows developers
                to create reusable components, which are independent, small
                pieces of UI that update dynamically when data changes."
              </em>
              <br />
              <br />
              And how do I understand it? From a human to a human:
              <br />
              <em>
                "React is like Lego for web apps. You build small pieces
                (components) and put them together to make more complex
                interfaces. It helps keep things fast, updating only what needs
                to change."
              </em>
            </>
          )}
        </p>
        <div className="mb-24">
          <ReactHooks exampleBaseRoute={exampleBaseRoute} hooks={hooks} />
        </div>
      </div>
    </div>
  );
}
