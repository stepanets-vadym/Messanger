// React
// Components & elements
import ChatContent from 'Elements/ChatContent/ChatContent';
import ChatFooter from 'Elements/ChatFooter/ChatFooter';
import ChatHead from 'Elements/ChatHead/ChatHead';

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
}) => {


  return (
    // Chat

    <div className={styles.Chat} onClick={() => setShowMenu(false)}>
      {userChatInfo ? (
        <>
          <ChatHead userChatInfo={userChatInfo} />
          <ChatContent userChatInfo={userChatInfo} />
          <ChatFooter
            userChatInfo={userChatInfo}
            setUserChatInfo={(data)=> {
              // console.log('data0',data);
              setUserChatInfo(data)
            }}
            setUsers={setUsers}
            users={users}
          />
        </>
      ) : null}
    </div>
  );
};

export default Chat;
