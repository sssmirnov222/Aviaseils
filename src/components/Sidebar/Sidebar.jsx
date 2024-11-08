import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  allTicket,
  noTransferTicket,
  oneTransferTicket,
  twoTransferTicket,
  threeTransferTicket,
} from '../../redux/actions';
import sidebar from './Sidebar.module.scss';

const Sidebar = () => {
  const dispatch = useDispatch();

  const all = () => {
    // setAllTick(true);

    dispatch(allTicket());
  };

  const noTransfer = () => {
    dispatch(noTransferTicket());
  };

  const oneTransfer = () => {
    dispatch(oneTransferTicket());
  };

  const twoTransfer = () => {
    dispatch(twoTransferTicket());
  };

  const threeTransfer = () => {
    dispatch(threeTransferTicket());
  };

  const [allTick, setAllTick] = useState(true);
  const [noTransfertick, setNoTransferTick] = useState(false);
  const [oneTransferTick, setOneTransferTick] = useState(false);
  const [twoTransferTick, setTwoTransferTick] = useState(false);
  const [threeTransferTick, setThreeTransferTick] = useState(false);

  // console.log(allTick, noTransfertick);
  return (
    <div className={sidebar.sidebar}>
      <h5 className={sidebar.sidebar__header}>Количество пересадок</h5>
      <section className={sidebar.sidebar__filters} onClick={all}>
        <input
          type="checkbox"
          className={sidebar.sidebar__filters_checkbox}
          checked={noTransfertick && oneTransferTick && twoTransferTick && threeTransferTick}
          onClick={() => {
            setAllTick(true);
            setNoTransferTick(!noTransfertick);
            setOneTransferTick(!oneTransferTick);
            setTwoTransferTick(!twoTransferTick);

            setThreeTransferTick(!threeTransferTick);
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
