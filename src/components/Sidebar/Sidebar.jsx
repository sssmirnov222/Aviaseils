import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  allTicket,
  noTransferTicket,
  oneTransferTicket,
  twoTransferTicket,
  threeTransferTicket,
  ticketLoad,
} from '../../redux/actions';
import sidebar from './Sidebar.module.scss';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [allTick, setAllTick] = useState(true);
  const [noTransfertick, setNoTransferTick] = useState(true);
  const [oneTransferTick, setOneTransferTick] = useState(true);
  const [twoTransferTick, setTwoTransferTick] = useState(true);
  const [threeTransferTick, setThreeTransferTick] = useState(true);

  const all = () => {
    console.log(allTick);
    dispatch(allTicket(allTick, noTransfertick, oneTransferTick, twoTransferTick, threeTransferTick));
    dispatch(ticketLoad(allTick, noTransfertick, oneTransferTick, twoTransferTick, threeTransferTick));
  };

  const noTransfer = () => {
    dispatch(noTransferTicket(noTransfertick));
  };

  const oneTransfer = () => {
    dispatch(oneTransferTicket(oneTransferTick));
  };

  const twoTransfer = () => {
    dispatch(twoTransferTicket(twoTransferTick));
  };

  const threeTransfer = () => {
    dispatch(threeTransferTicket(threeTransferTick));
  };

  return (
    <div className={sidebar.sidebar}>
      <h5 className={sidebar.sidebar__header}>Количество пересадок</h5>
      <section className={sidebar.sidebar__filters} onClick={all}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={noTransfertick && oneTransferTick && twoTransferTick && threeTransferTick}
          onClick={() => {
            setAllTick(!allTick);
            setNoTransferTick(!noTransfertick ? true : false);
            setOneTransferTick(!noTransfertick ? true : false);
            setTwoTransferTick(!noTransfertick ? true : false);
            setThreeTransferTick(!noTransfertick ? true : false);
          }}
        />
        <span>Все</span>
      </section>
      <section className={sidebar.sidebar__filters} onClick={noTransfer}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={noTransfertick && allTick}
          onClick={() => {
            setNoTransferTick(!noTransfertick);
          }}
        />
        <span>Без пересадок</span>
      </section>
      <section className={sidebar.sidebar__filters} onClick={oneTransfer}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={oneTransferTick && allTick}
          onClick={() => {
            setOneTransferTick(!oneTransferTick);
          }}
        />
        <span>1 пересадка</span>
      </section>
      <section className={sidebar.sidebar__filters} onClick={twoTransfer}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={twoTransferTick && allTick}
          onClick={() => {
            setTwoTransferTick(!twoTransferTick);
          }}
        />
        <span>2 пересадки</span>
      </section>
      <section className={sidebar.sidebar__filters} onClick={threeTransfer}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={threeTransferTick && allTick}
          onClick={() => {
            setThreeTransferTick(!threeTransferTick);
          }}
        />
        <span>3 пересадки</span>
      </section>
    </div>
  );
};

export default Sidebar;
