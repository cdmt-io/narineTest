import React from 'react';
import 'css-doodle';
import styles from './Doodle.module.scss';

export default ({ rule = '' }) => (
  <css-doodle class={styles['doodle']}>{ rule }</css-doodle>
);