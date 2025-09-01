import React, { useState } from "react";
import profile from "/assets/profile.jpg";


// Contenu bilingue complet
const sectionsFR = {
  formation: {
    title: "Formation",
    content:
      "Master of Science en Management (Marketing), HEC Lausanne (2023-2025). Bachelor en Économie et Management, Université de Neuchâtel (2019-2023). Lycée Cantonal de Porrentruy, option physique et maths appliquées (2015-2019). Séjour linguistique au Canada (2023).",
  },
  experience: {
    title: "Expériences",
    content:
      "République et Canton du Jura – Remplaçant (2022-2025). Fondation Anne et Robert Bloch – Accueil visiteurs (2017-2023). Pharmacie Riat-Ville – Livraison (2018). Football en club – Capitaine (2005-2018).",
  },
  competences: {
    title: "Compétences",
    content:
      "Marketing, CRM, Analyse comportement consommateur, Microsoft Office, Canva, R/RStudio, Travail d’équipe, Coordination de projets, Packaging & étiquetage.",
  },
  projets: {
    title: "Projets",
    content:
      "Développement d’un programme de fidélité pour Nespresso. Stratégie d’entrée sur le marché pour Shark Rebellion. Création d’icône de marque pour un horloger de luxe.",
    pdf: true,
  },
  langues: {
    title: "Langues",
    content: "Français (natif), Anglais (B2-C1), Allemand (B1)",
  },
  interets: {
    title: "Centres d'intérêt",
    content:
      "Sports collectifs, compétitions internationales, musique (piano 10 ans, création musicale), voyages.",
  },
  contact: {
    title: "Contact",
    content:
      "joffrey2000@gmail.com | +41 77 418 02 56 | linkedin.com/in/joffreyschaller",
  },
};

const sectionsEN = {
  formation: {
    title: "Education",
    content:
      "MSc in Management (Marketing), HEC Lausanne (2023-2025). BSc in Economics and Management, University of Neuchâtel (2019-2023). Lycée Cantonal de Porrentruy, Physics and Applied Mathematics (2015-2019). Language immersion in Canada (2023).",
  },
  experience: {
    title: "Experience",
    content:
      "Republic and Canton of Jura – Substitute Teacher (2022-2025). Anne and Robert Bloch Foundation – Visitor Reception (2017-2023). Riat-Ville Pharmacy – Delivery (2018). Football Club – Team Captain (2005-2018).",
  },
  competences: {
    title: "Skills",
    content:
      "Marketing, CRM, Consumer Behavior Analysis, Microsoft Office, Canva, R/RStudio, Teamwork, Project Coordination, Packaging & Labeling.",
  },
  projets: {
    title: "Projects",
    content:
      "Loyalty program development for Nespresso. Market entry strategy for Shark Rebellion. Brand icon creation for a luxury watchmaker.",
    pdf: true,
  },
  langues: {
    title: "Languages",
    content: "French (native), English (B2-C1), German (B1)",
  },
  interets: {
    title: "Interests",
    content:
      "Team sports, international competitions, music (10 years piano, music creation), travel.",
  },
  contact: {
    title: "Contact",
    content:
      "joffrey2000@gmail.com | +41 77 418 02 56 | linkedin.com/in/joffreyschaller",
  },
};

export default function CVSite() {
  const [lang, setLang] = useState("FR");
  const [expanded, setExpanded] = useState(null);
  const data = lang === "FR" ? sectionsFR : sectionsEN;

  return (
    <div className="bg-[#fdf8f2] text-black min-h-screen font-[Times_New_Roman] p-6">
      {/* Header avec présentation */}
      <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-6">
        <img src={profile} alt="Photo" className="w-36 h-36 object-cover rounded-md" />
        <div>
          <h1 className="text-4xl font-bold">Joffrey Schaller</h1>
          <p className="mt-2 max-w-xl">
            Diplômé d’un Master en management, orientation marketing, à HEC Lausanne, avec une solide formation en stratégie de marque, marketing digital et gestion de projets transversaux. Expérience dans le développement de programmes clients, la communication intégrée et l’analyse comportementale.
          </p>
          <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="mt-3 border border-blue-900 text-blue-900 px-3 py-1 rounded"
          >
            {lang === "FR" ? "English" : "Français"}
          </button>
        </div>
      </div>

      {/* Grille des rectangles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {Object.keys(data).map((key) => (
          <div
            key={key}
            className={`bg-white border border-gray-300 rounded-lg shadow p-4 cursor-pointer transform transition-all duration-500
              ${expanded === key ? "col-span-full scale-105" : ""} hover:shadow-lg`}
            onClick={() => setExpanded(expanded === key ? null : key)}
          >
            {/* Titre toujours visible */}
            <h2 className="text-xl font-semibold mb-2">{data[key].title}</h2>

            {/* Contenu étendu seulement si sélectionné */}
            {expanded === key && (
              <div className="mt-2">
                <p className="text-sm whitespace-pre-line">{data[key].content}</p>

                {/* PDF mémoire pour Projets */}
                {data[key].pdf && (
                  <div className="mt-2">
                    <a href="/assets/memoire.pdf" target="_blank" rel="noopener" className="underline text-blue-900">
                      Voir / Télécharger le mémoire (PDF)
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
