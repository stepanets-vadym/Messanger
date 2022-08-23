// React

// Components & elements
import Icon from 'Elements/icon/Icon';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChatHead.module.scss';

// Intertfases

const ChatHead = ({ userChatInfo, setShowMenu }) => {
  const openMenu = (e) => {
    e.stopPropagation();
    setShowMenu(true);
  };

  return (
    // ChatHead

    <div className={styles.ChatHead}>
      <button className={styles.exit} onClick={(e) => openMenu(e)}>
        <Icon name={'#icon-undo2'}/>
      </button>
      <div className={styles.personImg}>
        <img className={styles.photo} src={userChatInfo.photo} alt='Person' />
      </div>
      <div className={styles.name}>{userChatInfo.name}</div>
    </div>
  );
};

export default ChatHead;
