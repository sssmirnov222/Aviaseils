import React from 'react';
import { useDispatch } from 'react-redux';
import { cheapTicket, fastTicket, optimalTicket } from '../../redux/actions';
import filter from './Filters.module.scss';

const Filters = () => {
  const dispatch = useDispatch();

  const cheap = () => {
    dispatch(cheapTicket());
  };

  const fast = () => {
    dispatch(fastTicket());
  };

  const optimal = () => {
    dispatch(optimalTicket());
  };

  return (
    <div className={filter.filters}>
      <button onClick={cheap}>Самый дешевый</button>

      <button onClick={fast}>Самый быстрый</button>

      <button onClick={optimal}>Оптимальный</button>
    </div>
  );
};

export default Filters;
