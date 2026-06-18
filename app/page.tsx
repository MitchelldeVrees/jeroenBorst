import Image from "next/image";

const portfolio = [
  {
    src: "/media/12976562_225541691150902_844316762_n-768x768.jpg",
    alt: "Visgraat achterwand in een keuken",
    className: "tile tall",
  },
  {
    src: "/media/70438434_353503115535405_1265486396045544852_n-1-1024x1024.jpg",
    alt: "Wit tegelwerk naast baksteen",
    className: "tile",
  },
  {
    src: "/media/13129930_1694004534185099_188031288_n-819x1024.jpg",
    alt: "Witte badkamer met tegelnissen",
    className: "tile",
  },
  {
    src: "/media/64819182_2343387552566444_1677524997872025600_n-768x576.jpg",
    alt: "Strakke witte wandtegels in badkamer",
    className: "tile wide",
  },
  {
    src: "/media/13423621_670148626458051_582358089_n-300x300.jpg",
    alt: "Donkere douche met nis",
    className: "tile",
  },
  {
    src: "/media/13183350_249294635433624_1952672460_n.jpg",
    alt: "Badkamer in taupe grootformaat tegels",
    className: "tile",
  },
  {
    src: "/media/12918608_568115850026177_1633815642_n-300x300.jpg",
    alt: "Hexagonvloer met houten elementen",
    className: "tile",
  },
  {
    src: "/media/34557749_2089496141288921_7348331276975210496_o-1152x1536.jpg",
    alt: "Grote donkere vloertegels",
    className: "tile tall",
  },
  {
    src: "/media/24785350_2004689153102954_69234313593859255_o-1152x1536.jpg",
    alt: "Keukenwand met tegels en illustratie",
    className: "tile",
  },
];

const services = [
  {
    number: "01",
    title: "Badkamers",
    text: "Van douchenis tot vloer, waterdicht en tot in de hoeken verzorgd.",
  },
  {
    number: "02",
    title: "Keukens",
    text: "Achterwanden in visgraat of mozaiek die de keuken maken.",
  },
  {
    number: "03",
    title: "Vloeren",
    text: "Grootformaat, hexagon of klassiek: vlak en strak gelegd.",
  },
  {
    number: "04",
    title: "Renovatie",
    text: "Volledige verbouwing van begin tot eind, netjes opgeleverd.",
  },
];

const serviceAreas = ["Alkmaar", "Heiloo", "Bergen", "Langedijk", "Noord-Holland"];

const faqs = [
  {
    question: "Zoek je een tegelzetter in Alkmaar voor een badkamer?",
    answer:
      "Borst Tegelwerken betegelt badkamers in Alkmaar en omgeving, waaronder douchewanden, nissen, vloeren en grootformaat wandtegels.",
  },
  {
    question: "Doet Borst Tegelwerken ook keuken achterwanden?",
    answer:
      "Ja. Denk aan visgraat, mozaiek, witte wandtegels of een strakke achterwand achter het fornuis of werkblad.",
  },
  {
    question: "In welke regio werkt Jeroen Borst?",
    answer:
      "De focus ligt op Alkmaar en omliggende plaatsen zoals Heiloo, Bergen, Langedijk en de rest van Noord-Holland.",
  },
  {
    question: "Hoe vraag ik een offerte aan?",
    answer:
      "Stuur een mail naar info@borsttegelwerken.nl met een korte omschrijving, locatie en eventueel foto's van de ruimte.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Borst Tegelwerken home">
          <Image
            src="/logo.webp"
            alt="Borst Tegelwerken"
            width={168}
            height={109}
            className="logo-image"
          />
        </a>
        <nav className="nav-links" aria-label="Hoofdnavigatie">
          <a href="#werk">Werk</a>
          <a href="#over">Over</a>
          <a href="#diensten">Diensten</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="service-area">
          <span aria-hidden="true" />
          Alkmaar e.o.
        </div>
        <a className="header-cta" href="#contact">
          Offerte
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          src="/media/13423621_670148626458051_582358089_n-300x300.jpg"
          alt="Donkere douche met nis"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-bar" />
        <div className="hero-content">
          <p className="section-kicker">
            <span aria-hidden="true" />
            Werkzaam in Alkmaar en omstreken
          </p>
          <h1>
            Tegelzetter
            <br />
            <strong>Alkmaar</strong>
          </h1>
          <p>
            Jeroen Borst van Borst Tegelwerken zet tegels in Alkmaar en
            omstreken. Badkamers, keukens en vloeren: recht, strak en zonder
            concessies.
          </p>
          <div className="actions">
            <a className="primary-action" href="#contact">
              Offerte aanvragen
            </a>
            <a className="secondary-action" href="#werk">
              Bekijk werk
            </a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Ervaring">
        <div>
          <strong>30+</strong>
          <span>jaar ervaring</span>
        </div>
        <div>
          <strong>2016</strong>
          <span>eigen bedrijf</span>
        </div>
        <div>
          <strong>Alkmaar</strong>
          <span>en omstreken</span>
        </div>
      </section>

      <section className="services" id="diensten">
        <div className="section-heading">
          <h2>Tegelwerk in Alkmaar</h2>
          <span>Diensten</span>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="local-seo" aria-labelledby="local-seo-title">
        <div>
          <span className="red-kicker">Lokale tegelzetter</span>
          <h2 id="local-seo-title">
            Tegelzetter in Alkmaar voor badkamer, keuken en vloer
          </h2>
        </div>
        <div className="local-copy">
          <p>
            Zoek je een tegelzetter in Alkmaar voor strak tegelwerk? Borst
            Tegelwerken helpt met badkamers, keukenwanden, vloeren en renovaties
            waarbij de afwerking in de details zit.
          </p>
          <p>
            De werkzaamheden worden uitgevoerd door Jeroen Borst zelf. Dat houdt
            de lijnen kort en zorgt voor duidelijk contact vanaf de eerste vraag
            tot de oplevering.
          </p>
          <ul aria-label="Werkgebied">
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="video-section">
        <div>
          <span className="red-kicker">Bekijk</span>
          <h2>
            Het vakwerk
            <br />
            in beweging
          </h2>
          <p>
            Een korte impressie van een afgerond project: van de eerste tegel
            tot de laatste voeg.
          </p>
        </div>
        <video
          src="/media/Borst.mp4"
          poster="/media/video-poster.webp"
          playsInline
          preload="metadata"
          controls
        />
      </section>

      <section className="portfolio" id="werk">
        <div className="section-heading dark">
          <h2>Het werk</h2>
          <span>Portfolio</span>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <figure className={item.className} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="about" id="over">
        <div className="about-copy">
          <span className="red-kicker">Over Jeroen</span>
          <h2>
            Een leven lang
            <br />
            het vak geleerd
          </h2>
          <p>
            In 1991 begon ik als tegelzetter. Vijfentwintig jaar lang leerde ik
            het vak in de praktijk: de oude technieken, het geduld, het oog voor
            de millimeter.
          </p>
          <p>
            In 2016 begon ik voor mezelf, onder de naam Borst Tegelwerken.
            Sindsdien lever ik werk waar ik mijn naam aan verbind: hoogwaardig,
            netjes en strak.
          </p>
          <strong>Jeroen Borst</strong>
        </div>
        <div className="about-image">
          <Image
            src="/media/11699040_890040627756550_7730763422826034036_o-1024x1024.jpg"
            alt="Jeroen Borst"
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <div className="section-heading dark">
          <h2 id="faq-title">Veel gezocht</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="tile-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <h2>
          Klaar voor strak
          <br />
          tegelwerk?
        </h2>
        <p>
          Werkzaam in Alkmaar en omstreken. Mail voor een vrijblijvende offerte.
        </p>
        <a className="contact-cta" href="mailto:info@borsttegelwerken.nl">
          Offerte aanvragen
        </a>
        <div className="contact-details">
          <a href="mailto:info@borsttegelwerken.nl">
            info@borsttegelwerken.nl
          </a>
        </div>
      </section>

      <footer>
        <span>
          Borst <strong>Tegelwerken</strong>
        </span>
        <span>Vakwerk sinds 1991 - Alkmaar e.o.</span>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
