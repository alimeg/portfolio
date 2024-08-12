import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <article key={post.slug} className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                {post.metadata.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.metadata.summary}</p>
            <time className="text-gray-500 text-sm">{formatDate(post.metadata.publishedAt, false)}</time>
          </article>
        ))}
    </div>
  );
}