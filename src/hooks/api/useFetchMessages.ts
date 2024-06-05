import { Message } from '@/models/Message';
import { messageList } from '@/models/mock/message';
import { useEffect, useState } from 'react';

export const useFetchMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages(() => messageList);
  }, []);

  const addMessage = (message: Message) => {
    messageList.push(message);
  };

  const getMessagesByPeerId = (id: number) => {
    return messages
      .filter((message) => message.peer_id === id)
      .sort((a, b) => b.id - a.id);
  };

  return { messages, addMessage, getMessagesByPeerId };
};
