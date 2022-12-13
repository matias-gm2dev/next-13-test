import { PageTitle } from 'app/components/PageTitle/PageTitle';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <article className={styles.container}>
      <PageTitle>
        <h1>Welcome to Dashboard</h1>
      </PageTitle>
    </article>
  );
}
