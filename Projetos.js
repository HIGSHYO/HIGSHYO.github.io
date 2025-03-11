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
        <h1>Projetos</h1>
        <p>Aqui fica todos os projetos que já fiz, alguns deles estarão como links externos para download se possivel.</p>
      </div>
    </div>
  );
};

export default Home;
