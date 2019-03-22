import React from 'react';
import 'css-doodle';
import styles from './Doodle.module.scss';

export default ({ rule = '' , ...others}) => (
  <css-doodle class={styles['doodle']} {...others}>{ rule }</css-doodle>
);