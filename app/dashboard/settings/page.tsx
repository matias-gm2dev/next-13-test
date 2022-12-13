import { PageTitle } from 'app/components/PageTitle/PageTitle';
import styles from './settings.module.css';

export default function Settings() {
  return (
    <section className={styles.container}>
      <PageTitle>
        <h2>Settings</h2>
      </PageTitle>
    </section>
  );
}
