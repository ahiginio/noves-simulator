import { useState } from 'react';
import axios from 'axios';
import { ERC20ABI } from '@/data/abi';
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
  headers: { apiKey: 'dd', 'Content-Type': 'application/json' },
});

export const axiosNovesSimulator = axios.create({
  baseURL: 'https://simulator-backend.dev.noves.fi',
  timeout: 1000,
  headers: { apiKey: 'dd', 'Content-Type': 'application/json' },
});

const axiosRPCBalancer = axios.create({
  baseURL: 'https://rpc-load-balancer.dev.noves.fi',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
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
        json_rpc: '2.0',
      })
      .then((res) => {
        const data = res.data;
        setBlock(data);
        setIsFetching(false);
      });
  };

  const getContractMethods = () => {
    setContractMethods(
      ERC20ABI.map((method) => {
        return { id: method.name, label: method.name };
      })
    );
  };

  const simulateTransaction = async (payload: any) => {
    axiosNovesSimulator.post('/simulate', payload).then((res) => {
      setTransaction(res.data);
    });
  };

  return {
    transaction,
    getChains,
    chains,
    getBlock,
    block,
    isFetching,
    getContractMethods,
    contractMethods,
    simulateTransaction,
  };
};
