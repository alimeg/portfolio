import React from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour toute demande ou question.',
};

export default function ContactPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Contactez-moi</h1>
      <p className="text-lg mb-6">
        Si vous avez des questions, des demandes ou si vous souhaitez discuter de potentielles collaborations, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
      </p>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-2xl font-semibold mb-4">Formulaire de Contact</h2>
          <form
            action="https://formspree.io/f/mblryzvy" // je dipose de 50 réceptions de mails par mois
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
