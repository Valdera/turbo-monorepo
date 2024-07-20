'use client';

import { Flex, Title } from '@mantine/core';
import ThemeSwitchButton from '@/components/button/ThemeSwitchButton/ThemeSwitchButton';
import style from './page.module.scss';

const Page: React.FC = () => {
  return (
    <main>
      <Flex
        align={'center'}
        className={style.container}
        direction={'column'}
        justify={'center'}
      >
        <Title mb={'lg'}>
          Change application <span className={style.highlight}>theme</span> here{' '}
          <ThemeSwitchButton className={'inline-block'} />
        </Title>
      </Flex>
    </main>
  );
};

export default Page;
