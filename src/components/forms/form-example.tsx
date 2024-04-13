'use client';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLAttributes } from 'react';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

export interface FormProps extends HTMLAttributes<HTMLDivElement> {}

export default function FormExample({ className, ...props }: FormProps) {
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
      <div className={cn('grid gap-6', className)} {...props}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {props.children}
        </form>
      </div>
    </FormProvider>
  );
}
