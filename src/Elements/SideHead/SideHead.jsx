// React
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Context } from 'index';

// Components & elements
import MeAndSnow from 'assets/img/MeAndSnow.jpeg';
import Icon from 'Elements/icon/Icon';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './SideHead.module.scss';

// Intertfases

const SideHead = ({ setSearchQuery, searchQuery, searchMes, setSearchMes }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const [showSearch, setShowSearch] = useState(false);

  return (
    // SideHead

    <div className={styles.SideHead}>
      <div className={styles.personBlock}>
        <div className={styles.personInfo}>
          <div className={styles.personImg}>
            <img className={styles.photo} src={user.photoURL} alt='Person' />
          </div>
          <div className={styles.personName}>{user.displayName}</div>
        </div>
        <button className={styles.exit} onClick={() => signOut(auth)}>
          <Icon name={'#icon-exit'} />
        </button>
      </div>
      <div className={styles.searchBlock}>
        {!showSearch ? (
          <label className={styles.search}>
            <input
              type={'text'}
              value={searchQuery}
              placeholder='Search by name'
              className={styles.searchInput}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className={styles.icon}>
              <Icon name='#icon-search' />
            </div>
          </label>
        ) : (
          <label className={styles.search}>
            <input
              type={'text'}
              value={searchMes}
              placeholder='Search message'
              className={styles.searchInput}
              onChange={(e) => setSearchMes(e.target.value)}
            />
            <div className={styles.icon}>
              <Icon name='#icon-search' />
            </div>
          </label>
        )}
        <button
          className={styles.btn}
          onClick={() => setShowSearch(!showSearch)}
        >
          <Icon name='#icon-loop2' />
        </button>
      </div>
    </div>
  );
};

export default SideHead;
