import React, { useState } from 'react';
import ticketList from './TicketList.module.scss';
import { Alert } from 'antd';
import { intervalToDuration, format, parseISO, getTime } from 'date-fns';

const TicketList = (props) => {
  console.log(props.segments);
  return (
    <div>
      {props.segments ? (
        props.segments.map((segment) => {
          const seconds0 = props.segments[0].duration;
          const seconds1 = props.segments[1].duration;
          const duration0 = intervalToDuration({ start: 0, end: seconds0 * 1000 });
          const duration1 = intervalToDuration({ start: 0, end: seconds1 * 1000 });
          let time0 = props.segments[0].date.slice(0, -5);
          let time1 = props.segments[1].date.slice(0, -5);
          let time01 = props.segments[0].date;
          let time11 = props.segments[1].date;

          return (
            <div className={ticketList.tt}>
              <div className={ticketList.ticket__header}>
                <span className={ticketList.ticket__header_price}>
                  {typeof props.price === 'undefined' ? 0 : props.price} ₽
                </span>
                <img src={props.logo[0]} alt="" className={ticketList.ticket__header_logo} />
              </div>

              <div className={ticketList.ticket__options}>
                <div className={ticketList.ticket__data}>
                  <div className={ticketList.ticket__data_time}>
                    <span>
                      {typeof segment.origin === 'undefined' ? 0 : segment.origin}-
                      {typeof segment.destination === 'undefined' ? 0 : segment.destination}
                    </span>
                    <time>
                      {format(parseISO(time0), 'h').length === 1
                        ? format(parseISO(time0), '0h')
                        : format(parseISO(time0), 'h')}
                      :
                      {format(parseISO(time0), 'm').length === 1
                        ? format(parseISO(time0), '0m')
                        : format(parseISO(time0), 'm')}
                      -
                      {format(parseISO(time01), 'h').length === 1
                        ? format(parseISO(time01), '0h')
                        : format(parseISO(time01), 'h')}
                      :
                      {format(parseISO(time01), 'm').length === 1
                        ? format(parseISO(time01), '0m')
                        : format(parseISO(time01), 'm')}
                    </time>
                  </div>
                  <div className={ticketList.ticket__data_path}>
                    <span>В пути</span>
                    <time>
                      {typeof duration0.minutes === 'undefined' ? 0 + 0 + 'ч' : duration0.minutes + 'ч'}{' '}
                      {typeof duration0.seconds === 'undefined' ? 0 + 0 + 'м' : duration0.seconds + 'м'}
                    </time>
                  </div>
                  <div className={ticketList.ticket__data_transplants}>
                    <span>
                      {typeof props.segments[0].stops.length === 'undefined' ? 0 : props.segments[0].stops.length}{' '}
                      пересадки
                    </span>
                    <time>
                      {typeof props.segments[0].stops === 'undefined' ? 0 : props.segments[0].stops.join(',')}
                    </time>
                  </div>
                </div>
                <div className={ticketList.ticket__data}>
                  <div className={ticketList.ticket__data_time}>
                    <span>MOW-HKT</span>
                    <time>
                      {format(parseISO(time1), 'h').length === 1
                        ? format(parseISO(time1), '0h')
                        : format(parseISO(time1), 'h')}
                      :
                      {format(parseISO(time1), 'm').length === 1
                        ? format(parseISO(time1), '0m')
                        : format(parseISO(time1), 'm')}
                      -
                      {format(parseISO(time11), 'h').length === 1
                        ? format(parseISO(time11), '0h')
                        : format(parseISO(time11), 'h')}
                      :
                      {format(parseISO(time11), 'm').length === 1
                        ? format(parseISO(time11), '0m')
                        : format(parseISO(time11), 'm')}
                    </time>
                  </div>
                  <div className={ticketList.ticket__data_path}>
                    <span>В пути</span>
                    <time>
                      {typeof duration1.minutes === 'undefined' ? 0 + 0 + 'ч' : duration1.minutes + 'ч'}{' '}
                      {typeof duration0.seconds === 'undefined' ? 0 + 0 + 'м' : duration0.seconds + 'м'}
                    </time>
                  </div>
                  <div className={ticketList.ticket__data_transplants}>
                    <span>
                      {typeof props.segments[1].stops.length === 'undefined' ? 0 : props.segments[1].stops.length}{' '}
                      пересадка
                    </span>
                    <time>
                      {typeof props.segments[1].stops === 'undefined' ? 0 : props.segments[1].stops.join(',')}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Alert type="error" message={`Error, что-то пошло не так!`} className="alert__error" />
      )}
    </div>
  );
};

export default TicketList;
