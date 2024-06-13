'use client';

import { SimpleButton } from '@repo/ui';

const Page: React.FC = () => {
  const handleOnClick = (): void => {
    console.log('Button clicked');
  };

  return (
    <main>
      <SimpleButton onClick={handleOnClick} text={'Test Button'} />
    </main>
  );
};

export default Page;
