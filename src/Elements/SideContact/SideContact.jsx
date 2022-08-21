// React

// Components & elements
import MeAndSnow from 'assets/img/MeAndSnow.jpeg';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './SideContact.module.scss';

// Intertfases

const SideContact = ({ user, setOpenUserChat, setUserId, setShowMenu }) => {
  const handleId = () => {
    // setOpenUserChat(true);
    setUserId(user.id)
    setShowMenu(false)
  };

  return (
    // SideContact

    <div className={styles.SideContact} onClick={() => handleId()}>
      <div className={styles.personImg}>
        <img className={styles.photo} src={user.photo} alt='Person' />
      </div>
      <div className={styles.ContactInfo}>
        <div className={styles.info}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.lastMessage}>
            {user.messages.slice(-1).map((mes) => mes.text)}
          </div>
        </div>
        <div className={styles.date}>
          {user.messages.slice(-1).map((mes) => mes.date)}
        </div>
      </div>
    </div>
  );
};

export default SideContact;
