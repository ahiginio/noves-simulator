'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCheckIcon, CrossIcon } from 'lucide-react';
import { DataTableColumnHeader } from '../components/data-table-column-header';
import moment from 'moment';
import { cn } from '@/lib/utils';
import { CheckIcon, CircleIcon, Cross1Icon } from '@radix-ui/react-icons';
/*  status id from to function network block when  */
export type Transaction = {};

export const useTransactionColumns = () => {
  const transactionColumns: ColumnDef<Transaction>[] = [
    {
      id: 'Status',
      accessorKey: 'txReceipt.status',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const value = row.getValue('Status') === 1;
        return (
          <div
            className={cn('p-2 inline-flex items-center justify-center', {
              'text-red-400': !value,
              'text-green-400': value,
            })}>
            {value ? <CheckIcon /> : <Cross1Icon />}
            {value ? 'Success' : 'Failed'}
          </div>
        );
      },
      enableHiding: true,
    },
    {
      id: 'Id',
      accessorKey: 'txReceipt.logs[0].logIndex',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
      cell: ({ row }) => <div>{row.getValue('Id')}</div>,
      enableHiding: true,
    },
    {
      id: 'From',
      accessorKey: 'rawTx.from',
      header: ({ column }) => <DataTableColumnHeader column={column} title="From" />,
      cell: ({ row }) => <div>{row.getValue('From')}</div>,
      enableHiding: true,
    },
    {
      id: 'To',
      accessorKey: 'rawTx.to',
      header: ({ column }) => <DataTableColumnHeader column={column} title="To" />,
      cell: ({ row }) => <div>{row.getValue('To')}</div>,
      enableHiding: true,
    },
  ];

  return {
    transactionColumns,
  };
};
