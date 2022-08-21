// React
import { useState } from 'react';
import uniqid from 'uniqid';

// Components & elements
import Icon from 'Elements/icon/Icon';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ChatFooter.module.scss';

// Intertfases

const ChatFooter = ({ userChatInfo, setUserChatInfo, users, setUsers }) => {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      const newMessage = (text, type) => {
        return {
          id: uniqid(),
          type,
          text,
          date: new Date().toDateString(),
        };
      };
      // повертаэмо новий об'єкт стейту

      const newUserChatInfo = (text, type, messages) => {
        return {
          ...userChatInfo,
          messages: [...messages, newMessage(text, type)],
        };
      };

      // console.log(newUserChatInfo(message, 'ans'));
      fetch(`http://localhost:3000/users/${userChatInfo.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(
          newUserChatInfo(message, 'ans', userChatInfo.messages)
        ),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserChatInfo(data)
          setTimeout(() => {
            fetch('https://api.chucknorris.io/jokes/random')
              .then((response) => response.json())
              .then((randomJson) => {
                if (randomJson) {
                  fetch(`http://localhost:3000/users/${userChatInfo.id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-type': 'application/json',
                    },
                    body: JSON.stringify(
                      newUserChatInfo(randomJson.value, 'mes', data.messages)
                    ),
                  })
                    .then((response) => response.json())
                    .then((prikol) => setUserChatInfo(prikol))
                    .catch((err) => console.log(err));
                }
              });
          }, 10000);
        })
        .catch((err) => console.log(err));

      setAnswer(false);
      setMessage('');
    }
  };

  return (
    // ChatFooter
    <div className={styles.ChatFooter}>
      <form onSubmit={sendMessage}>
        <label className={styles.footerLabel}>
          <input
            value={message}
            placeholder='Type your message'
            type={'text'}
            className={styles.input}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' className={styles.icon}>
            <Icon name='#icon-paper-plane' />
          </button>
        </label>
      </form>
    </div>
  );
};

export default ChatFooter;
