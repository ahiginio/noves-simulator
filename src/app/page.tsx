'use client';
import CardWrapper from '@/components/forms/components/card-content';
import FormInput from '@/components/forms/components/form-input';
import FormSelect from '@/components/forms/components/form-select';
import FormSwitch from '@/components/forms/components/form-switch';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import EditChainCard from '@/components/ui/edit-chain-card';
import { chains } from '@/data/chains';
import { numToHexa } from '@/lib/utils';
import { getBlock, simulateTransaction } from '@/store/api/main.api';
import { useAppDispatch } from '@/store/hooks';
import { setTransaction } from '@/store/slices/main.slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const CURRENT_BLOCK = '19649704';
export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const schema = z.object({
    to: z.string(),
    network: z.string(),
    blockReference: z.string(),
    pendingBlock: z.boolean(),
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      blockReference: CURRENT_BLOCK,
      pendingBlock: true,
    },
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
    watch,
  } = form;

  const { pendingBlock, network } = watch();

  useEffect(() => {
    if (!network) return;
    dispatch(getBlock(network));
  }, [network]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {
    const blockReference = `0x${numToHexa(Number(values.blockReference))}`;
    dispatch(
      simulateTransaction({
        unsignedTransaction: { to: values.to },
        blockReference,
      })
    ).then((res) => {
      dispatch(setTransaction(res.payload));
      router.push('/transaction');
    });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10 p-20">
        <CardWrapper title="Contract">
          <FormInput label="Contract address" name="to" />
          <FormSelect
            name="network"
            label="Network"
            placeholder="Select network for this address"
            items={chains.map((c) => ({ id: String(c.evmChainId), label: c.name }))}
            description={
              <div>
                <EditChainCard isFetching={true} />
              </div>
            }
          />
        </CardWrapper>
        <CardWrapper title="Transaction Parameters">
          <FormSwitch label="Use pending block" name="pendingBlock" />
          <FormInput
            label="Block number"
            name="blockReference"
            description={`Current Block: ${CURRENT_BLOCK}`}
            type="number"
            disabled={pendingBlock}
          />
          <FormInput
            label="Tx index"
            name="tx"
            description={'Maximum Block Index:'}
            disabled={pendingBlock}
          />
          <FormInput label="From" name="from" />
          <FormInput label="Gas" name="gas" placeholder="0000" type="number" />
          <FormInput label="Gas Price" name="gasPrice" placeholder="0000" type="number" />
          <FormInput label="Value" name="value" placeholder="0" type="number" />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} Simulate
            transaction
          </Button>
        </CardWrapper>
      </form>
    </FormProvider>
  );
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
