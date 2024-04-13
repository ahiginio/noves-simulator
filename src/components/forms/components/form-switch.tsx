'use client';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputProps } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import * as React from 'react';
import { UseControllerProps, useFormContext } from 'react-hook-form';

interface Props extends InputProps {
  description?: string;
  name: string;
  label: string;
  placeholder?: string;
  items?: { id: string; label: string }[];
  transform?: {
    input: (value: unknown) => unknown;
    output: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  };
  rules?: UseControllerProps['rules'];
}

export default function FormSwitch(props: Props) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={props.name}
      render={() => (
        <FormItem>
          <FormField
            key={props.name}
            control={control}
            name={props.name}
            render={({ field }) => {
              return (
                <div className="flex flex-row items-center space-x-2">
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">{props.label}</FormLabel>
                  <FormMessage />
                </div>
              );
            }}
          />
        </FormItem>
      )}
    />
  );
}
