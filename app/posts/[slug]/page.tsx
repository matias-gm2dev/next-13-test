import { PageTitle } from 'app/components/PageTitle/PageTitle';
import Image from 'next/image';
import styles from './post.module.css';
import imageSample from 'public/white-car.jpeg';

interface PostProps {
  params: { slug: string };
  searchParams: {};
}

export default function Post({ params }: PostProps) {
  return (
    <article className={styles.container}>
      <PageTitle>
        <h1>Post #{params.slug}</h1>
      </PageTitle>
      <Image src={imageSample} alt="White Car" />
    </article>
  );
}
