import React from 'react';

import header from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={header.header}>
      <img src={props.logoAviaseils} alt="картинка авиасейл" className={header.header_image} />
    </div>
  );
};

export default Header;
