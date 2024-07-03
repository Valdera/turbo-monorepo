import type { ActionIconProps } from '@mantine/core';
import { ActionIcon, Menu, useMantineColorScheme } from '@mantine/core';
import { IconBrush } from '@tabler/icons-react';
import { useContext } from 'react';
import { themeManager } from '@/lib/theme';
import ThemeContext from '@/lib/theme/ThemeContext';
import { cn } from '@/lib/utils';
import style from './ThemeSwitchButton.module.scss';

const ThemeSwitchButton: React.FC<ActionIconProps> = ({
  size = 'xl',
  ...props
}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setColorScheme } = useMantineColorScheme();

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
        {themeManager.getThemeEntries().map((entry) => (
          <Menu.Item
            className={cn(
              style.menuItem,
              theme === entry.key && style.menuItemSelected
            )}
            key={entry.key}
            onClick={() => {
              setTheme(entry.key);
              setColorScheme(entry.category);
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
