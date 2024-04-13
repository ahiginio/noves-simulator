import { InputProps } from '@/components/ui/input';

export type OwnHTMLInputAttributes = Omit<InputProps, 'defaultValue'>;

export interface DefaultPageProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {}
