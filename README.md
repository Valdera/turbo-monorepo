# Monorepo

## Tech stack / tools used

- [x] Turbo Repo
- [x] Yarn (🔜 Bun or Pnpm)
- [x] Typescript
- [x] Next JS (`v14`)
- [x] Mantine
- [x] Tailwind
- [ ] Zustand
- [ ] TanStack Query
- [ ] React form
- [ ] Zod
- [ ] Docker
- [ ] Storybook
- [ ] Jest
- [ ] Lucide
- [ ] Framer Motion
- [ ] Next Auth
- [x] Rollup (`v4`)
- [x] Commitlint
- [x] Husky
- [x] Prettier
- [x] ESlint (`v8`) (🔜 `v9`)

## Commit Conventions

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

## Guides

### Add Global State (Zustand)

#### 1. Create Slice Interface

A "slice" refers to a subset of the state that is managed independently. It helps in organizing the state into smaller, manageable pieces, which can be particularly useful for larger applications. Each slice typically contains its own state, actions, and potentially some selectors.

**Example:**

```typescript
export interface CounterSlice {
  /*State*/
  count: number;

  /*Actions*/
  setCounter: (count: number) => void;
  increment: () => void;
  decrement: () => void;
}
```

#### 2. Implements Slice

Create a slice by implementing its state and actions. This encapsulates the logic related to that specific part of the state.

**Example:**

```typescript
export const createCounterSlice: StateCreator<CounterSlice> = (set, get) => {
  return {
    count: 0,
    setCounter: (count) => {
      set({ count });
    },
    increment: () => {
      counterApi.increment();
      set({ count: get().count + 1 });
    },
    decrement: () => {
      set({ count: get().count - 1 });
    },
  };
};
```

#### 3. Create Store

A "store" in Zustand is the central place where the state is kept. It's created using the create function from the Zustand library and holds the entire application state. The store can contain multiple slices, allowing you to break down the state management logic into more manageable parts.

**Example:**

```typescript
type StoreState = CounterSlice | AnotherSlice;

const useCounterStore = create<StoreState>()((...a) => ({
  ...createCounterSlice(...a),
  ...createAnotherSlice(...a)
}));
```

#### 4. Component Usage

Use the created store in your React components to manage and interact with the global state.

**Example:**

```typescript
const HomePage = () => {
  const { count, setCounter, increment, decrement } = useCounterStore();

  const { data, isLoading, isError } = useQuery(
    'count',
    async (): Promise<{ count: number }> => {
      const response = await fetch('/api/counter');
      return response.json();
    }
  );

  useEffect(() => {
    if (data) {
      setCounter(data.count);
    }
  }, [data, setCounter]);

  return (
    <div className={'flex gap-5 items-center'}>
      <Button onClick={() => onDecrement()}>-</Button>
      <div className={cn(styles.container, 'bg-slate-50')}>
        <p className={'text-3xl text-gray-700'}>{data?.count}</p>
      </div>
      <Button onClick={() => onIncrement()}>+</Button>
    </div>
  );
};

```

#### Additional Information

**Folder Structure:**

```md
├── libs
│   ├── stores
│   │   ├── [store-name]
│   │   │   ├── slices
│   │   │   │   ├── [slice-name]-slice.ts
│   │   │   │   └── ...
│   │   │   └── [store-name]-store.ts
```

**Links:**

- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)
