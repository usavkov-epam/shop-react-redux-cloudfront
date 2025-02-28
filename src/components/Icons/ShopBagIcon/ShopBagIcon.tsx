import React from 'react';

import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const ShopBagIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      viewBox="0 0 13 44"
      {...props}
    >
      <g fill='none' fill-rule='evenodd'>
        <path d='m0 44h13v-44h-13z' />
        <path d='m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z' fill='#fff'/>
      </g>
    </SvgIcon>
  );
};
