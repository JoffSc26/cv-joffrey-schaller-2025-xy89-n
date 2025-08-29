import React from "react";
import profile from "/assets/profile.jpg"; // Import direct

function App() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Joffrey Schaller</h1>
      <p className="mb-6 text-gray-700">Développeur web junior - Passionné par React et Tailwind</p>

      {/* Photo */}
      <img
        src={profile}
        alt="Photo de profil"
        className="mb-6 w-48 rounded shadow"
      />

      {/* Section expériences */}
      <h2 className="text-2xl font-semibold mb-4">Expériences</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Stage en développement web - Entreprise X (2024)</li>
        <li>Projet universitaire : site e-commerce en React</li>
      </ul>

      {/* Section formation */}
      <h2 className="text-2xl font-semibold mb-4">Formation</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Master Informatique - Université Y (2025)</li>
      </ul>

      {/* Lien mémoire */}
      <a
        href="/assets/memoire.pdf"
        target="_blank"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
      >
        Voir le mémoire
      </a>
    </div>
  );
}

export default App;
