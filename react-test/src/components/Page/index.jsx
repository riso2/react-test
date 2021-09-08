import React from 'react';

//Recoil
import { useRecoilValue } from 'recoil';
import menuOnAtom from '../../recoil/menuOn/menuOnAtom';

//Styles
import { Content } from './Page.styles';

const Page = () => {
  const menuOn = useRecoilValue(menuOnAtom);

  return (
    <Content>
      { menuOn ? 'on' : 'off' }
    </Content>
  );
};

export default Page;
