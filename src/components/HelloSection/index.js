import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/mempelai-wanita.png';
import Groom from '@assets/images/mempelai-pria.png';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '26 Mei 2023, tempat mempelai wanita, Semarang' : 'Jumat, 26 Mei 2023';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive img-bride" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">dr. Kriesye Refertiwi</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Mirzan Efendi, S.Sos. (Zan) <br />& Ibu Rinus Talur Herni
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive img-groom" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Dwi Anditya Kurniawan, M.Pd.</h3>
                <p className="parent-name">
                  Putra Bapak Pribadi, S.Pd. <br />& Ibu Nuryati, S.Pd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
