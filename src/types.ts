import { InputProps } from '@/components/ui/input';
import * as React from 'react';
export type OwnHTMLInputAttributes = Omit<InputProps, 'defaultValue'>;

export interface DefaultPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {}

export interface TransactionData {
  rawTx: {
    type: string;
    from: string;
    to: string;
    gas: number;
    gasPrice: number | null;
    value: number;
    input: string;
  };
  rawTraces: any[]; // Placeholder for raw traces data
  txReceipt: {
    status: number;
    gas: number;
    gasUsed: number;
    logs: LogEntry[];
  };
}

export interface LogEntry {
  logIndex: number;
  address: string;
  data: string;
  topics: string[];
}
