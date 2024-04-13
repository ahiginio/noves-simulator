import { InputProps } from '@/components/ui/input';
import * as React from 'react';
export type OwnHTMLInputAttributes = Omit<InputProps, 'defaultValue'>;

export interface DefaultPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {}
