import React from 'react'
import classNames from 'classnames';


// Styles

import globalStyle from '../../styles/global/global.module.scss';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={classNames(styles.Loader, styles.modal)}>
      <div className={styles.content}>
      <div className={styles.ldsDualRing}></div>
      </div>
    </div>
  )
}

export default Loader