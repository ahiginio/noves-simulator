import { useState } from 'react';
import axios from 'axios';
import { ERC20ABI } from '@/data/abi'
import { TransactionData } from '@/types';

interface Chain {
  id: string;
  label: string;
}

interface EVMResponse {
  evmChainId: number;
  name: string;
  ecosystem: string;
}

export const axiosNoves = axios.create({
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
  const [contractMethods, setContractMethods] = useState<object | null>(null);
  const [transaction, setTransaction] = useState<TransactionData | null>(null);

  const getChains = async () => {
    setIsFetching(true);
    /* axiosNoves.get(`/evm/chains`).then((res) => {
      const data: EVMResponse[] = res.data;
      setChains(
        data.map((d) => {
          return { id: String(d.evmChainId), label: d.name };
        })
      );
      setIsFetching(false);
    }); */
    setChains(chains);
    setIsFetching(false);
    return chains;
  };

  const getBlock = (id: string) => {
    setIsFetching(true);
    axiosRPCBalancer
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

<<<<<<< HEAD:src/app/hooks/useFetch.tsx
  const getContractMethods = () => {
    setContractMethods(
      ERC20ABI.map((method) => {
        return { id: method.name, label: method.name };
      })
    );
  };

  return { getChains, chains, getBlock, block, isFetching, getContractMethods };
=======
  const getTransaction = (chainSelected: string, txHash: string) => {
    setIsFetching(true);
    axiosNoves.get(`/evm/${chainSelected}/tx/${txHash}`).then((res) => {
      const data: TransactionData = res.data;
      setTransaction(data);
      setIsFetching(false);
    });
  };

  return { getChains, chains, getBlock, block, isFetching, getTransaction, transaction };
>>>>>>> fab4733090ee2c67f917ffa3eac35d30a7f1c9a3:src/hooks/useFetch.tsx
};
