'use client';
import * as React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { UseControllerProps, useFormContext } from 'react-hook-form';
import { InputProps } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

export default function FormSelect(props: Props) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={props.disabled}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={props.placeholder || 'Select one'} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {props.items?.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {props.description && (
            <FormDescription className="text-xs text-gray-400">{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
