import React from 'react';
import ticketList from './TicketList.module.scss';
import { intervalToDuration } from 'date-fns';

const TicketList = (props) => {
  return (
    <div>
      {props.segments.map((segment) => {
        const seconds0 = props.segments[0].duration;
        const seconds1 = props.segments[1].duration;
        const duration0 = intervalToDuration({ start: 0, end: seconds0 * 1000 });
        const duration1 = intervalToDuration({ start: 0, end: seconds1 * 1000 });
        return (
          <div className={ticketList.tt}>
            <div className={ticketList.ticket__header}>
              <span className={ticketList.ticket__header_price}>{props.price} ₽</span>
              <img src={props.logoAirport} alt="" className={ticketList.ticket__header_logo} />
            </div>
            <div className={ticketList.ticket__options}>
              <div className={ticketList.ticket__data}>
                <div className={ticketList.ticket__data_time}>
                  <span>
                    {segment.origin}-{segment.destination}
                  </span>
                  <time>10:45 - 08:00</time>
                </div>
                <div className={ticketList.ticket__data_path}>
                  <span>В пути</span>
                  <time>
                    {duration0.minutes + 'ч'} {duration0.seconds + 'м'}
                  </time>
                </div>
                <div className={ticketList.ticket__data_transplants}>
                  <span>{props.segments[0].stops.length} пересадки</span>
                  <time>{props.segments[0].stops.join(',')}</time>
                </div>
              </div>
              <div className={ticketList.ticket__data}>
                <div className={ticketList.ticket__data_time}>
                  <span>MOW-HKT</span>
                  <time>11:20 - 00:50</time>
                </div>
                <div className={ticketList.ticket__data_path}>
                  <span>В пути</span>
                  <time>
                    {duration1.minutes + 'ч'} {duration1.seconds + 'м'}
                  </time>
                </div>
                <div className={ticketList.ticket__data_transplants}>
                  <span>{props.segments[1].stops.length} пересадка</span>
                  <time>{props.segments[1].stops.join(',')}</time>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketList;
