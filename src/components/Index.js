import React from 'react';
import { Link } from 'react-router-dom';

export const PageIndex = () => {
  return (
    <div>
      <h1>
        Hola! mi nombre es Florencia y soy Full Stack Developer en Argentina. Actualmente trabajando para Santander Tecnología Argentina, en
        el squead Onboarding PyMEs, dentro del programa Adquisición y Vinculación de Empresas.
      </h1>
      <h2>
        Puedes saber más de mí <Link to="Contact"> contactándote conmigo</Link>
      </h2>

      <section className="last-works">
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className="works"></div>
      </section>
    </div>
  );
};
