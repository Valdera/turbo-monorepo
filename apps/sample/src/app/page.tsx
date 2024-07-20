'use client';

import { Flex, Title } from '@mantine/core';
import ThemeSwitchButton from '@/components/button/ThemeSwitchButton/ThemeSwitchButton';
import Counter from '@/components/counter/Counter';
import useCounterStore from '@/libs/stores/counter/counter-store';
import style from './page.module.scss';

const Page: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <main>
      <Flex
        align={'center'}
        className={style.container}
        direction={'column'}
        gap={'lg'}
        justify={'center'}
      >
        <Title mb={'lg'}>
          Change application <span className={style.highlight}>theme</span> here{' '}
          <ThemeSwitchButton className={'inline-block'} />
        </Title>
        <Counter
          data={{ count }}
          onDecrement={decrement}
          onIncrement={increment}
        />
      </Flex>
    </main>
  );
};

export default Page;
