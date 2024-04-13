'use client';
import CardWrapper from '@/components/forms/components/card-content';
import FormInput from '@/components/forms/components/form-input';
import FormSelect from '@/components/forms/components/form-select';
import FormSwitch from '@/components/forms/components/form-switch';
import FormWrapper from '@/components/forms/form-wrapper';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

export default function Home() {
  const { chains, getChains, getBlock, block, isFetching } = useFetch();

  useEffect(() => {
    getChains();
  }, [getChains]);

  return (
    <FormWrapper>
      <CardWrapper title="Contract">
        <FormInput label="asdasd" name="asd" />
        <FormSelect name="block-number" label="Block number" items={chains} />
      </CardWrapper>
      <CardWrapper title="Transaction Parameters">
        <FormSwitch label="Use pending block" name="pending-block" />
        <FormInput label="Block number" name="block-number" description={<p>Current Block: </p>} />
        <FormInput label="Tx index" name="tx" description={<p>Maximum Block Index: </p>} />
        <FormInput label="From" name="from" />
        <FormInput label="Gas" name="gas" placeholder="0000" type="number" />
        <FormInput label="Gas Price" name="gas-price" placeholder="0000" type="number" />
        <FormInput label="Value" name="value" placeholder="0" type="number" />
        <Button type="submit">Simulate transaction</Button>
      </CardWrapper>
    </FormWrapper>
  );
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
