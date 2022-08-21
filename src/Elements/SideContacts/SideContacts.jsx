// React

// Components & elements
import SideContact from 'Elements/SideContact/SideContact';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './SideContacts.module.scss';

// Intertfases

const SideContacts = ({users, setOpenUserChat, setUserId, setShowMenu}) => {
 
  return (
    // SideHead

    <div className={styles.SideContact}>
      {users.map((user)=>(
        <SideContact user={user} key={user.id} setOpenUserChat={setOpenUserChat} setUserId={setUserId} setShowMenu={setShowMenu} />
      ))}
      
    </div>
  );
};

export default SideContacts;
