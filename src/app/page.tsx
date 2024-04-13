import FormExample from '@/components/forms/form-example';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="container">
      <Button>Click me</Button>
      <Input />
      <FormExample />
    </div>
  );
}
