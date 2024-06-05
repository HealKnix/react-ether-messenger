export interface Peer {
  id: number;
  peer_id: number;
  message_id: number;
  type: 'user' | 'chat';
}
