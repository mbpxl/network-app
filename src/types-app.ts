export type typesApp = {
  //* props from connect
  initializeApp: () => void;
  initialized: boolean;

  //*pros from index.tsx
  state: {
    messagesReducer: {
      contacts: Array<contactsTypes>;
      dialogs: Array<dialogTypes>;
      tempMessageText: string;
    };
  }
}

type contactsTypes = {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
}

type dialogTypes = {
  id: number;
  message: string;
}