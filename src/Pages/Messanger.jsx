// React
import React, { useEffect, useMemo, useState } from 'react';

// Components & elements
import Sidebar from 'Components/Sidebar/Sidebar';
import Chat from 'Components/Chat/Chat';

// Style
import globalStyle from '../styles/global/global.module.scss';
import styles from './Messanger.module.scss';

function Messanger() {
  // all users
  const [users, setUsers] = useState([]);
  // take info about one user
  const [userChatInfo, setUserChatInfo] = useState(null);
  // Search user by name
  const [searchQuery, setSearchQuery] = useState('');
  // Search user by message
  const [searchMes, setSearchMes] = useState('');
  // Show sidebar on small screen
  const [showMenu, setShowMenu] = useState(false);
  // Shake sidebar on big screen
  const [click, setClick] =useState(false)
  // Open user chat
  const [openUserChat, setOpenUserChat] = useState(false);
  // Only for stop first load  useEffect
  const [firstRender, setFirstRender] = useState(false);
  // Take one user ID
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
        click={click}
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
        <Chat setShowMenu={setShowMenu} setClick={setClick} />
      )}
    </div>
  );
}

export default Messanger;
