'use client';

import { DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DataTableSortOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableSortOptions<TData>({ table }: DataTableSortOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="sm" className="ml-auto hidden h-8 lg:flex">
          <CaretSortIcon className="mr-2 h-4 w-4" />
          Sort by
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Sort columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanSort())
          .map((column) => {
            return (
              <Button
                key={column.id}
                variant="ghost"
                className="w-full text-left mx-0 px-2 justify-start data-[state=open]:bg-accent"
                onClick={() => column.toggleSorting()}>
                {column.getIsSorted() === 'desc' ? (
                  <ArrowDownIcon className="h-4 w-4" />
                ) : column.getIsSorted() === 'asc' ? (
                  <ArrowUpIcon className="h-4 w-4" />
                ) : (
                  <CaretSortIcon className="h-4 w-4" />
                )}
                <span className="ml-2 capitalize text-xs">{column.id}</span>
              </Button>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
