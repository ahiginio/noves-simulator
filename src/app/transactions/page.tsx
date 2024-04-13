'use client';

import { useTransactionColumns } from '@/components/tables/columns/transactions';
import { DataTable } from '@/components/tables/data-table';
import { useAppSelector } from '@/store/hooks';

export default function TransactionPage() {
  const { isFetching, transactions } = useAppSelector((state) => state.main);
  const { transactionColumns } = useTransactionColumns();
  return (
    <>
      <h2 className="w-full font-semibold text-2xl">Transaction List</h2>
      <DataTable
        columns={transactionColumns}
        data={transactions}
        totalCount={transactions.length}
        isFetching={isFetching}
        fetchData={() => {}}
      />
    </>
  );
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
