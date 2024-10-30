import React from 'react';

import './Main.scss';
import Sidebar from '../Sidebar/Sidebar';
import Filters from '../Filters/Filters';
import Ticket from '../Ticket/Ticket';

const Main = (props) => {
  return (
    <div className="main">
      <Sidebar />
      <Filters />
      <Ticket logoAirport={props.logoAirport} />
    </div>
  );
};

export default Main;
