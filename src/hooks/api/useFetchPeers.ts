import { useMemo, useState } from 'react';

import { peerList } from '@/models/mock/peer';
import { Peer } from '@/models/Peer';

export const useFetchPeers = () => {
  const [peers, setPeers] = useState<Peer[]>([]);

  useMemo(() => {
    setPeers(() => peerList);
  }, []);

  const addPeer = (peer: Peer) => {
    setPeers((peers) => [...peers, peer]);
  };

  const getPeerById = (id: number) => {
    return peers.find((peer) => peer.peer_id === id);
  };

  return { peers, addPeer, getPeerById };
};
