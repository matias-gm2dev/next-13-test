import { PageTitle } from 'app/components/PageTitle/PageTitle';
import styles from './analytics.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <PageTitle>
        <h2>Analytics</h2>
      </PageTitle>
    </section>
  );
}
