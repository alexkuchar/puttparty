import React from 'react';

const Rules = () => {
  return (
    <div className="rules">
      <div className="rules__header">
        <h1 className="title">Regeln</h1>
        <p className="text">
          Auf dieser Seite kannst du die Regeln für das Spielen von PuttParty
          auf 24fire lesen.
        </p>
      </div>

      <h4>Regeln</h4>

      <div className="rules__content">
        <ul>
          <li>Lino gewinnt immer</li>
          <li>Lino ist besser als Lars</li>
          <li>Lars ist schlecht</li>
          <li>Lino hat immer recht</li>
          <li>Dies sind die (in)offiziellen Regeln</li>
          <li>24fire Community ist kuhl</li>
          <li>Jeden tag (außer Donnerstag) 20 Uhr PuttParty</li>
          <li>Alex ist geil</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
