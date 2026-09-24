// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Every text field has an English (en) and Spanish (es) version.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Jesús Alejandro Domínguez Reyes",
  shortName: "Jesús Domínguez",
  initials: "JD",
  email: "jesusalejandro607@gmail.com",
  phone: "+52 56 1480 4291",
  phoneHref: "tel:+525614804291",
  location: { en: "Mexico City, Mexico", es: "Ciudad de México, México" },
  website: "https://jesusdominguezr.com",
  linkedin: "https://www.linkedin.com/in/jesus-a-dominguez-r",
  github: "https://github.com/JAlejandro99",
  cvFile: "/Jesus_Dominguez_Reyes_Software_Engineer_CV.pdf",
  role: {
    en: "Software Engineer · Backend & Data",
    es: "Ingeniero de Software · Backend y Datos",
  },
  headline: {
    en: "I build secure, fast and maintainable backend systems.",
    es: "Construyo sistemas backend seguros, rápidos y mantenibles.",
  },
  intro: {
    en: "Software Engineer with 4 years of professional experience in Java / Spring Boot and Python — from REST & GraphQL APIs and fintech integrations to large-scale data validation and secure AI model delivery.",
    es: "Ingeniero de Software con 4 años de experiencia profesional en Java / Spring Boot y Python — desde APIs REST y GraphQL e integraciones fintech hasta validación de datos a gran escala y entrega segura de modelos de IA.",
  },
  openTo: {
    en: "Open to Software Engineer / Backend roles — remote or relocation",
    es: "Abierto a roles de Software Engineer / Backend — remoto o reubicación",
  },
};

export const ui = {
  nav: {
    about: { en: "About", es: "Sobre mí" },
    experience: { en: "Experience", es: "Experiencia" },
    projects: { en: "Projects", es: "Proyectos" },
    skills: { en: "Skills", es: "Habilidades" },
    education: { en: "Education", es: "Educación" },
    contact: { en: "Contact", es: "Contacto" },
  },
  downloadCv: { en: "Download CV", es: "Descargar CV" },
  contactMe: { en: "Contact me", es: "Contáctame" },
  viewWork: { en: "View my work", es: "Ver mi trabajo" },
  present: { en: "Present", es: "Actualidad" },
  sections: {
    about: { en: "About me", es: "Sobre mí" },
    aboutKicker: { en: "Who I am", es: "Quién soy" },
    experience: { en: "Professional experience", es: "Experiencia profesional" },
    experienceKicker: { en: "Where I've worked", es: "Dónde he trabajado" },
    projects: { en: "Featured projects", es: "Proyectos destacados" },
    projectsKicker: { en: "What I've built", es: "Lo que he construido" },
    skills: { en: "Tech stack", es: "Stack tecnológico" },
    skillsKicker: { en: "Tools I use", es: "Herramientas que uso" },
    education: { en: "Education & certifications", es: "Educación y certificaciones" },
    educationKicker: { en: "Background", es: "Formación" },
    contact: { en: "Let's work together", es: "Trabajemos juntos" },
    contactKicker: { en: "Contact", es: "Contacto" },
  },
  contactText: {
    en: "I'm currently open to new Software Engineer opportunities. Whether you're a recruiter, hiring manager or engineer, my inbox is always open.",
    es: "Actualmente estoy abierto a nuevas oportunidades como Software Engineer. Si eres reclutador, hiring manager o ingeniero, mi bandeja siempre está abierta.",
  },
  form: {
    name: { en: "Your name", es: "Tu nombre" },
    email: { en: "Your email", es: "Tu correo" },
    message: { en: "Message", es: "Mensaje" },
    send: { en: "Send message", es: "Enviar mensaje" },
    note: {
      en: "Opens your email client with the message ready to send.",
      es: "Abre tu cliente de correo con el mensaje listo para enviar.",
    },
  },
  copy: { en: "Copy", es: "Copiar" },
  copied: { en: "Copied!", es: "¡Copiado!" },
  footer: { en: "Designed & built with React.", es: "Diseñado y construido con React." },
  languages: { en: "Languages", es: "Idiomas" },
  highlights: { en: "Highlights", es: "Logros clave" },
};

export const stats = [
  { value: "4+", label: { en: "Years of experience", es: "Años de experiencia" } },
  { value: "<30ms", label: { en: "Secure ML execution", es: "Ejecución segura de ML" } },
  { value: "Big Data", label: { en: "Billions of records validated", es: "Miles de millones de registros validados" } },
  { value: "3", label: { en: "Microservices shipped", es: "Microservicios entregados" } },
];

export const about = {
  paragraphs: [
    {
      en: "I'm a Computational Systems Engineer from ESCOM – Instituto Politécnico Nacional, focused on backend engineering. I enjoy designing clean architectures, turning messy requirements into reusable components, and squeezing performance out of systems without compromising security.",
      es: "Soy Ingeniero en Sistemas Computacionales por la ESCOM – Instituto Politécnico Nacional, enfocado en ingeniería backend. Disfruto diseñar arquitecturas limpias, convertir requerimientos complejos en componentes reutilizables y optimizar el rendimiento de los sistemas sin comprometer la seguridad.",
    },
    {
      en: "At AlgorithIA I build Python and Spring Boot services for AI models and enterprise data platforms — including a cryptographically protected model runtime that executes in under 30 ms and a data-quality platform validating tables with billions of records. Before that, at Accionamos Tus Datos, I built fintech backends: bank-account aggregation, transaction categorization, JWT security and webhook-driven integrations.",
      es: "En AlgorithIA construyo servicios en Python y Spring Boot para modelos de IA y plataformas de datos empresariales — incluyendo un runtime de modelos protegido criptográficamente que se ejecuta en menos de 30 ms y una plataforma de calidad de datos que valida tablas con miles de millones de registros. Antes, en Accionamos Tus Datos, desarrollé backends fintech: agregación de cuentas bancarias, categorización de transacciones, seguridad con JWT e integraciones basadas en webhooks.",
    },
  ],
  focus: [
    { en: "Backend APIs (REST & GraphQL)", es: "APIs backend (REST y GraphQL)" },
    { en: "Security & authentication", es: "Seguridad y autenticación" },
    { en: "Big-data quality with PySpark", es: "Calidad de big data con PySpark" },
    { en: "AI/ML model integration", es: "Integración de modelos de IA/ML" },
    { en: "Design patterns & clean code", es: "Patrones de diseño y código limpio" },
    { en: "Performance optimization", es: "Optimización de rendimiento" },
  ],
  languages: [
    { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" }, pct: 100 },
    { name: { en: "English", es: "Inglés" }, level: { en: "Intermediate", es: "Intermedio" }, pct: 65 },
  ],
};

export const experience = [
  {
    company: "AlgorithIA",
    role: { en: "Backend Developer", es: "Desarrollador Backend" },
    start: { en: "Aug 2023", es: "Ago 2023" },
    end: null,
    stack: ["Python", "Spring Boot", "PySpark", "AWS Lambda", "Great Expectations", "Cloudera", "Streamlit"],
    bullets: [
      {
        en: "Designed a Python library for secure execution of salary-estimation models, separating license enforcement, input validation, model protection, usage auditing and business logic.",
        es: "Diseñé una librería en Python para la ejecución segura de modelos de estimación salarial, separando licenciamiento, validación de entradas, protección del modelo, auditoría de uso y lógica de negocio.",
      },
      {
        en: "Implemented signed-license validation with machine-specific data to decrypt protected model weights, plus encrypted, hash-chained usage auditing with blockchain-backed integrity verification.",
        es: "Implementé validación de licencias firmadas con datos específicos del equipo para descifrar pesos protegidos del modelo, además de auditoría de uso cifrada y encadenada con hashes, con verificación de integridad respaldada en blockchain.",
      },
      {
        en: "Kept execution under 30 ms, with roughly half of runtime in inference and the rest in security controls.",
        es: "Mantuve la ejecución por debajo de 30 ms, con aproximadamente la mitad del tiempo en inferencia y el resto en controles de seguridad.",
      },
      {
        en: "Built the initial Great Expectations workflow for a data-validation platform (Python, PySpark) covering enterprise tables with billions of records.",
        es: "Construí el flujo inicial de Great Expectations para una plataforma de validación de datos (Python, PySpark) sobre tablas empresariales con miles de millones de registros.",
      },
      {
        en: "Tuned Spark session configurations that improved query response times on Hive and Impala datasets in Cloudera Machine Learning.",
        es: "Ajusté configuraciones de sesión de Spark que mejoraron los tiempos de respuesta de consultas sobre Hive e Impala en Cloudera Machine Learning.",
      },
      {
        en: "Developed Python REST APIs for AI models and Spring Boot APIs for statistical information; refactored AWS Lambda functions and a Streamlit dashboard with the Builder Pattern.",
        es: "Desarrollé APIs REST en Python para modelos de IA y APIs en Spring Boot para información estadística; refactoricé funciones AWS Lambda y un dashboard en Streamlit con el patrón Builder.",
      },
    ],
  },
  {
    company: "Accionamos Tus Datos (ATD)",
    role: { en: "Backend Developer", es: "Desarrollador Backend" },
    start: { en: "Aug 2022", es: "Ago 2022" },
    end: { en: "Aug 2023", es: "Ago 2023" },
    stack: ["Java", "Spring Boot", "Grails", "MongoDB", "MySQL", "GraphQL", "JWT", "Firebase", "Mockito", "Spock"],
    bullets: [
      {
        en: "Built Spring Boot features to retrieve bank accounts and categorized transactions through an external financial-data provider (Controller, Service, Repository and DTO layers on MongoDB).",
        es: "Desarrollé funcionalidades en Spring Boot para obtener cuentas bancarias y transacciones categorizadas a través de un proveedor externo de datos financieros (capas Controller, Service, Repository y DTO sobre MongoDB).",
      },
      {
        en: "Designed REST endpoints from scratch with multi-criteria filtering and GraphQL where appropriate.",
        es: "Diseñé endpoints REST desde cero con filtros por múltiples criterios y GraphQL cuando era conveniente.",
      },
      {
        en: "Implemented JWT authentication & authorization: token generation, cryptographic signing and validation.",
        es: "Implementé autenticación y autorización con JWT: generación, firma criptográfica y validación de tokens.",
      },
      {
        en: "Integrated external financial APIs and webhook-based async processing; debugged failures in asynchronous workflows.",
        es: "Integré APIs financieras externas y procesamiento asíncrono con webhooks; depuré fallas en flujos asíncronos.",
      },
      {
        en: "Enhanced an internal Java SDK (Retrofit) and owned it after the tech lead's departure while supporting a junior teammate.",
        es: "Mejoré un SDK interno en Java (Retrofit) y quedé a cargo de él tras la salida del líder técnico, apoyando a un compañero junior.",
      },
      {
        en: "Shipped endpoints and persistence across three Grails/Groovy microservices for a banking transaction-categorization platform.",
        es: "Entregué endpoints y persistencia en tres microservicios Grails/Groovy para una plataforma de categorización de transacciones bancarias.",
      },
      {
        en: "Built a Firebase push-notification service, web scraping with Amazon Rekognition, and unit tests with Mockito and Spock.",
        es: "Construí un servicio de notificaciones push con Firebase, web scraping con Amazon Rekognition y pruebas unitarias con Mockito y Spock.",
      },
    ],
  },
];

// `art` selects the illustration in src/components/illustrations/ProjectArt.jsx
export const projects = [
  {
    art: "secure",
    title: { en: "Secure ML Model Runtime", es: "Runtime seguro para modelos de ML" },
    org: "AlgorithIA",
    desc: {
      en: "Python library that protects and executes salary-estimation models: signed licenses bound to the machine, encrypted weights, and tamper-evident audit logs chained with hashes and anchored on blockchain.",
      es: "Librería en Python que protege y ejecuta modelos de estimación salarial: licencias firmadas ligadas al equipo, pesos cifrados y bitácoras de auditoría a prueba de manipulación encadenadas con hashes y ancladas en blockchain.",
    },
    metric: { en: "< 30 ms per execution", es: "< 30 ms por ejecución" },
    tags: ["Python", "Cryptography", "Blockchain", "ML"],
  },
  {
    art: "data",
    title: { en: "Enterprise Data-Quality Platform", es: "Plataforma de calidad de datos" },
    org: "AlgorithIA",
    desc: {
      en: "Standardized validation of enterprise tables using PySpark and Great Expectations, with a Streamlit dashboard for results and tuned Spark sessions for Hive/Impala on Cloudera.",
      es: "Validación estandarizada de tablas empresariales con PySpark y Great Expectations, con dashboard de resultados en Streamlit y sesiones de Spark optimizadas para Hive/Impala en Cloudera.",
    },
    metric: { en: "Billions of records", es: "Miles de millones de registros" },
    tags: ["PySpark", "Great Expectations", "Hive", "Streamlit"],
  },
  {
    art: "fintech",
    title: { en: "Banking Transactions API", es: "API de transacciones bancarias" },
    org: "Accionamos Tus Datos",
    desc: {
      en: "Spring Boot backend that aggregates users' bank accounts and categorized transactions from an external provider, secured with JWT and driven by webhooks for async operations.",
      es: "Backend en Spring Boot que agrega cuentas bancarias y transacciones categorizadas de un proveedor externo, asegurado con JWT y con webhooks para operaciones asíncronas.",
    },
    metric: { en: "REST + GraphQL", es: "REST + GraphQL" },
    tags: ["Java", "Spring Boot", "MongoDB", "JWT"],
  },
  {
    art: "micro",
    title: { en: "Transaction Categorization Microservices", es: "Microservicios de categorización" },
    org: "Accionamos Tus Datos",
    desc: {
      en: "Endpoints, services and persistence across three Grails/Groovy microservices that powered the first version of a banking transaction-categorization platform.",
      es: "Endpoints, servicios y persistencia en tres microservicios Grails/Groovy que impulsaron la primera versión de una plataforma de categorización de transacciones bancarias.",
    },
    metric: { en: "3 microservices", es: "3 microservicios" },
    tags: ["Grails", "Groovy", "Spock", "Microservices"],
  },
  {
    art: "fingerprint",
    title: { en: "Fingerprint Recognizer", es: "Reconocedor de huellas dactilares" },
    org: "ESCOM – IPN",
    desc: {
      en: "Machine-learning fingerprint recognition system built during social service: neural-network training and accuracy evaluation through false-positive / false-negative analysis.",
      es: "Sistema de reconocimiento de huellas con machine learning desarrollado en el servicio social: entrenamiento de redes neuronales y evaluación con análisis de falsos positivos / negativos.",
    },
    metric: { en: "Neural networks", es: "Redes neuronales" },
    tags: ["Python", "Machine Learning", "Neural Networks"],
  },
  {
    art: "vitals",
    title: { en: "Vital-Signs Monitor", es: "Monitor de signos vitales" },
    org: "ESCOM – IPN",
    desc: {
      en: "Hybrid application that reads vital signs from Arduino sensors and displays them in real time through a Vue.js front end and a Node.js backend.",
      es: "Aplicación híbrida que lee signos vitales desde sensores Arduino y los muestra en tiempo real con un front end en Vue.js y un backend en Node.js.",
    },
    metric: { en: "IoT + Web", es: "IoT + Web" },
    tags: ["Vue.js", "Node.js", "Arduino"],
  },
];

// `icon` keys are mapped to logos in src/components/Skills.jsx
export const skillGroups = [
  {
    title: { en: "Languages", es: "Lenguajes" },
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "Groovy", icon: "groovy" },
      { name: "C", icon: "c" },
    ],
  },
  {
    title: { en: "Backend & Frameworks", es: "Backend y frameworks" },
    items: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Flask", icon: "flask" },
      { name: "Grails", icon: "grails" },
      { name: "Node.js", icon: "node" },
      { name: "Vue.js", icon: "vue" },
      { name: "GraphQL", icon: "graphql" },
      { name: "JWT", icon: "jwt" },
    ],
  },
  {
    title: { en: "Data & AI", es: "Datos e IA" },
    items: [
      { name: "PySpark", icon: "spark" },
      { name: "Great Expectations", icon: "ge" },
      { name: "Hive", icon: "hive" },
      { name: "Cloudera", icon: "cloudera" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Machine Learning", icon: "ml" },
    ],
  },
  {
    title: { en: "Cloud & Databases", es: "Nube y bases de datos" },
    items: [
      { name: "AWS Lambda", icon: "lambda" },
      { name: "Rekognition", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Firebase", icon: "firebase" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: { en: "Engineering Practices", es: "Prácticas de ingeniería" },
    items: [
      { name: "Design Patterns", icon: "patterns" },
      { name: "Microservices", icon: "micro" },
      { name: "Mockito / Spock", icon: "test" },
      { name: "Git", icon: "git" },
      { name: "Gradle", icon: "gradle" },
      { name: "Scrum / Kanban", icon: "agile" },
    ],
  },
];

export const education = [
  {
    type: "degree",
    title: { en: "B.E. Computational Systems Engineering", es: "Ingeniería en Sistemas Computacionales" },
    org: "Escuela Superior de Cómputo (ESCOM) – Instituto Politécnico Nacional",
    period: "2017 – 2022",
  },
  {
    type: "cert",
    title: { en: "Microsoft Certified: Azure Fundamentals (AZ-900)", es: "Microsoft Certified: Azure Fundamentals (AZ-900)" },
    org: "Microsoft",
    period: "2021",
  },
  {
    type: "service",
    title: { en: "Software Developer — Social Service", es: "Desarrollador de Software — Servicio Social" },
    org: "Escuela Superior de Cómputo (ESCOM) – IPN",
    period: "2021 – 2022",
  },
];
