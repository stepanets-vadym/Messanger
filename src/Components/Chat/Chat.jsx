// React


// Components & elements
import ChatContent from 'Elements/ChatContent/ChatContent';
import ChatFooter from 'Elements/ChatFooter/ChatFooter';
import ChatHead from 'Elements/ChatHead/ChatHead';
import ChatPlaceholder from 'Elements/ChatPlaceholder/ChatPlaceholder';

// Styles

import globalStyle from '../../styles/global/global.module.scss';
import styles from './Chat.module.scss';

// Intertfases

const Chat = ({
  userChatInfo,
  setUserChatInfo,
  setShowMenu,
  users,
  setUsers,
  setClick
}) => {


  return (
    // Chat

    <div className={styles.ChatWindow}>
      {userChatInfo ? (
        <div className={styles.Chat} onClick={() => setShowMenu(false)} >
          <ChatHead userChatInfo={userChatInfo} setShowMenu={setShowMenu} />
          <ChatContent userChatInfo={userChatInfo} users={users} />
          <ChatFooter
            userChatInfo={userChatInfo}
            setUserChatInfo={(data)=> {
              // console.log('data0',data);
              setUserChatInfo(data)
            }}
            setUsers={setUsers}
            users={users}
          />
        </div>
      ) : <ChatPlaceholder setShowMenu={setShowMenu} setClick={setClick}/>}
    </div>
  );
};

export default Chat;
