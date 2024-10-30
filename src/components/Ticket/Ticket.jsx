import React from 'react';
import './Ticket.scss';

const Ticket = (props) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-header__price">13400 ₽</span>
        <img src={props.logoAirport} alt="" className="ticket-header__logo" />
      </div>
      <div className="ticket-options">
        <div className="ticket-data">
          <div className="ticket-data-time">
            <span>MOW-HKT</span>
            <time>10:45 - 08:00</time>
          </div>
          <div className="ticket-data-path">
            <span>В пути</span>
            <time>21ч 15м</time>
          </div>
          <div className="ticket-data-transplants">
            <span>2 пересадки</span>
            <time>HKG, JBL</time>
          </div>
        </div>
        <div className="ticket-data">
          <div className="ticket-data-time">
            <span>MOW-HKT</span>
            <time>11:20 - 00:50</time>
          </div>
          <div className="ticket-data-path">
            <span>В пути</span>
            <time>13ч 30м</time>
          </div>
          <div className="ticket-data-transplants">
            <span>1 пересадка</span>
            <time>HKG</time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
