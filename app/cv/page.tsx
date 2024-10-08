import React from 'react';

export const metadata = {
  title: 'Contact',
  description: 'Contactez-moi pour toute demande ou question.',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#003366] dark:text-[#cce0ff]">Contactez-moi</h1> 
      <p className="text-base mb-6 text-gray-800 dark:text-gray-300">
        Si vous avez des questions, des demandes ou si vous souhaitez discuter de potentielles collaborations, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto dark:bg-gray-800 dark:shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#003366] dark:text-[#cce0ff]">Formulaire de Contact</h2> 
        <form
          action="https://formspree.io/f/mblryzvy" // Je dispose de 50 réceptions de mails par mois
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-300">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-base dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
              placeholder="Votre nom complet"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-base dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
              placeholder="Votre adresse email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full p-4 border border-gray-300 rounded-lg text-base dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#0066CC] text-white rounded-lg hover:bg-[#005bb5] transition-colors duration-300 dark:bg-[#005bb5] dark:hover:bg-[#004080]"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
