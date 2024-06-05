import { Conversation } from '@/models/Conversation';
import { conversationList } from '@/models/mock/conversation';
import { useEffect, useState } from 'react';

export const useFetchMessages = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    setConversations(() => conversationList);
  }, []);

  const addConversation = (Conversation: Conversation) => {
    conversationList.push(Conversation);
  };

  const getConversationById = (id: number) => {
    return conversations.filter((conversation) => conversation.id === id);
  };

  return { conversations, addConversation, getConversationById };
};
