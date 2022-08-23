// React
import classNames from 'classnames';
import { useState } from 'react';

// Components & elements

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChatPlaceholder.module.scss';

// Intertfases


const ChatPlaceholder = ({ setShowMenu,setClick }) => {
const showMenu = (e) =>{
  e.stopPropagation()
  setShowMenu(true)
}


  return (
    // ChatPlaceholder
    <div className={styles.ChatPlaceholder} onClick={() => setShowMenu(false)} >
      <h3 className={styles.textOnLowScreen} onClick={(e) => showMenu(e)}>
        Open chat
      </h3>
      <h3 className={classNames(styles.textOnLowScreen,styles.textOnBigScreen)} onClick={()=>{
        setClick(true)
        setTimeout(()=>setClick(false),1500)
      }} >
        Open chat
      </h3>
    </div>
  );
};

export default ChatPlaceholder;
