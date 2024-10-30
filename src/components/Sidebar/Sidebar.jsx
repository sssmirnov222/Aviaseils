import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-header">Количество пересадок</h5>
      <section className="sidebar-filters">
        <input type="checkbox" className="sidebar-filters_checkbox" />
        <span>Все</span>
      </section>
      <section className="sidebar-filters">
        <input type="checkbox" className="sidebar-filters_checkbox" />
        <span>Без пересадок</span>
      </section>
      <section className="sidebar-filters">
        <input type="checkbox" className="sidebar-filters_checkbox" />
        <span>1 пересадка</span>
      </section>
      <section className="sidebar-filters">
        <input type="checkbox" className="sidebar-filters_checkbox" />
        <span>2 пересадки</span>
      </section>
      <section className="sidebar-filters">
        <input type="checkbox" className="sidebar-filters_checkbox" />
        <span>3 пересадки</span>
      </section>
    </div>
  );
};

export default Sidebar;
