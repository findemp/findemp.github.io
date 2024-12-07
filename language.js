// Updated translations with navigation text
let currentLanguage = "en";
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navFeatures: "Features",
        navTestimonials: "Testimonials",
        navContact: "Contact",
        heroTitle: "We Find the Talent, <span class='highlight'>You Focus on Success</span>",
        heroSubtitle: "Let Findemp connect you with the best international talent. We handle the hard work while you grow your business.",
        heroCTA: "Get Started",
        featuresTitle: "Our Services",
        feature1Title: "Global Talent Search",
        feature1Desc: "Findemp uses advanced algorithms to identify the best candidates for your business worldwide.",
        feature2Title: "First-Round Interviews",
        feature2Desc: "We conduct initial interviews to shortlist the most qualified applicants for your role.",
        feature3Title: "Teleworking and Relocation",
        feature3Desc: "Whether you need remote workers or expatriates, we customize our services to match your needs.",
        aboutTitle: "About Us",
        aboutDesc: "Findemp specializes in connecting businesses with international talent. Using smart algorithms, we search for qualified employees and handle the initial interview process for you.",
        aboutProcessTitle: "Our Process:",
        aboutProcess: [
            "Submit your job requirements.",
            "We search globally for the perfect candidates.",
            "Our experts conduct first-round interviews.",
            "We present the top candidates for your final approval."
        ],
        testimonialsTitle: "What Our Clients Say",
        testimonial1: '"Findemp helped us find the perfect remote developer in less than two weeks. Their service is exceptional!"',
        testimonial1Author: "- TechCorp CEO",
        testimonial2: '"We found an incredible employee willing to relocate thanks to Findemp. Highly recommended!"',
        testimonial2Author: "- Global Solutions Manager",
        faqTitle: "Frequently Asked Questions",
        faq1Title: "What industries do you specialize in?",
        faq1Desc: "We serve a wide variety of industries, including tech, healthcare, finance, and more.",
        faq2Title: "How long does it take to find a candidate?",
        faq2Desc: "We usually find and interview candidates within two to three weeks, depending on the role.",
        contactTitle: "Contact Us",
        contactNameLabel: "Your Name:",
        contactEmailLabel: "Your Email:",
        contactIndustryLabel: "Your Industry:",
        contactMessageLabel: "Your Message:",
        contactCTA: "Send Message",
        footerText: "© 2024 Findemp. All rights reserved."
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navFeatures: "Services",
        navTestimonials: "Témoignages",
        navContact: "Contact",
        heroTitle: "Nous trouvons les talents, <span class='highlight'>Vous vous concentrez sur le succès</span>",
        heroSubtitle: "Findemp connecte votre entreprise aux meilleurs talents internationaux. Nous faisons le travail difficile pendant que vous développez votre activité.",
        heroCTA: "Commencez",
        featuresTitle: "Nos Services",
        feature1Title: "Recherche de Talents Globaux",
        feature1Desc: "Findemp utilise des algorithmes avancés pour identifier les meilleurs candidats pour votre entreprise dans le monde entier.",
        feature2Title: "Entretiens Préliminaires",
        feature2Desc: "Nous réalisons des entretiens initiaux pour présélectionner les candidats les plus qualifiés pour votre rôle.",
        feature3Title: "Télétravail et Relocalisation",
        feature3Desc: "Que vous ayez besoin de télétravailleurs ou d'expatriés, nous personnalisons nos services pour répondre à vos besoins.",
        aboutTitle: "À Propos de Nous",
        aboutDesc: "Findemp se spécialise dans la connexion des entreprises avec des talents internationaux. À l'aide d'algorithmes intelligents, nous recherchons des employés qualifiés et gérons le processus d'entretien initial pour vous.",
        aboutProcessTitle: "Notre Processus :",
        aboutProcess: [
            "Soumettez vos exigences de poste.",
            "Nous recherchons des candidats parfaits à l'échelle mondiale.",
            "Nos experts réalisent des entretiens préliminaires.",
            "Nous vous présentons les meilleurs candidats pour votre approbation finale."
        ],
        testimonialsTitle: "Ce que disent nos clients",
        testimonial1: '"Findemp nous a aidés à trouver le développeur distant parfait en moins de deux semaines. Leur service est exceptionnel !"',
        testimonial1Author: "- PDG de TechCorp",
        testimonial2: '"Nous avons trouvé un employé incroyable prêt à se relocaliser grâce à Findemp. Hautement recommandé !"',
        testimonial2Author: "- Responsable de Solutions Globales",
        faqTitle: "Questions Fréquemment Posées",
        faq1Title: "Dans quels secteurs êtes-vous spécialisés ?",
        faq1Desc: "Nous servons une grande variété de secteurs, y compris la technologie, la santé, la finance et plus encore.",
        faq2Title: "Combien de temps faut-il pour trouver un candidat ?",
        faq2Desc: "Nous trouvons et interviewons généralement des candidats en deux à trois semaines, selon le rôle.",
        contactTitle: "Contactez-Nous",
        contactNameLabel: "Votre Nom :",
        contactEmailLabel: "Votre Email :",
        contactIndustryLabel: "Votre Secteur d'Activité :",
        contactMessageLabel: "Votre Message :",
        contactCTA: "Envoyer le Message",
        footerText: "© 2024 Findemp. Tous droits réservés."
    }
};

// Add navigation elements to the dynamic updater
function updateContent(language) {
    const elements = {
        navHome: "nav-home",
        navAbout: "nav-about",
        navFeatures: "nav-features",
        navTestimonials: "nav-testimonials",
        navContact: "nav-contact",
        heroTitle: "hero-title",
        heroSubtitle: "hero-subtitle",
        heroCTA: "hero-cta",
        featuresTitle: "features-title",
        feature1Title: "feature-1-title",
        feature1Desc: "feature-1-desc",
        feature2Title: "feature-2-title",
        feature2Desc: "feature-2-desc",
        feature3Title: "feature-3-title",
        feature3Desc: "feature-3-desc",
        aboutTitle: "about-title",
        aboutDesc: "about-desc",
        aboutProcessTitle: "about-process-title",
        testimonialsTitle: "testimonials-title",
        testimonial1: "testimonial-1",
        testimonial1Author: "testimonial-1-author",
        testimonial2: "testimonial-2",
        testimonial2Author: "testimonial-2-author",
        faqTitle: "faq-title",
        faq1Title: "faq-1-title",
        faq1Desc: "faq-1-desc",
        faq2Title: "faq-2-title",
        faq2Desc: "faq-2-desc",
        contactTitle: "contact-title",
        contactNameLabel: "contact-name-label",
        contactEmailLabel: "contact-email-label",
        contactIndustryLabel: "contact-industry-label",
        contactMessageLabel: "contact-message-label",
        contactCTA: "contact-cta",
        footerText: "footer-text"
    };

    for (const key in elements) {
        const element = document.getElementById(elements[key]);
        if (key === "aboutProcess") {
            element.innerHTML = "";
            translations[language][key].forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                element.appendChild(li);
            });
        } else {
            element.innerHTML = translations[language][key];
        }
    }
}

// Initialize language switching
document.getElementById("language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "fr" : "en";
    updateContent(currentLanguage);
    document.getElementById("language-toggle").textContent =
        currentLanguage === "en" ? "Français" : "English";
});

updateContent(currentLanguage);
