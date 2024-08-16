export const metadata = {
  title: 'Rapport',
  description: 'Bienvenue sur ma page rapport.',
};

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Rapport sur les Choix de Design</h1>
      <p className="text-lg mb-6 text-gray-800">
        Ce rapport détaille les choix faits pour ce portfolio, notamment en ce qui concerne les styles et les couleurs utilisés. 
        L’objectif est de vous fournir une compréhension claire de l'approche esthétique adoptée et des raisons derrière chaque choix.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Choix des Couleurs</h2>
        <p className="text-base text-gray-700 mb-4">
          Les couleurs ont été choisies pour leur capacité à offrir un contraste suffisant tout en restant harmonieuses. 
          Le bleu a été utilisé pour les éléments importants afin d’attirer l’attention sans être trop agressif. 
          Les tons de gris fournissent une base neutre et professionnelle qui permet aux éléments colorés de ressortir.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Choix des Styles</h2>
        <p className="text-base text-gray-700">
          Les styles appliqués visent à créer une expérience utilisateur fluide et agréable. 
          Les bordures arrondies et les ombres douces sont utilisées pour ajouter de la profondeur et de la dimension aux éléments de l’interface. 
          La typographie est choisie pour sa lisibilité et sa capacité à transmettre un sentiment de sérieux et de professionnalisme.
        </p>
      </div>
    </section>
  );
}
