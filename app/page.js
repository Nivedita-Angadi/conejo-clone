export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Adult Therapy in Santa Monica, CA",
  description:
    "Adult therapy in Santa Monica, California with Dr. Maya Reynolds, PsyD, focusing on anxiety, panic, trauma, EMDR, burnout, and perfectionism.",
};

const services = [
  {
    number: "01",
    title: "Anxiety & Panic Therapy",
    text: "Support for adults experiencing constant worry, overthinking, panic, physical tension, difficulty sleeping, or the feeling of always bracing for something to go wrong.",
  },
  {
    number: "02",
    title: "Trauma & EMDR Therapy",
    text: "Trauma-focused therapy for adults navigating single-incident trauma or longer-standing patterns connected to childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism Therapy",
    text: "A supportive space for professionals, entrepreneurs, and creatives who feel exhausted by high internal pressure, perfectionism, or years of pushing through stress.",
  },
];

const approaches = [
  {
    title: "Cognitive-Behavioral Therapy",
    short: "CBT",
    text: "Evidence-based tools to help you understand patterns of thinking, emotion, and behavior.",
  },
  {
    title: "EMDR",
    short: "EMDR",
    text: "A trauma-focused approach integrated into therapy when it is appropriate for your needs.",
  },
  {
    title: "Mindfulness-Based Practices",
    short: "Mindfulness",
    text: "Practices that create space to notice thoughts, emotions, and experiences with greater awareness.",
  },
  {
    title: "Body-Oriented Techniques",
    short: "Body",
    text: "Techniques that help explore the physiological side of stress, anxiety, trauma, and emotional experiences.",
  },
];

const faqs = [
  {
    question: "Who does Dr. Maya Reynolds work with?",
    answer:
      "Dr. Maya Reynolds works with adults, including high-achieving, thoughtful, and self-aware people who may feel overwhelmed by anxiety, stress, trauma, burnout, perfectionism, or high internal pressure.",
  },
  {
    question: "Does Dr. Maya Reynolds offer in-person therapy?",
    answer:
      "Yes. In-person therapy is offered from her Santa Monica, California office at 123th Street 45 W, Santa Monica, CA 90401.",
  },
  {
    question: "Is telehealth available?",
    answer:
      "Yes. Secure telehealth sessions are available for clients located in California.",
  },
  {
    question: "What therapy approaches does she use?",
    answer:
      "Her approach integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "Does she work with trauma?",
    answer:
      "Yes. Trauma work is an important part of her practice. She works with adults who have experienced single-incident trauma as well as more complex, long-standing patterns related to childhood, relationships, or chronic stress.",
  },
  {
    question: "Does she work with burnout and perfectionism?",
    answer:
      "Yes. She frequently supports professionals, entrepreneurs, and creatives dealing with professional burnout, perfectionism, and high internal pressure.",
  },
];

export default function Home() {
  return (
    <main className="site">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="logo">
            <span>Dr. Maya Reynolds</span>
            <small>PsyD · Licensed Clinical Psychologist</small>
          </a>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#office">Office</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact" className="nav-button">
              Get Started
            </a>
          </nav>

          <details className="mobile-menu">
            <summary>Menu</summary>

            <nav className="mobile-nav">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#office">Office</a>
              <a href="#faqs">FAQs</a>
              <a href="#contact">Get Started</a>
            </nav>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
  <div className="hero-content">
    <p className="eyebrow">Adult Therapy in Santa Monica for Anxiety, Trauma & Burnout</p>

    <h1>
      Adult Therapy in Santa Monica for Anxiety, Trauma &amp; Burnout
    </h1>

    <p className="hero-text">
      Therapy for adults who feel overwhelmed by anxiety, stress, past
      experiences, burnout, or the pressure to keep everything together.
      Dr. Maya Reynolds offers a warm, collaborative, and grounded space for
      meaningful change.
    </p>

    <div className="hero-buttons">
      <a href="#contact" className="button button-primary">
        Get Started
      </a>

      <a href="#about" className="button button-secondary">
        Meet Dr. Maya
      </a>
    </div>
  </div>

 <div className="hero-image-wrap">
  <div className="hero-image">
    <img
      src="/dr.png"
      alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
    />
  </div>
</div>
</section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="section-label">
          <span>01</span>
          A different kind of support
        </div>

        <div className="intro-content">
          <h2>
            You may look
            <em> fine</em> on the outside.
          </h2>

          <p className="intro-large">
            But internally, you may feel exhausted, stuck in overthinking, or
            constantly on edge.
          </p>

          <p>
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware. They have spent years pushing through stress while
            quietly struggling with anxiety, tension, disrupted sleep, or a
            sense that something needs to change.
          </p>

          <p>
            Therapy can become a place to slow down, reconnect with yourself,
            and develop more sustainable ways of living and working.
          </p>

          <a href="#contact" className="underlined-link">
            Let&apos;s begin the conversation <span>→</span>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-image">
          <img
            src="/dr.png"
            alt="Dr. Maya Reynolds"
          />
        </div>

        <div className="about-content">
          <p className="eyebrow">ABOUT DR. MAYA REYNOLDS</p>

          <h2>
            A grounded space for
            <span> meaningful change.</span>
          </h2>

          <p>
            I&apos;m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>

          <p>
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth.
          </p>

          <p>
            My goal is not just symptom relief, but helping clients develop
            insight, resilience, and a stronger relationship with themselves
            over time.
          </p>

          <div className="about-signature">
            <strong>Maya Reynolds, PsyD</strong>
            <span>Licensed Clinical Psychologist</span>
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="help-section">
        <div className="section-label">
          <span>02</span>
          Who I help
        </div>

        <div className="help-heading">
          <h2>
            For adults who are ready to
            <span> feel differently.</span>
          </h2>

          <p>
            My practice is especially focused on adults who are thoughtful,
            capable, and often accustomed to managing everything themselves.
          </p>
        </div>

        <div className="help-grid">
          <article>
            <span className="help-number">01</span>
            <h3>Anxiety &amp; Overthinking</h3>
            <p>
              For adults living with constant worry, panic, tension, difficulty
              sleeping, or feeling emotionally on edge.
            </p>
          </article>

          <article>
            <span className="help-number">02</span>
            <h3>High-Achieving Professionals</h3>
            <p>
              Support for professionals, entrepreneurs, and creatives who feel
              disconnected from themselves after years of pushing through
              stress.
            </p>
          </article>

          <article>
            <span className="help-number">03</span>
            <h3>Trauma &amp; Burnout</h3>
            <p>
              A carefully paced therapeutic process for adults working through
              past experiences, chronic stress, burnout, or high internal
              pressure.
            </p>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="services-top">
          <div>
            <p className="eyebrow">THERAPY SERVICES</p>

            <h2>
              Therapy for what&apos;s
              <span> underneath.</span>
            </h2>
          </div>

          <p className="services-intro">
            Practical tools and depth-oriented work for adults navigating
            anxiety, trauma, burnout, and the effects of long-standing stress.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="approach-section">
        <div className="approach-header">
          <div className="section-label light-label">
            <span>03</span>
            Therapeutic approach
          </div>

          <h2>
            Evidence-based tools.
            <br />
            <em>Room to go deeper.</em>
          </h2>

          <p>
            I integrate evidence-based methods with a warm, collaborative
            approach. Therapy is structured enough to feel supportive while
            leaving room for reflection and depth.
          </p>
        </div>

        <div className="approach-grid">
          {approaches.map((approach) => (
            <article className="approach-card" key={approach.title}>
              <span>{approach.short}</span>

              <h3>{approach.title}</h3>

              <p>{approach.text}</p>
            </article>
          ))}
        </div>

        <div className="trauma-note">
          <div className="trauma-note-title">
            <span>TRAUMA WORK</span>
            <strong>A careful pace matters.</strong>
          </div>

          <p>
            Trauma work is an important part of my practice. I work with adults
            who have experienced single-incident trauma as well as more
            complex, long-standing patterns. My approach emphasizes safety,
            stabilization, and helping clients feel more regulated in daily
            life—not just during sessions.
          </p>
        </div>
      </section>

      {/* OFFICE */}
      <section id="office" className="office-section">
        <div className="office-images">
          <div className="office-image-large">
            <img
              src="/office1.jpeg"
              alt="dr.Maya Reynolds' Santa Monica therapy office"
            />
          </div>

          <div className="office-image-small">
            <img
              src="/office2.jpeg"
              alt="Quiet interior of the Santa Monica therapy office"
            />
          </div>
        </div>

        <div className="office-content">
          <p className="eyebrow">SANTA MONICA, CALIFORNIA</p>

          <h2>
            A quiet place to
            <span> slow down.</span>
          </h2>

          <p>
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding, with natural light and a comfortable,
            uncluttered environment.
          </p>

          <p>
            Clients often share that the space itself helps them feel more at
            ease when they arrive.
          </p>

          <div className="office-details">
            <div>
              <span>OFFICE</span>
              <strong>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </strong>
            </div>

            <div>
              <span>SESSIONS</span>
              <strong>
                In-person therapy
                <br />
                Secure telehealth throughout California
              </strong>
            </div>
          </div>

          <a href="#contact" className="button button-primary">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-label">
          <span>04</span>
          What therapy can offer
        </div>

        <div className="process-content">
          <h2>
            Slow down.
            <br />
            Understand.
            <br />
            <span>Reconnect.</span>
          </h2>

          <div className="process-text">
            <p>
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process.
            </p>

            <p>
              Together, we can explore the emotional and physiological sides of
              what you&apos;re experiencing and develop more sustainable ways of
              responding to stress.
            </p>

            <p>
              The goal is not simply to function better. It is to build
              insight, resilience, and a stronger relationship with yourself
              over time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="faq-section">
        <div className="faq-heading">
          <p className="eyebrow">COMMON QUESTIONS</p>

          <h2>
            Start with
            <span> what you need to know.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{faq.question}</strong>

                <b>+</b>
              </summary>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <p className="eyebrow">READY TO BEGIN?</p>

          <h2>
            You don&apos;t have to
            <br />
            <em>keep pushing through.</em>
          </h2>

          <p>
            If you&apos;re looking for a therapist who combines practical tools
            with depth-oriented work—and who understands the realities of
            living and working in a fast-paced environment—I may be a good fit.
          </p>

          <a href="#contact" className="button button-light">
            Schedule a Consultation
          </a>

          <small>
            In-person therapy in Santa Monica · Secure telehealth throughout
            California
          </small>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Dr. Maya Reynolds, PsyD</h3>
            <p>Licensed Clinical Psychologist</p>

            <p className="footer-location">
              Santa Monica, California
              <br />
              In-person &amp; secure telehealth
            </p>
          </div>

          <div className="footer-column">
            <span>EXPLORE</span>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#office">Office</a>
            <a href="#faqs">FAQs</a>
          </div>

          <div className="footer-column">
            <span>FOCUS AREAS</span>
            <a href="#services">Anxiety &amp; Panic</a>
            <a href="#services">Trauma &amp; EMDR</a>
            <a href="#services">Burnout</a>
            <a href="#services">Perfectionism</a>
          </div>

          <div className="footer-column">
            <span>LOCATION</span>
            <p>
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span> Dr. Maya Reynolds, PsyD</span>
          <span>Adult Therapy · Santa Monica, CA</span>
        </div>
      </footer>
    </main>
  );
}