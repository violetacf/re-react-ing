import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="image-intro-container">
        <div className="intro-text-container">
          <p>
            React is a popular JavaScript library, developed by Facebook, for
            building user interfaces, particularly single-page applications
            where data changes frequently. It allows developers to create
            reusable components, which are independent, small pieces of UI that
            update dynamically when data changes. React’s core feature is its
            virtual DOM, a lightweight representation of the real DOM, which
            optimizes rendering and improves app performance. Though often
            referred to as a framework due to its rich ecosystem, React is
            technically a library, often used alongside other tools like Redux,
            React Router, and others to create full-featured applications.{' '}
          </p>
          {/* <p>
            React es una biblioteca popular de JavaScript, desarrollada por
            Facebook, para crear interfaces de usuario, especialmente en
            aplicaciones de una sola página donde los datos cambian con
            frecuencia. Permite a los desarrolladores crear componentes
            reutilizables, que son pequeñas piezas independientes de la interfaz
            de usuario que se actualizan dinámicamente cuando los datos cambian.
            La característica principal de React es su DOM virtual, una
            representación ligera del DOM real, que optimiza el renderizado y
            mejora el rendimiento de las aplicaciones. Aunque a menudo se le
            llama un framework debido a su amplio ecosistema, React es
            técnicamente una biblioteca y se usa frecuentemente junto a otras
            herramientas como Redux, React Router y otras para crear
            aplicaciones completas.{' '}
          </p> */}
        </div>
      </div>
      {/* <Testimonials /> */}
    </div>
  );
}
