export const metadata = {
  title: 'Rapport',
  description: 'Bienvenue sur ma page rapport.',
};

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">Rapport sur les Choix de Design</h1>
      <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">
        Ce rapport détaille les choix faits pour ce portfolio, notamment en ce qui concerne les styles et les couleurs utilisés. 
        L’objectif est de vous fournir une compréhension claire de l'approche esthétique adoptée et des raisons derrière chaque choix.
      </p>

      {/* Choix des Couleurs */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Choix des Couleurs</h2>
        <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
          Les couleurs ont été choisies pour leur capacité à offrir un contraste suffisant tout en restant harmonieuses. 
          Le bleu a été utilisé pour les éléments importants afin d’attirer l’attention sans être trop agressif. 
          Les tons de gris fournissent une base neutre et professionnelle qui permet aux éléments colorés de ressortir. 
          Le choix du blanc pour les arrière-plans assure une clarté et une lisibilité optimales.
        </p>
      </div>

      {/* Choix des Images */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Choix des Images</h2>
        <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
          Les images utilisées dans le portfolio sont choisies pour compléter le contenu et enrichir l'expérience visuelle. 
          Les illustrations et les captures d'écran sont sélectionnées pour leur qualité et leur pertinence par rapport aux projets 
          et aux articles de blog. Elles servent à renforcer les points clés et à fournir une représentation visuelle du travail réalisé.
        </p>
      </div>

      {/* Disposition des Pages */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Disposition des Pages</h2>
        <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
          La disposition des pages est conçue pour offrir une navigation fluide et intuitive. 
          Les éléments importants sont placés de manière à ce qu'ils soient facilement accessibles et visibles. 
          Le menu de navigation fixe assure que les utilisateurs peuvent accéder rapidement aux différentes sections du portfolio, 
          tandis que les sections principales sont bien définies pour offrir une lecture facile.
        </p>
      </div>

      {/* Avantages et Inconvénients de Next.js et Vercel */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">Avantages et Inconvénients de Next.js et Vercel</h2>

        {/* Next.js */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Next.js</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-200">Avantages</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>**Rendu côté serveur (SSR)**: Permet d'améliorer le SEO et d'accélérer le temps de chargement initial des pages.</li>
              <li>**Pré-rendu (Static Generation)**: Génère des pages statiques lors du build, ce qui améliore la performance.</li>
              <li>**API Routes**: Offre une solution simple pour gérer les API dans le même projet.</li>
              <li>**Richesse de l'écosystème**: Intégration facile avec des outils modernes comme React, TypeScript, etc.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-200">Inconvénients</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>**Complexité**: Peut être complexe à configurer pour les développeurs débutants.</li>
              <li>**Performance**: Certaines fonctionnalités peuvent entraîner des temps de compilation plus longs pour les projets volumineux.</li>
            </ul>
          </div>
        </div>

        {/* Vercel */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-300">Vercel</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-200">Avantages</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>**Déploiement Simplifié**: Offre une intégration facile avec GitHub pour des déploiements automatisés.</li>
              <li>**Performance**: Optimise les performances avec un CDN mondial et des optimisations automatiques pour Next.js.</li>
              <li>**Fonctionnalités Gratuites**: Offre un plan gratuit avec des fonctionnalités généreuses pour les projets personnels et de petite taille.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-200">Inconvénients</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
              <li>**Coût**: Peut devenir coûteux pour les projets de grande envergure avec des besoins élevés en ressources.</li>
              <li>**Limitations du Plan Gratuit**: Le plan gratuit a des limitations sur le nombre de déploiements et la quantité de ressources disponibles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
