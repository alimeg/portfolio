import React from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour toute demande ou question.',
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contactez-moi</h1>
      <p className="text-lg mb-8">
        Si vous avez des questions, des demandes ou si vous souhaitez discuter de potentielles collaborations, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
      </p>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-16"> 
          <h2 className="text-2xl font-semibold mb-4">Formulaire de Contact</h2>
          <form
            action="https://formspree.io/f/mblryzvy" // Je dispose de 50 réceptions de mails par mois
            method="POST"
            className="space-y-6" // Increased spacing between form elements
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg" // Increased padding and font size
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg" // Increased padding and font size
                placeholder="Votre adresse email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={8} // Increased rows for a larger textarea
                required
                className="w-full p-4 border border-gray-300 rounded-lg text-lg" // Increased padding and font size
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
