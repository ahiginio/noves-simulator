import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as React from 'react';
interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
}
const CardWrapper = ({ title, children }: CardWrapperProps) => {
  return (
    <Card className="border-none max-w-[600px]">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
};
export default CardWrapper;
