import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './button';
import { Icons } from '../icons';

const EditChainCard = ({ isFetching }) => {
  return (
    <Card className="bg-[#222225] p-2">
      <CardContent className="flex justify-between items-center p-2 text-md">
        {isFetching ? (
          <>
            <p>Contract Name</p>
            <Button className="text-md h-8">Edit chain</Button>
          </>
        ) : (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        )}
      </CardContent>
    </Card>
  );
};

export default EditChainCard;
