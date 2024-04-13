import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

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

export const simulateTransaction = createAsyncThunk(
  'main/simulateTransaction',
  async (payload: unknown) => {
    let query;
    try {
      query = await axiosNovesSimulator.post('/simulate', payload);
      return query.data;
    } catch (err) {
      const axiosError: { message: string } = (err as AxiosError).response?.data as {
        code: number;
        message: string;
      };
      return Promise.reject(axiosError.message);
    }
  }
);
export const getBlock = createAsyncThunk('main/getBlock', async (id: string | number) => {
  let query;
  try {
    query = await axiosRPCBalancer.post(`/eth_archive`, {
      method: 'eth_blockNumber',
      id,
      params: [],
      json_rpc: '2.0',
    });
    return query.data;
  } catch (err) {
    const axiosError: { message: string } = (err as AxiosError).response?.data as {
      code: number;
      message: string;
    };
    return Promise.reject(axiosError.message);
  }
});
