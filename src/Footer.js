import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
     
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     
        <div className="me-5 d-none d-lg-block">
          <span>Bağlantıda Kalın:</span>
        </div>
     
        <div>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      
    </footer>
  );
};

export default Footer;
