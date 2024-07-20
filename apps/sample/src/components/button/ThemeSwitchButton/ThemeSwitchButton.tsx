import type { ActionIconProps } from '@mantine/core';
import { ActionIcon, Menu } from '@mantine/core';
import type { ThemeEntry } from '@repo/theme';
import { ThemeContext } from '@repo/theme';
import { IconBrush } from '@tabler/icons-react';
import { useContext } from 'react';
import { cn } from '@/libs/utils';
import style from './ThemeSwitchButton.module.scss';

const ThemeSwitchButton: React.FC<ActionIconProps> = ({
  size = 'xl',
  ...props
}) => {
  const { theme, themeEntries, setTheme } = useContext(ThemeContext);

  return (
    <Menu shadow={'md'} width={200}>
      <Menu.Target>
        <ActionIcon
          aria-label={'theme icon'}
          className={style.button}
          gradient={{ from: 'violet', to: 'red', deg: 150 }}
          size={size}
          variant={'gradient'}
          {...props}
        >
          <IconBrush className={style.icon} size={10} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown className={style.dropdown}>
        {themeEntries.map((entry: ThemeEntry) => (
          <Menu.Item
            className={cn(
              style.menuItem,
              theme === entry.key && style.menuItemSelected
            )}
            key={entry.key}
            onClick={() => {
              setTheme(entry.key);
            }}
          >
            {entry.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSwitchButton;
