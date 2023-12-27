import React from 'react';

import { MdOutlineSportsGolf } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { FiHeart } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <h1>PuttParty</h1>
          <p>
            Auf dieser Website sind inoffizielle Regeln für die Activity
            "PuttParty" von Discord zufinden. Diese Regeln wurden Speziell für
            den{' '}
            <a className="home__link" href="https://discord.gg/24fire">
              24Fire
            </a>{' '}
            Discord erstellt.
          </p>
          <br />
          <p>
            Made by{' '}
            <a href="https://alxzr.cloud/" className="home__link">
              <strong>@alxzr</strong>
            </a>
            &nbsp; with <FiHeart />
          </p>
        </div>
      </div>
      <div className="home__about">
        <h2>Was ist PuttParty?</h2>

        <div className="cards">
          <div className="card">
            <MdOutlineSportsGolf className="card__icon" />

            <h5 className="card__title">Was ist PuttParty?</h5>
            <p className="card__text">
              Putt Party ist ein von Discord entwickeltes
              Multiplayer-Minigolfspiel, das über das Menü "Aktivitäten" der App
              im Sprachchat aufgerufen werden kann. Derzeit gibt es insgesamt 19
              Kurse mit jeweils sechs Löchern zur Auswahl.
            </p>
          </div>
          <div className="card">
            <CiHeart className="card__icon" />

            <h5 className="card__title">Doch ist es nur ein Spiel?</h5>
            <p className="card__text">Fragt Lino, ich glaub er sagt nein</p>
          </div>
          <div className="card">
            <IoClose className="card__icon" />

            <h5 className="card__title">Warum sollte man PuttParty Spielen?</h5>
            <p className="card__text">
              Weil PuttyParty helfen kann beim Stressabbau und dir bei deinen
              alltäglichen Problemen helfen kann. ~ nico
            </p>
          </div>
        </div>
      </div>

      <div className="home__stats">
        <h2>Lerne 24fire's beste Spieler kennen!</h2>
        <div className="cards">
          <div className="card">
            <img src="/images/alex.png" alt="Alex" className="card__icon" />

            <h5 className="card__title">Alex</h5>
            <p className="card__text">Ich habe die Website erstellt.</p>
          </div>
          <div className="card">
            <img src="/images/daniel.png" alt="Daniel" className="card__icon" />

            <h5 className="card__title">Daniel</h5>
            <p className="card__text">
              Daniel ist mit einer der unfähigsten der besten. Dennoch zähle ich
              ihn hier auf, weil ich keinen Bann will.
            </p>
          </div>
          <div className="card">
            <img src="/images/lino.png" alt="Lino" className="card__icon" />

            <h5 className="card__title">Lino</h5>
            <p className="card__text">
              Eigentlich verliert Lino immer gegen Lars, aber laut unseren
              Regeln gewinnt er immer.
            </p>
          </div>
          <div className="card">
            <img src="/images/lars.png" alt="Lars" className="card__icon" />

            <h5 className="card__title">Lars</h5>
            <p className="card__text">
              Lars gewinnt 99% der Zeit gegen Lino, aber laut unseren Regeln
              verliert er scheinbar immer. Get better, noob.
            </p>
          </div>
          <div className="card">
            <img src="/images/nico.png" alt="Nico" className="card__icon" />

            <h5 className="card__title">Nico</h5>
            <p className="card__text">
              Nico ist der Alki, und er ist auch dabei.
            </p>
          </div>
          <div className="card">
            <img src="/images/bubbel.gif" alt="Bubbel" className="card__icon" />

            <h5 className="card__title">Bubbelwubbel mit dem Frosch</h5>
            <p className="card__text">Bubbel wollte auch dabei sein</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
