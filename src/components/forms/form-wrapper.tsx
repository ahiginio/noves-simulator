'use client';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLAttributes } from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

export interface FormProps extends HTMLAttributes<HTMLDivElement> {}

export default function FormWrapper({ className, ...props }: FormProps) {
  /* TODO:  */
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
        {props.children}
      </form>
    </FormProvider>
  );
}
