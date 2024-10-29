// app/blog/[id]/page.tsx

import { getPostData, getSortedPostsMetaData } from '../../lib/posts';

export async function generateStaticParams() {
  const posts = getSortedPostsMetaData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.id);

  return (
    <article className='pt-10'>
      <h1>{postData.title}</h1>
      <div>{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
