// React

// Components & elements
import MeAndSnow from 'assets/img/MeAndSnow.jpeg';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChatHead.module.scss';

// Intertfases

const ChatHead = ({ userChatInfo }) => {
  return (
    // ChatHead

    <div className={styles.ChatHead}>
      <div className={styles.personImg}>
        <img className={styles.photo} src={userChatInfo.photo} alt='Person' />
      </div>
      <div className={styles.name}>{userChatInfo.name}</div>
    </div>
  );
};

export default ChatHead;
