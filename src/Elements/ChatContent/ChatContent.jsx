// React

// Components & elements
import Icon from 'Elements/icon/Icon';
import MeAndSnow from 'assets/img/MeAndSnow.jpeg';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChatContent.module.scss';

// Intertfases

const ChatContent = ({ userChatInfo }) => {
  return (
    // ChatContent
    <div className={styles.ChatContent}>
      <div className={styles.wrapper}>
        {userChatInfo.messages.map((message) =>
          message.type === 'mes' ? (
            <div className={styles.message} key={message.id}>
              <div className={styles.personImg}>
                <img
                  className={styles.photo}
                  src={userChatInfo.photo}
                  alt='Person'
                />
              </div>
              <div className={styles.content}>
                <div className={styles.messageText}>{message.text}</div>
                <div className={styles.date}>{message.date}</div>
              </div>
            </div>
          ) : (
            <div className={styles.answear} key={message.id}>
              <div className={styles.content}>
                <div className={styles.messageText}>{message.text}</div>
                <div className={styles.answearDate}>{message.date}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChatContent;
