import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article
            key={post.slug}
            className="border border-gray-300 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-3 text-[#003366] dark:text-[#66b2ff]">
              {post.metadata.title}
            </h2>
            <p className="text-gray-800 mb-3 dark:text-gray-300">
              {post.metadata.summary}
            </p>
            <time className="text-gray-600 text-sm dark:text-gray-400">
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#0066CC] hover:underline dark:text-[#66b2ff] hover:underline"
              >
                {formatDate(post.metadata.publishedAt, false)} {'>>'}
              </Link>
            </time>
          </article>
        ))}
    </div>
  );
}
