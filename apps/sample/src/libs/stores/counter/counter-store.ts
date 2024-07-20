import { create } from 'zustand';
import type { CounterSlice } from './slices/counter-slice';
import { createCounterSlice } from './slices/counter-slice';

type StoreState = CounterSlice;

const useCounterStore = create<StoreState>()((...a) => ({
  ...createCounterSlice(...a),
}));

export default useCounterStore;
