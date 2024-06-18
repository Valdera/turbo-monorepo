import { Button } from '@mantine/core';
import styles from './SimpleButton.module.scss';
import { type SimpleButtonProps } from './SimpleButton.type';

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      className={styles.button}
      color={'blue.2'}
      onClick={onClick}
      type="button"
    >
      {text}
    </Button>
  );
};

export default SimpleButton;
