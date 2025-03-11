import React from "react";
import "./style_base.css";

const Home = () => {
  return (
    <div>
      <div className="bright">
        <img src="imagens/img_escuro.png" alt="Imagem do modo de claridade" d="icon_bright"/>
      </div>
      <div className="sidebar" id="sidebar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="projetos.html">Projetos</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
        <div className="contatos">
          <a href="https://www.linkedin.com/in/luiz-fellipe-luquezi-439099236/">
            <img src="Imagens/img_linkedin.png" alt="Icone Linkedin" id="icones"/>
          </a>
          <a href="contato.html">
            <img src="Imagens/img_zap.png" alt="Icone Whatsapp" id="icones"/>
          </a>
          <a href="mailto:luizfellipeluquezi@gmail.com">
            <img src="Imagens/img_email.png" alt="Icone Email" id="whatsapp"/>
          </a>
        </div>
      </div>
      <div className="apresentacao">
        <div className="arrow" id="arrow">&#10148;</div>
        <h1>Seja bem vindo!</h1>
        <p>Este site tem o intuito de armazenar e de demonstrar todos meus projetos atuais!</p>
      </div>
      <div className="slides">
        <a href="projetos.html">
          <img src="Imagens/img_place_holder_1.png" alt="Imagens dos projetos" id="imagem_showcase"/>
        </a>
        <br />
        <p>Ultimos projetos atualizados</p>
      </div>
    </div>
  );
};

export default Home;
