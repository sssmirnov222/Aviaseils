import React, { useState } from 'react';
import { ticketLoad } from '../../redux/actions';
import { useEffect } from 'react';
import { Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ticket from './Ticket.module.scss';

import TicketList from '../TicketList/TicketList';

const Ticket = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(4);

  const tick = useSelector((state) => {
    const { ticketReducer, sortReducer } = state.rootReducer;

    console.log(ticketReducer.ticket);

    try {
      if (sortReducer) {
        return sortReducer.ticket;
      }
      if (ticketReducer) {
        return ticketReducer.ticket;
      }
    } catch (e) {
      console.log(e);
    }
  });

  console.log(tick);

  const search = useSelector((state) => {
    const { ticketReducer } = state.rootReducer;

    return ticketReducer.searchId.searchId;
  });

  useEffect(() => {
    dispatch(ticketLoad());
  }, [search]);

  let i = 0;
  try {
    return (
      <div className={ticket.ticket}>
        {tick.length === 0 ? (
          <Alert type="error" message={`Не найдено рейсов, удовлетворяющих заданным условиям.`} />
        ) : (
          tick.slice(0, show).map((res) => {
            // res.segments.logo = [...props.logo];
            return (
              <div className={ticket.tick}>
                <TicketList price={res.price} segments={res.segments} logo={props.logo} i={(i = i + 1)} />
              </div>
            );
          })
        )}
        {tick.length === 0 ? (
          <></>
        ) : (
          <button className={ticket.showMore} onClick={() => setShow(() => show + 5)}>
            Показать еще 5 билетов!
          </button>
        )}
      </div>
    );
  } catch (e) {
    console.log('MyError', e);
  }
};

export default Ticket;
