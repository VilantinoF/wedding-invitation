import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Tempat Mempelai Wanita</strong>
                </a>{' '}
                <br />
                Jl. Kapten Buchari Gunung Mesir Desa Batu Kuning Kec. Pasar Manna<br />
                Kabupaten Bengkulu Selatan
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <button type="button"><a href="https://goo.gl/maps/uj8mZZYbhdt5ACRE8">View Map</a></button>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
