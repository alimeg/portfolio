export const metadata = {
  title: 'Accueil',
  description: 'Bienvenue sur ma page d\'accueil.',
};

export default function Page() {
  return (
    <section className="p-6">
      <h1 className="font-semibold text-3xl mb-4">Meghalet Ali</h1>
      <p className="text-lg mb-4">Statut : Développeur Mobile et Full Stack</p>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Liens Professionnels</h2>
        <ul className="list-disc pl-5">
          <li><a href="https://www.linkedin.com/in/ali-meghalet" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/alimeg" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Autres Informations</h2>
        <p>Voici quelques informations supplémentaires si besoin.</p>
      </div>
    </section>
  );
}
