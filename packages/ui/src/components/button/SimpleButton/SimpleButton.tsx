import styles from './SimpleButton.module.scss';
import { type SimpleButtonProps } from './SimpleButton.type';

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} type={'button'}>
      {text}
    </button>
  );
};

export default SimpleButton;
