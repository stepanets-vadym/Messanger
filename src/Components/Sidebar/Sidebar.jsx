// React
import classNames from 'classnames';

// Components & elements
import Icon from 'Elements/icon/Icon';
import SideContacts from 'Elements/SideContacts/SideContacts';
import SideHead from 'Elements/SideHead/SideHead';
import { useEffect, useState } from 'react';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Sidebar.module.scss';

// Intertfases

const Sidebar = ({
  users,
  setOpenUserChat,
  setUserId,
  setSearchQuery,
  searchQuery,
  searchMes,
  setSearchMes,
  showMenu,
  setShowMenu,
  click
}) => {
  const sideBarStyles = showMenu
    ? classNames(styles.showSideBar, styles.Sidebar)
    : click ?classNames(styles.Sidebar, 'animate__animated animate__shakeX') : styles.Sidebar;


  const sideBarContetnStyles = showMenu
    ? styles.showSideBarContetn
    : styles.sideBarContent;

    console.log(showMenu);


  return (
    // Sidebar

    <div className={sideBarStyles}>
      <div className={sideBarContetnStyles}>
        <SideHead
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchMes={searchMes}
          setSearchMes={setSearchMes}
        />

        <SideContacts
          users={users}
          setOpenUserChat={setOpenUserChat}
          setUserId={setUserId}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </div>
  );
};

export default Sidebar;
