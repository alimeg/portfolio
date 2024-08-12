import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles de Blog</h1>
      <p className="text-lg mb-8">
        Bienvenue sur ma page d'articles de blog. Voici une sélection de mes derniers écrits. Cliquez sur les titres pour lire les articles en entier.
      </p>
      <BlogPosts />
    </section>
  )
}
