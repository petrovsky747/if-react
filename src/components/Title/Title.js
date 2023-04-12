import classNames from 'classnames';
import React from 'react';
import './Title.css';
export const Title = ({ title, className }) => (
  <h2 className={classNames('title', className)}>{title}</h2>
);
