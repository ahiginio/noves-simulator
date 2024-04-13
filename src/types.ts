import { InputProps } from '@/components/ui/input';
import * as React from 'react';
export type OwnHTMLInputAttributes = Omit<InputProps, 'defaultValue'>;

export interface DefaultPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {}

export interface TransactionData {
  txTypeVersion: number;
  chain: string;
  accountAddress: string;
  classificationData: {
    type: string;
    source: {
      type: string;
    };
    description: string;
    protocol: {
      name: string;
    };
    sent: SentTransaction[];
    received: any[]; // Assuming this can be an empty array or something specific
  };
  rawTransactionData: {
    transactionHash: string;
    fromAddress: string;
    toAddress: string;
    blockNumber: number;
    gas: number;
    gasPrice: number;
    transactionFee: {
      amount: string;
      token: {
        symbol: string;
        name: string;
        decimals: number;
        address: string;
      };
    };
    timestamp: number;
  };
}

export interface SentTransaction {
  action: string;
  from: {
    name: string;
    address: string;
  };
  to: {
    name: string | null;
    address: string | null;
  };
  amount: string;
  token: {
    symbol: string;
    name: string;
    decimals: number;
    address: string;
  };
}
