// app/page.tsx

import Link from 'next/link';
import { getSortedPostsMetaData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsMetaData();

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
