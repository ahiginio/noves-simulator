'use client';
import CardWrapper from '@/components/forms/components/card-content';
import FormInput from '@/components/forms/components/form-input';
import FormSelect from '@/components/forms/components/form-select';
import FormSwitch from '@/components/forms/components/form-switch';
import { Button } from '@/components/ui/button';
import { chains } from '@/data/chains';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

export default function Home() {
  const schema = z.object({});

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = form;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schema>) {}

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10 p-20">
        <CardWrapper title="Contract">
          <FormInput label="asdasd" name="asd" />
          <FormSelect
            name="block-number"
            label="Block number"
            items={chains.map((c) => ({ id: String(c.evmChainId), label: c.name }))}
          />
        </CardWrapper>
        <CardWrapper title="Transaction Parameters">
          <FormSwitch label="Use pending block" name="pending-block" />
          <FormInput label="Block number" name="block-number" description={'Current Block:'} />
          <FormInput label="Tx index" name="tx" description={'Maximum Block Index:'} />
          <FormInput label="From" name="from" />
          <FormInput label="Gas" name="gas" placeholder="0000" type="number" />
          <FormInput label="Gas Price" name="gas-price" placeholder="0000" type="number" />
          <FormInput label="Value" name="value" placeholder="0" type="number" />
          <Button type="submit">Simulate transaction</Button>
        </CardWrapper>
      </form>
    </FormProvider>
  );
}
/* {isFetching ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <></>} */
