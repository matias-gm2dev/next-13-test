import styles from './page-title.module.css';

interface PageTitleProps {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => <div className={styles.welcome}>{children}</div>;
