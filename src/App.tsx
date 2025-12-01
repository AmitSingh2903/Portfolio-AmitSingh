import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Globe,
  Cloud,
  LineChart,
  Database,
  Star,
  Leaf,
  Laptop,
} from 'lucide-react';

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

function Section({ id, className = '', children }: SectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`min-h-screen flex items-center py-20 px-4 relative z-10 ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </motion.section>
  );
}

function TypedHeading({ label }: { label: string }) {
  return (
    <h2 className="section-heading">
      <Typewriter
        options={{
          strings: [label],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          delay: 45,
        }}
      />
    </h2>
  );
}

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};

type ProjectItem = {
  title: string;
  description: string;
  technologies: string;
  github?: string;
  demo?: string;
  publish?: string;
};

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <motion.div
      className="glass-card border-l-4"
      style={{ borderLeftColor: 'rgba(168, 85, 247, 0.5)' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-purple-400/80 mb-1">
          {item.company}
        </p>
        <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
        <p className="text-sm text-gray-300 mb-3">
          {item.location} • {item.period}
        </p>
        <ul className="text-sm text-gray-200 space-y-2 mt-3 list-disc list-inside">
          {item.highlights.map((h, i) => (
            <li key={i} className="leading-relaxed">{h}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      className="glass-card project-card"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
        <Star className="w-4 h-4 text-purple-400" />
        {project.title}
      </h3>
      <p className="text-sm text-gray-200 mb-4 leading-relaxed">{project.description}</p>
      <p className="text-xs font-semibold text-purple-300 mb-4 uppercase tracking-wide">
        {project.technologies}
      </p>
      <div className="flex gap-4 text-xs flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1 hover:text-purple-200"
          >
            <Github className="w-3 h-3" /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1 hover:text-purple-200"
          >
            <ExternalLink className="w-3 h-3" /> Demo
          </a>
        )}
        {project.publish && (
          <a
            href={project.publish}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline flex items-center gap-1 hover:text-purple-200"
          >
            <ExternalLink className="w-3 h-3" /> Publish
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ----------------- SECTIONS ----------------- */

function Hero() {
  return (
    <Section id="home" className="hero-section">
      <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
        {/* Left */}
        <div className="space-y-8">
          <p className="text-xs tracking-[0.3em] text-purple-400/70 uppercase font-semibold">
            Amit Singh • Data Scientist & ML Engineer
          </p>

          <div className="relative">
            <h1 className="hero-heading">
              DATA.
              <span className="block hero-gradient-text">INTELLIGENCE.</span>
              EXECUTION.
            </h1>
            <div className="hero-orb" />
          </div>

          <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed">
            Aspiring Data Scientist with hands-on experience in LLM training,
            marketing analytics, and end-to-end ML systems — turning messy data
            into clear, actionable impact across environment, space, and
            product AI domains.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1ebQxvjEE4JAhx7fuxjq2iW_-_2MqJ-o3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amitsingh290302@gmail.com&su=Let%27s%20Collaborate&body=Hi%20Amit%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20collaboration.%20Please%20let%20me%20know%20a%20good%20time%20to%20connect.%0A%0AThanks%2C"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="Compose email to amitsingh290302@gmail.com in Gmail"
            >
              <Mail className="w-4 h-4" /> Let&apos;s Collaborate
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm pt-4">
            <a
              href="https://github.com/AmitSingh2903"
              target="_blank"
              rel="noopener noreferrer"
              className="link-chip"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amitsingh2903/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-chip"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-72 md:h-96">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
          <div className="glass-card absolute inset-8 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-purple-400/80 uppercase mb-3 font-semibold">
                Focus Areas
              </p>
              <p className="text-sm text-gray-100 leading-relaxed">
                Data Products • LLMs • Analytics • MLOps
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="mini-pill">
                <Brain className="w-3 h-3" /> LLM Training &amp; Prompting
              </div>
              <div className="mini-pill">
                <LineChart className="w-3 h-3" /> Marketing & Growth Analytics
              </div>
              <div className="mini-pill">
                <Globe className="w-3 h-3" /> Space & Earth ML
              </div>
              <div className="mini-pill">
                <Cloud className="w-3 h-3" /> Cloud & Data Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" className="section-gradient section-gradient-soft">
      <div className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-start">
        <div>
          <TypedHeading label="About Me" />
          <p className="text-sm md:text-base text-gray-200 mb-5 leading-relaxed">
            Data Scientist & ML Engineer with a Masters in Data Science, freelancing across{' '}
            <span className="gradient-inline">
              AI, analytics, and full-stack ML systems
            </span>
            . I design and deploy high-performance models — LLMs, forecasting systems, scientific ML, and intelligent analytics dashboards — that ship, scale, and solve real problems.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            My work ranges from{' '}
            <span className="font-semibold text-white">
              LLM training pipelines and growth analytics to advanced Earth & space intelligence
            </span>
            : PyroCb cloud detection, wildfire forecasting, credit risk, churn models, and customer sentiment intelligence.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
            <div className="about-pill">
              <Database className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">
                  Data & Analytics Stack
                </p>
                <p className="text-gray-300 text-xs">
                  Python, SQL, Pandas, PySpark, Tableau, Power BI
                </p>
              </div>
            </div>
            <div className="about-pill">
              <Brain className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">ML & DL</p>
                <p className="text-gray-300 text-xs">
                  TensorFlow, Keras, CNNs, classical ML
                </p>
              </div>
            </div>
            <div className="about-pill">
              <Cloud className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">Cloud</p>
                <p className="text-gray-300 text-xs">
                  Google Cloud (CDL), basic MLOps & ETL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="glass-card">
          <p className="text-xs tracking-[0.25em] text-purple-400/80 uppercase mb-3 font-semibold">
            Education
          </p>
          <h3 className="text-lg font-bold text-white mb-2">
            Integrated M.Tech — CSE with Data Science
          </h3>
          <p className="text-sm text-purple-300 mb-2 font-semibold">
            Vellore Institute of Technology
          </p>
          <p className="text-xs text-gray-400 mb-4">
            June 2020 – Sept 2025 • CGPA: 8.37/10
          </p>
          <ul className="text-xs text-gray-200 space-y-2 leading-relaxed">
            <li>• Focus on ML, DL, Big Data, and Cloud computing.</li>
            <li>• Projects at the intersection of environment, space, and AI.</li>
            <li>• Research and publication work (PyroScan wildfire ML system).</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'AccessMillion — Marketing & Data',
      role: 'Data Analyst Intern',
      location: 'Pune • Remote',
      period: 'May 2025 – Nov 2025',
      highlights: [
        'Analyzed historical campaign data to identify high-impact ad placements, boosting engagement and reach by ~30%.',
        'Evaluated ROI, ROAS, CAC, and CLTV to uncover inefficiencies and improve profit margins by ~2–3%.',
        'Designed automated dashboards (traffic, funnel, audience segments) using Python, Tableau, and Excel to speed reporting by 25%.',
      ],
    },
    {
      company: 'Outlier AI — LLM Training Data',
      role: 'Software Engineer for AI Training Data',
      location: 'Remote (Freelance)',
      period: '',
      highlights: [
        'Optimized LLM prompts and evaluation instructions across diverse tasks, lifting response quality and task accuracy by ~25%.',
        'Built prompt-optimization workflows that reduced annotation time by ~30%.',
        'Contributed to mission-critical datasets for coding, reasoning, and tool-use tasks, improving model alignment and consistency.',
      ],
    },
    {
      company: 'Uber',
      role: 'Data Operations Consultant (Translated S.r.l.)',
      location: 'Remote, India (Freelance)',
      period: '',
      highlights: [
        'Counselled with Uber and Google on CoreML Data Operations, streamlining ML workflows and model lifecycle management, achieving improvement in deployment time by 22 minutes.',
        'Integrated scalable data pipelines for high-throughput ML training and inference systems, ensuring seamless CoreML integration and delivering an 8–10% boost in training efficiency.',
        'Performed in-depth data analysis and monitoring to optimize model performance, driving an 8% increase in accuracy while supporting faster experimentation cycles.',
      ],
    },
    {
      company: 'JP Morgan Chase & Co. (Forage Virtual Experience)',
      role: 'Quantitative Researcher',
      location: 'Remote, USA',
      period: '',
      highlights: [
        'Natural Gas Price Forecasting & Contract Valuation – Built a Holt-Winters forecasting model to extrapolate daily gas prices one year ahead; designed a storage contract pricing function simulating cashflows with constraints, achieving sample contract profit of $137 under realistic assumptions.',
        'Credit Risk Modeling – Developed Probability of Default (PD) models using Logistic Regression, Random Forest, and Gradient Boosting, with Gradient Boosting achieving AUC = 0.84 and Accuracy = 79%; implemented Expected Loss function EL = PD × LGD × EAD, with example borrower case estimating $2,160 expected loss.',
        'Borrower Rating Quantization (FICO Bucketing) – Designed rating maps via K-Means (MSE-based) and Decision Tree (log-likelihood-based); produced risk-sensitive buckets where default rates increased monotonically from 2% (best) to 29% (worst), enabling robust credit score to rating mapping for future datasets.',
      ],
    },
  ];

  return (
    <Section id="experience" className="section-gradient section-gradient-lines">
      <div>
        <TypedHeading label="Experience — From Data to Decisions" />
        <div className="space-y-6 mt-6 max-w-3xl">
          {experiences.map((exp, idx) => (
            <ExperienceCard item={exp} key={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const spaceProjects: ProjectItem[] = [
    {
      title: 'PyroScan — Wildfire & PyroCb Monitoring',
      description:
        'End-to-end ML system using satellite imagery, CNNs and environmental features to detect PyroCb clouds and forecast wildfire risk, with real-time web deployment. Published work.',
      technologies: 'TensorFlow, Satellite Data, Supabase, TensorFlow.js',
      github: 'https://github.com/AmitSingh2903/PyroScan',
      demo: 'https://pyroscan.vercel.app/',
      publish: 'https://zenodo.org/records/15243631',
    },
    {
      title: 'Hunting Exoplanets',
      description:
        'ML-based pipeline for detecting exoplanet candidates from astronomical signals and light curves.',
      technologies: 'Python, ML, Astronomical Data',
      github: 'https://github.com/AmitSingh2903/Hunting-Exoplanets',
    },
    {
      title: 'Stars & Galaxies Prediction',
      description:
        'Classification of celestial objects using astrophysical features to distinguish stars, galaxies, and more.',
      technologies: 'Scikit-learn, Keras, Scientific ML',
      github: 'https://github.com/AmitSingh2903/Stars-and-Galaxies-Prediction',
    },
  ];

  const envProjects: ProjectItem[] = [
    {
      title: 'CovidXNet — Pneumonia Detection',
      description:
        'CNN-based model for classifying chest X-rays (pneumonia vs COVID), improving baseline accuracy from ~54% to ~85%.',
      technologies: 'CNN, Medical Imaging, TensorFlow',
      github: 'https://github.com/AmitSingh2903/CovidXNet',
    },
    {
      title: 'EDA — Air Pollutant Emissions',
      description:
        'Data analysis on pollutant emissions, uncovering trends and potential drivers behind air quality variation.',
      technologies: 'Python, Pandas, Visualization',
      github: 'https://github.com/AmitSingh2903/EDA-Air-Pollutant-Emission',
    },
    {
      title: 'Server Utilization Patterns',
      description:
        'Large-scale EDA on 50k+ server logs to understand utilization, correlations (|r| ≈ 0.75), and performance patterns.',
      technologies: 'PySpark, Spark SQL, Big Data',
      github: 'https://github.com/AmitSingh2903/Server-Utilization-Patterns',
    },
  ];

  const techProjects: ProjectItem[] = [
    {
      title: 'AnimateAI',
      description:
        'Full-stack app that turns prompts into AI-generated images with galleries, history, and sharing.',
      technologies: 'React, Node.js, DALL·E API, MongoDB',
      github: 'https://github.com/AmitSingh2903/Animate-AI',
      demo: 'https://animate-ai-gamma.vercel.app/',
    },
    {
      title: 'InstanceFuse',
      description:
        'Advanced instance segmentation system for complex scenes, focusing on object boundaries and precision.',
      technologies: 'PyTorch, Computer Vision, Deep Learning',
      github: 'https://github.com/AmitSingh2903/InstanceFuse',
    },
    {
      title: 'Google Drive Clone',
      description:
        'Cloud storage clone with upload, sharing, and real-time updates inspired by Google Drive.',
      technologies: 'React, Firebase, Cloud Storage',
      github: 'https://github.com/AmitSingh2903/Google-Drive-Clone',
    },
    {
      title: 'ETL Data Engineering',
      description:
        'Robust ETL pipeline for transactional data with transformations, validation, and loading.',
      technologies: 'Python, SQL, Airflow / Orchestration',
      github: 'https://github.com/AmitSingh2903/ETL-Data-Engineering',
    },
    {
      title: 'PDF Co-Viewer',
      description:
        'Synchronized PDF viewing experience, letting an admin control slides for everyone in real-time.',
      technologies: 'React, WebSockets, PDF.js',
      github: 'https://github.com/AmitSingh2903/PDF-Co-Viewer',
    },
  ];

  return (
    <Section id="projects" className="section-gradient section-gradient-neon">
      <div className="space-y-10">
        <TypedHeading label="Projects" />

        {/* Space & Astro */}
        <div className="project-block">
          <div className="project-block-header">
            <div className="icon-pill">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <h3 className="project-block-title">
                Space &amp; Astro Intelligence
              </h3>
              <p className="project-block-subtitle">
                ML systems exploring exoplanets, stars, galaxies, and
                wildfire-related cloud dynamics.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {spaceProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>

        {/* Environment & Health */}
        <div className="project-block">
          <div className="project-block-header">
            <div className="icon-pill icon-pill-green">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <h3 className="project-block-title">
                Earth, Environment &amp; Health
              </h3>
              <p className="project-block-subtitle">
                Models focused on emissions, health diagnostics, and large-scale
                infrastructure behavior.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {envProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>

        {/* AI Products & Systems */}
        <div className="project-block">
          <div className="project-block-header">
            <div className="icon-pill icon-pill-blue">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="project-block-title">
                AI Products &amp; Data Systems
              </h3>
              <p className="project-block-subtitle">
                Full-stack ML & GenAI experiences, from ETL pipelines to
                interactive AI tools and clones.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {techProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="section-gradient section-gradient-soft">
      <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <TypedHeading label="Let's Begin Cooperation" />
          <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">
            If you&apos;re building something around{' '}
            <span className="gradient-inline">
              data products, LLMs, or scientific ML
            </span>
            , I&apos;d love to contribute — from exploratory analysis and model
            design to clean implementation and dashboards.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:amitsingh290302@gmail.com"
              className="btn-primary"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/amitsingh2903/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Linkedin className="w-4 h-4" /> Connect
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-6 tracking-wide">
            📧 amitsingh290302@gmail.com • 🔗 github.com/AmitSingh2903
          </p>
        </div>

        {/* Right */}
        <div className="glass-card">
          <p className="text-xs tracking-[0.25em] text-purple-400/80 uppercase mb-4 font-semibold">
            Quick Links
          </p>
          <div className="space-y-3 text-sm">
            <a
              href="#home"
              className="link-underline flex items-center gap-2 hover:text-purple-200"
            >
              ↑ Back to Top
            </a>
            <a
              href="#about"
              className="link-underline flex items-center gap-2 hover:text-purple-200"
            >
              → About Me
            </a>
            <a
              href="#experience"
              className="link-underline flex items-center gap-2 hover:text-purple-200"
            >
              → Experience
            </a>
            <a
              href="#projects"
              className="link-underline flex items-center gap-2 hover:text-purple-200"
            >
              → Projects
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-6 border-t border-purple-500/20 pt-4">
            Built with React, TypeScript, Tailwind, and Framer Motion.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="page-bg">
      <nav className="nav-bar">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            amit.singh
          </div>
          <div className="flex gap-1 md:gap-2">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 px-4 text-center border-t border-purple-500/15">
        <p>© 2025 Amit Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}
