import { useState } from 'react';
import axios from 'axios';
interface Chain {
  id: string;
  label: string;
}

interface EVMResponse {
  evmChainId: number;
  name: string;
  ecosystem: string;
}

const axiosNoves = axios.create({
  baseURL: 'https://translate.dev.noves.fi',
  timeout: 1000,
  headers: { apiKey: 'dd' },
});
const axiosRPCBalancer = axios.create({
  baseURL: 'https://rpc.balancer.dev.noves.fi',
  timeout: 1000,
  headers: { apiKey: 'dd' },
});

export const useFetch = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [chains, setChains] = useState<Chain[]>([]);
  const [block, setBlock] = useState<object | null>(null);

  const getChains = async () => {
    setIsFetching(true);
    axiosNoves.get(`/evm/chains`).then((res) => {
      const data: EVMResponse[] = res.data;
      setChains(
        data.map((d) => {
          return { id: String(d.evmChainId), label: d.name };
        })
      );
      setIsFetching(false);
    });
  };

  const getBlock = (id: string) => {
    setIsFetching(true);
    axiosNoves
      .post(`/eth_archive`, {
        method: 'eth_blockNumber',
        id,
        params: [],
      })
      .then((res) => {
        const data = res.data;
        setBlock(data);
        setIsFetching(false);
      });
  };

  return { getChains, chains, getBlock, block, isFetching };
};
