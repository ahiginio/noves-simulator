'use client';
import { useTransactionDetailColumns } from '@/components/tables/columns/transactionDetail';
import { DataTable } from '@/components/tables/data-table';
import { useAppSelector } from '@/store/hooks';

export default function TransactionPage() {
  const { transactionSelected: transaction, isFetching } = useAppSelector((state) => state.main);
  console.log({ transaction });
  const { transactionDetailColumns } = useTransactionDetailColumns();
  return (
    <div>
      <h2 className="text-2xl font-semibold">Transaction detail</h2>
      <div className="mt-4 flex flex-row items-center text-sm text-gray-400 space-x-4">
        <span className="">Status: {transaction?.txReceipt.status}</span>
        <span className="">Block: {transaction?.rawTx.input}</span>
        <span className="">Gas price: {transaction?.rawTx.gasPrice}</span>
        <span className="">Gas used: {transaction?.rawTx.gas}</span>
        <span className="">Sender: {transaction?.rawTx.from}</span>
        <span className="">Receiver: {transaction?.rawTx.to}</span>
      </div>

      <DataTable
        columns={transactionDetailColumns}
        totalCount={transaction?.txReceipt.logs?.length || 0}
        data={transaction?.txReceipt.logs || []}
        isFetching={isFetching}
        fetchData={() => {}}
      />
    </div>
  );
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
