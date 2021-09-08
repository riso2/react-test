import React from 'react';

//Recoil
import { useSetRecoilState } from 'recoil';
import menuOnAtom from '../../recoil/menuOn/menuOnAtom';

//Styles
import { Content } from './Header.styles';

const Header = () => {
  const setMenuOn = useSetRecoilState(menuOnAtom);

  const toggleMenuOn = () => {
    setMenuOn(prev => !prev);
  };

  return (
    <Content>
      <button onClick={toggleMenuOn}>MENU</button>
    </Content> 
  );
};

export default Header;
