import React from 'react';
import Sider from './Sider';
export interface INavIconList {
  name: string;
  path: string;
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: Array<Omit<INavIconList, 'icon' | 'children'>>;
}

export default Sider;
