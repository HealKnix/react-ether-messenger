import { Conversation } from '@/models/Conversation';
import { conversationList } from '@/models/mock/conversation';
import { useMemo, useState } from 'react';

export const useFetchConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useMemo(() => {
    setConversations(() => conversationList);
  }, []);

  const addConversation = (conversation: Conversation) => {
    setConversations((conversations) => [...conversations, conversation]);
  };

  const getConversationByPeerId = (peerId: number) => {
    return conversations.find((conversation) => conversation.id === peerId);
  };

  const updateConversationLastMessageByPeerId = (
    peerId: number,
    lastMessage: string,
  ) => {
    setConversations((conversations) =>
      conversations.map((conversation) => {
        if (conversation.peer_id === peerId) {
          conversation.last_message = lastMessage;
        }
        return conversation;
      }),
    );
  };

  return {
    conversations,
    addConversation,
    getConversationByPeerId,
    updateConversationLastMessageByPeerId,
  };
};
