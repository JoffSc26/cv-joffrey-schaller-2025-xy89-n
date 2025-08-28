import React from "react";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mon CV</h1>

      <img src="/assets/profile.jpg" alt="Photo" className="mb-4 w-48 rounded" />

      <p>Bienvenue sur mon CV interactif !</p>

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
