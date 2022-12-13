import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, disabled, onClick }: ButtonProps) => (
  <button onClick={onClick} className={styles.button} disabled={disabled}>
    {children}
  </button>
);
