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
      accessorKey: 'status',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
      cell: ({ row }) => {
        const value: string = row.getValue('Status');
        return (
          <div
            className={cn('p-2 inline-flex items-center justify-center', {
              'text-red-400': value.toLowerCase() !== 'success',
              'text-green-400': value.toLowerCase() === 'success',
            })}>
            {value.toLowerCase() === 'success' ? <CheckIcon /> : <Cross1Icon />}
            {row.getValue('Status')}
          </div>
        );
      },
      enableHiding: true,
    },
    {
      id: 'Id',
      accessorKey: 'id',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
      cell: ({ row }) => <div>{row.getValue('Id')}</div>,
      enableHiding: true,
    },
    {
      id: 'From',
      accessorKey: 'from',
      header: ({ column }) => <DataTableColumnHeader column={column} title="From" />,
      cell: ({ row }) => <div>{row.getValue('From')}</div>,
      enableHiding: true,
    },
    {
      id: 'To',
      accessorKey: 'to',
      header: ({ column }) => <DataTableColumnHeader column={column} title="To" />,
      cell: ({ row }) => <div>{row.getValue('To')}</div>,
      enableHiding: true,
    },
    {
      id: 'Function',
      accessorKey: 'function',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Function" />,
      cell: ({ row }) => <div>{row.getValue('Function')}</div>,
      enableHiding: true,
    },
    {
      id: 'Network',
      accessorKey: 'network',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Network" />,
      cell: ({ row }) => <div>{row.getValue('Network')}</div>,
      enableHiding: true,
    },
    {
      id: 'Block',
      accessorKey: 'block',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Block" />,
      cell: ({ row }) => <div>{row.getValue('Block')}</div>,
      enableHiding: true,
    },
    {
      id: 'When',
      accessorKey: 'when',
      header: ({ column }) => <DataTableColumnHeader column={column} title="When" />,
      cell: ({ row }) => <div>{moment(row.getValue('When')).format('YYYY-DD-MM')}</div>,
      enableHiding: true,
    },
  ];

  return {
    transactionColumns,
  };
};
