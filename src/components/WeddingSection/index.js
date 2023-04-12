import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Syukuran Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {renderGuestInfo()}
            {(
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="08.00 WIB"
                  date="Jumat, 26 Mei 2023"
                  description="Rumah Mempelai Wanita, Bengkulu"
                  mobileDescription="Rumah Mempelai Wanita, Bengkulu"
                />
                <WeddingInfoBox
                  title="Pertandingan Domino"
                  time="20.00 WIB"
                  date="Sabtu, 27 Mei 2023"
                  description="Rumah Mempelai Wanita, Bengkulu"
                  mobileDescription="Rumah Mempelai Wanita, Bengkulu"
                />
                <WeddingInfoBox
                  title="Resepsi"
                  time="07.30 WIB"
                  date="Minggu, 28 Mei 2023"
                  description="Rumah Mempelai Wanita, Bengkulu"
                  mobileDescription="Rumah Mempelai Wanita, Bengkulu"
                />
              </div>
            )}
          </div>
        </div>
      </div>

    </Fragment>




  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
