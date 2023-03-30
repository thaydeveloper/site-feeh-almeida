import React from "react";

import { UilCommentAltUpload } from "@iconscout/react-unicons";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Fernanda Almeida </h1>
      <h3 className="home__subtitle">Nails Design 💅</h3>
      <p className="home__description">
        Unhas perfeitas requer dedicação e confiança na profissional, Nosso
        espaço é personalizado para melhor lhe atender, aqui sua beleza é nossa
        convidada. Uma diva como você merece uma unha bem decorada, um
        alongamento bem resistente e um serviço que atenda às suas necessidades.
      </p>
      <a href="#contact" className="button button__flex">
        Entre Em Contato
        <UilCommentAltUpload className="icon-contact" />
      </a>
    </div>
  );
};

export default Data;
