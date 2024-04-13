'use client';
import { useFetch } from '@/hooks/useFetch';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TransactionPage({
  params,
}: {
  params: { chainSelected: string; txHash: string };
}) {
  const { chainSelected, txHash } = params;
  const { getTransaction, transaction } = useFetch();
  useEffect(() => {
    getTransaction(chainSelected, txHash);
  }, [txHash, chainSelected]);

  return <div></div>;
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
