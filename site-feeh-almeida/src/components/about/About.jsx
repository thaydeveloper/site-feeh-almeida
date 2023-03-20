import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__img"></div>
        <div className="about__content grid">
          <h1 className="about__title">Sobre Mim </h1>
          <h3 className="about__subtitle">Nails Design 💅</h3>
          <p className="about__description">
            Meu nome é Fernanda Almeida e sou uma nails designer renomada, com 3
            anos de profissão. Desde o início da minha carreira, sempre busquei
            oferecer aos meus clientes designs inovadores e personalizados,
            utilizando técnicas clássicas e modernas. Além da minha habilidade
            técnica, sou uma profissional dedicada e comprometida com a
            excelência em tudo o que faço.
            <br />
            <br />
            Estou sempre atualizada sobre as tendências e novidades em meu campo
            de atuação e me esforço para fornecer o melhor serviço possível aos
            meus clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
