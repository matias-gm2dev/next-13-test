'use client';
import { PageTitle } from 'app/components/PageTitle/PageTitle';
import styles from './posts.module.css';
import { Button } from 'app/components/Button/Button';
import { useRouter } from 'next/navigation';

export default function Posts() {
  const router = useRouter();

  const navigate = (to: string) => router.push(to);

  return (
    <article className={styles.container}>
      <PageTitle>
        <h1>Welcome to Post List</h1>
      </PageTitle>
      <p>Navigate to some post:</p>
      <Button onClick={() => navigate('/posts/1')}>Post 1</Button>
      <Button onClick={() => navigate('/posts/2')}>Post 2</Button>
      <Button onClick={() => navigate('/posts/3')}>Post 3</Button>
      <Button onClick={() => navigate('/posts/4')}>Post 4</Button>
      <Button onClick={() => navigate('/posts/5')}>Post 5</Button>
    </article>
  );
}
