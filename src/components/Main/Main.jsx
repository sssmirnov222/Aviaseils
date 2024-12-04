import React from 'react';
import { ticketLoad } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import main from './Main.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Filters from '../Filters/Filters';
import Ticket from '../Ticket/Ticket';

const Main = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => {
    const { ticketReducer } = state.rootReducer;

    return ticketReducer.loading;
  });

  console.log(loading);

  useEffect(() => {
    dispatch(ticketLoad());
  });

  return (
    <div className={main.main}>
      <Sidebar />
      <Filters />
      {loading !== false ? <Spin /> : <Ticket logo={props.logo} />}
    </div>
  );
};

export default Main;
