export interface CounterProps {
  data?: {
    count: number;
  };
  isLoading?: boolean;
  isError?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
