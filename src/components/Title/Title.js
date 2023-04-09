import React from 'react';
import './Title.css';
import classNames from 'classnames';

export const Title = ({ title, className }) => (
  <h2 className={classNames('title', className)}>
    {title}
  </h2>
);