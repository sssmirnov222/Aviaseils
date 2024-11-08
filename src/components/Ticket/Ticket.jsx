import React from 'react';
import { ticketLoad } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ticket from './Ticket.module.scss';
import TicketList from '../TicketList/TicketList';

const Ticket = (props) => {
  const dispatch = useDispatch();

  const tick = useSelector((state) => {
    const { ticketReducer } = state.rootReducer;
    return ticketReducer.ticket;
  });

  console.log('tick', tick);

  useEffect(() => {
    dispatch(ticketLoad());
  }, []);

  return (
    <div className={ticket.ticket}>
      {tick.map((res) => {
        return (
          <div className={ticket.tick}>
            <TicketList price={res.price} segments={res.segments} />
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
