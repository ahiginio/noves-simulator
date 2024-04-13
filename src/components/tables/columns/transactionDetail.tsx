'use client';

import { ColumnDef } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { CheckIcon, Cross1Icon } from '@radix-ui/react-icons';
import moment from 'moment';
import { DataTableColumnHeader } from '../components/data-table-column-header';
/*  status id from to function network block when  */
export type TransactionDetail = {};

export const useTransactionDetailColumns = () => {
  const transactionDetailColumns: ColumnDef<TransactionDetail>[] = [
    {
      id: 'LogIndex',
      accessorKey: 'logIndex',
      header: ({ column }) => <DataTableColumnHeader column={column} title="LogIndex" />,
      cell: ({ row }) => {
        const value: string = row.getValue('LogIndex');
        return <div>{row.getValue('LogIndex')}</div>;
      },
      enableHiding: true,
    },
    {
      id: 'Topics',
      accessorKey: 'topics',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Topics" />,
      cell: ({ row }) => <div>{row.getValue('Topics')}</div>,
      enableHiding: true,
    },
  ];

  return {
    transactionDetailColumns,
  };
};
