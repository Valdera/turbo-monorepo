import { Button, Skeleton } from '@mantine/core';
import { cn } from '@/libs/utils';
import styles from './Counter.module.scss';
import type { CounterProps } from './Counter.type';

const Counter: React.FC<CounterProps> = ({
  data,
  isLoading = false,
  isError = false,
  onIncrement = () => {
    //do nothing
  },
  onDecrement = () => {
    //do nothing
  },
}) => {
  if (isLoading) {
    return <Skeleton className={styles.container} />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={'flex gap-5 items-center'}>
      <Button
        onClick={() => {
          onDecrement();
        }}
      >
        -
      </Button>
      <div className={cn(styles.container, 'bg-slate-50')}>
        <p className={'text-3xl'}>{data?.count}</p>
      </div>
      <Button
        onClick={() => {
          onIncrement();
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
