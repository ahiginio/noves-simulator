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
import { Checkbox } from '@/components/ui/checkbox';
import { InputProps } from '@/components/ui/input';

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

export default function FormCheckbox(props: Props) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={props.name}
      render={() => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          {props.items &&
            props.items.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name={props.name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter((value: string) => value !== item.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                      {props.description && (
                        <FormDescription className="text-xs text-gray-400">
                          {props.description}
                        </FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ))}
        </FormItem>
      )}
    />
  );
}
