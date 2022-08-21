import anonim from 'assets/img/anonim.png';
import uniqid from 'uniqid';


export const Users = () => {
  const id = uniqid();
  const Users = [
    {
      name: 'Vadym Stepanets',
      photo: anonim,
      id: id,
      chat: {
        messages: [
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 0, 0, 0, 0),
          },
          {
            id: id,
            text: `how are you today?`,
            date: new Date(2011, 0, 1, 1, 0, 0, 0),
          },
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 2, 0, 0, 0),
          },
        ],
        answears: [],
      },
    },
    {
      name: 'Alina Groom',
      photo: anonim,
      id: id,
      chat: {
        messages: [
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 0, 0, 0, 0),
          },
          {
            id: id,
            text: `how are you today?`,
            date: new Date(2011, 0, 1, 1, 0, 0, 0),
          },
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 2, 0, 0, 0),
          },
        ],
        answears: [],
      },
    },
    {
      name: 'David Smith',
      photo: anonim,
      id: id,
      chat: {
        messages: [
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 0, 0, 0, 0),
          },
          {
            id: id,
            text: `how are you today?`,
            date: new Date(2011, 0, 1, 1, 0, 0, 0),
          },
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 2, 0, 0, 0),
          },
        ],
        answears: [],
      },
    },
    {
      name: 'Paulo Kin',
      photo: anonim,
      id: id,
      chat: {
        messages: [
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 0, 0, 0, 0),
          },
          {
            id: id,
            text: `how are you today?`,
            date: new Date(2011, 0, 1, 1, 0, 0, 0),
          },
          {
            id: id,
            text: `hello my name is ${this.name}`,
            date: new Date(2011, 0, 1, 2, 0, 0, 0),
          },
        ],
        answears: [],
      },
    },
  ];
  return Users;
};
