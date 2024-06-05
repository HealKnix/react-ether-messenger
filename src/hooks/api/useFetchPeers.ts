import { Peer } from '@/models/Peer';
import { peerList } from '@/models/mock/peer';
import { useEffect, useState } from 'react';

export const useFetchPeers = () => {
  const [peers, setPeers] = useState<Peer[]>([]);

  useEffect(() => {
    setPeers(() => peerList);
  }, []);

  const addPeer = (peer: Peer) => {
    peerList.push(peer);
  };

  const getPeerById = (id: number) => {
    return peers.find((peer) => peer.peer_id === id);
  };

  return { peers, addPeer, getPeerById };
};
