import React from 'react';

//Recoil
import { useRecoilValue } from 'recoil';
import menuOnAtom from '../../recoil/menuOn/menuOnAtom';

//Styles
import { Content } from './Menu.styles';

const Menu = () => {
  const menuOn = useRecoilValue(menuOnAtom);

  return (
    <Content menuOn={menuOn} >
      { menuOn ? 'on' : 'off'}
    </Content>
  );
};

export default Menu;
