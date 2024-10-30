import React from 'react';

import './Header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <img src={props.logoAviaseils} alt="картинка авиасейл" className="header-image" />
    </div>
  );
};

export default Header;
