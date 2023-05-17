import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import { bankStyle } from './style';
import BankInfoBox from './BankInfoBox';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Terima Kasih</h2>
                <p className="info">
                  Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, diharapkan tetap bisa menjalin silaturahmi
                  melalui media online, bukan dengan kontak fisik secara langsung. <br />
                  Mohon pengertiannya.
                </p>
                <p className="info">
                  Atas segala do'a dan restu saudara/i,
                  <br /> kami ucapkan terima kasih. <br />
                  Wassalamualaikum warahmatullahi wabarakatuh.
                </p>
              </div>
              <div css={bankStyle}>
                <BankInfoBox
                  title="BCA"
                  time="8545605151"
                  date="Dwi Anditya Kurniawan"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2023 Kriesye & Dwi Wedding. All Rights Reserved.</small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=GxldQ9eX2wo" target="_blank" rel="noreferrer">
                  Stephen Sanchez - Until I Found You (Official Music Video)
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
