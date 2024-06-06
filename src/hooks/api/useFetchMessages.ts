import { useMemo, useState } from 'react';

import { Message } from '@/models/Message';
import { messageList } from '@/models/mock/message';

export const useFetchMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useMemo(() => {
    setMessages(() => messageList);
  }, []);

  const addMessage = (message: Message) => {
    setMessages((messages) => [...messages, message]);
  };

  const getMessagesByPeerId = (id: number) => {
    return messages
      .filter((message) => message.peer_id === id)
      .sort((a, b) => b.id - a.id);
  };

  return { messages, addMessage, getMessagesByPeerId };
};
