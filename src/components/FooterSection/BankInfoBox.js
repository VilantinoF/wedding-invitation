import React from 'react';
import { string } from 'prop-types';

function BankInfoBox({ title, date, time, description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
      <i className="bca"></i>
      <h3>{title}</h3>
        <div className="event-col">
          <span>{time}</span>
        </div>
        <div className="event-col">
          <span>{date}</span>
        </div>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin"></i>
            <span>{description}</span>
          </div>
        )}
      </div>
    </div>
  );
}

BankInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(BankInfoBox);
