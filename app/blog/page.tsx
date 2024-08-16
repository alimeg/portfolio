import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Découvrez mes derniers articles de blog.',
}

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#003366]"> {/* Titre en bleu foncé */}
        Articles de Blog
      </h1>
      <p className="text-lg mb-6 text-gray-800">
        Explorez mes derniers articles sur divers sujets. Cliquez sur les titres pour lire l'intégralité des articles.
      </p>
      <BlogPosts />
    </section>
  )
}
