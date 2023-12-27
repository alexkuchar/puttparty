import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="image">
          <img src="/images/puttparty.png" alt="PuttParty" />
        </div>
        <div className="content">
          <h5>Über dieses Projekt</h5>
          <p>
            Dieses Projekt wurde aus Spaß von den den Witzfiguren des 24fire
            Discords erstellt. <br /> Es dient lediglich zum Spaß und soll
            niemanden verletzen. (außer vielleicht Lars's ego.. vielleicht
            gewinnt Lino dann auch mal ohne die Regeln dieses Projektes.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
