import classNames from 'classnames';
import React from 'react';
import './Container.css';

export const Container = ({ children, className }) => (
  <div className={classNames('container', className)}>{children}</div>
);
