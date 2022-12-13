import Image from 'next/image';
import { PageTitle } from './components/PageTitle/PageTitle';
import styles from './page.module.css';

export default function Home() {
  return (
    <article className={styles.container}>
      <PageTitle>
        <h1>Welcome to Next 13 Beta</h1>
      </PageTitle>
    </article>
  );
}
