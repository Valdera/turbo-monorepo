'use client';

import { Button } from '@mantine/core';
import { SimpleButton } from '@repo/ui';

const Page: React.FC = () => {
  const handleOnClick = (): void => {
    console.log('Button clicked');
  };

  return (
    <main>
      <div className="bg-primary-800">sample text:</div>
      <Button>dfg</Button>
      <SimpleButton onClick={handleOnClick} text={'Test Button'} />
    </main>
  );
};

export default Page;
