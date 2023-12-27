import React from 'react';

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <p>
          2023 - {currYear} &copy;{' '}
          <a href="https://alxzr.cloud/">puttparty oder so</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
