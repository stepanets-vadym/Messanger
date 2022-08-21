// React
import React, { useEffect, useMemo, useState } from 'react';

// Components & elements
import Sidebar from 'Components/Sidebar/Sidebar';
import Chat from 'Components/Chat/Chat';

// Style
import globalStyle from '../styles/global/global.module.scss';
import styles from './Messanger.module.scss';

function Messanger() {
  const [users, setUsers] = useState([]);

  const [userChatInfo, setUserChatInfo] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchMes, setSearchMes] = useState('');

  const [showMenu, setShowMenu] = useState(false);

  const [openUserChat, setOpenUserChat] = useState(false);

  const [firstRender, setFirstRender] = useState(false);

  const [userId, setUserId] = useState(0);

  useEffect(() => {
    fetch('https://localmessenger.herokuapp.com/api/users')
      .then((response) => response.json())
      .then((users) =>
        setUsers(
          users.sort((a, b) => {
            return (
              new Date(b.messages[b.messages.length - 1].date).getTime() -
              new Date(a.messages[a.messages.length - 1].date).getTime()
            );
          })
        )
      );
  }, [userChatInfo]);

  // new Date(a.messages[a.messages.length - 1].date).getTime()

  const userChat = (id) => {
    setUserChatInfo([...users].find((user) => user.id == id));
    setOpenUserChat(true);
  };

  useEffect(() => {
    firstRender ? userChat(userId) : setFirstRender(true);
  }, [userId]);

  const sortUser = useMemo(() => {
    return searchQuery
      ? [...users].filter((user) =>
          user.name.toLowerCase().includes(searchQuery)
        )
      : users;
  }, [searchQuery, users]);

  const sortUsersMessage = useMemo(() => {
    return sortUser.filter((user) =>
      user.messages.find((useMes) =>
        useMes.text.toLowerCase().includes(searchMes)
      )
    );
  }, [searchMes, sortUser]);

  return (
    <div className={styles.messanger}>
      <Sidebar
        users={sortUsersMessage}
        setUserId={setUserId}
        setOpenUserChat={setOpenUserChat}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchMes={searchMes}
        setSearchMes={setSearchMes}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {openUserChat ? (
        <Chat
          userChatInfo={userChatInfo}
          setUserChatInfo={(data) => {
            // console.log('data11',data);
            setUserChatInfo(data);
          }}
          setShowMenu={setShowMenu}
          setUsers={setUsers}
          users={users}
        />
      ) : (
        <Chat />
      )}
    </div>
  );
}

export default Messanger;
