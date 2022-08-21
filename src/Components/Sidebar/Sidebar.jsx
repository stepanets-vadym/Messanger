// React
import classNames from 'classnames';

// Components & elements
import Icon from 'Elements/icon/Icon';
import SideContacts from 'Elements/SideContacts/SideContacts';
import SideHead from 'Elements/SideHead/SideHead';

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
  setShowMenu
}) => {

const sideBarStyles = showMenu ? classNames(styles.showSideBar, styles.Sidebar) : styles.Sidebar
const sideBarContetnStyles = showMenu ? styles.showSideBarContetn : styles.sideBarContent
const burgerStyle = showMenu ? styles.closeBurger : styles.burger

  return (
    // Sidebar

    <div className={sideBarStyles}>
      <button className={burgerStyle} onClick={()=> setShowMenu(!showMenu)} >
      <Icon name={'#icon-menu'}/>
      </button>
      <div className={sideBarContetnStyles}>
        <SideHead searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchMes={searchMes} setSearchMes={setSearchMes} />
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
