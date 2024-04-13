'use client';

import { Table } from '@tanstack/react-table';

import { DataTableViewOptions } from './data-table-view-options';

import { DataTableSortOptions } from './data-table-sort-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  fetchedItems: number;
  totalCount: number;
}

export function DataTableToolbar<TData>({
  table,
  fetchedItems,
  totalCount,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center space-x-2">
        <DataTableViewOptions table={table} />
        <DataTableSortOptions table={table} />
      </div>
    </div>
  );
}
