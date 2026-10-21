// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Every text field has an English (en) and Spanish (es) version.
// ─────────────────────────────────────────────────────────────

// Contact form → Web3Forms (https://web3forms.com).
// Paste the Access Key that Web3Forms emailed to jesus@jesusdominguezr.com.
// It is safe to publish: it can only deliver messages to that inbox.
export const contactForm = {
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "16d33c47-2dba-400b-9849-2ec003dfc0e3",
};

export const profile = {
  name: "Jesús Alejandro Domínguez Reyes",
  shortName: "Jesús Domínguez",
  initials: "JD",
  email: "jesus@jesusdominguezr.com",
  phone: "+52 56 1480 4291",
  phoneHref: "tel:+525614804291",
  location: { en: "Mexico City, Mexico", es: "Ciudad de México, México" },
  website: "https://jesusdominguezr.com",
  linkedin: "https://www.linkedin.com/in/jesus-a-dominguez-r",
  github: "https://github.com/JAlejandro99",
  cvFile: "/Jesus_Dominguez_Resume.pdf",
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
      en: "Your message goes straight to my inbox. I usually reply within 1–2 days.",
      es: "Tu mensaje llega directo a mi bandeja. Suelo responder en 1–2 días.",
    },
    sending: { en: "Sending…", es: "Enviando…" },
    success: {
      en: "Thanks! Your message was sent. I'll get back to you soon.",
      es: "¡Gracias! Tu mensaje fue enviado. Te responderé pronto.",
    },
    error: {
      en: "Something went wrong and the message wasn't sent. Please try again or email me directly.",
      es: "Algo salió mal y el mensaje no se envió. Inténtalo de nuevo o escríbeme directamente por correo.",
    },
  },
    // Pre-filled draft when a visitor clicks the email link (opens their mail app)
  emailDraft: {
    subject: {
      en: "Software Engineer opportunity",
      es: "Oportunidad como Software Engineer",
    },
    body: {
      en: "Hi Jesús,\n\nI came across your website and I'd like to talk with you about a Software Engineer opportunity at [company].\n\n[Brief description of the role]\n\nWould you be available for a quick call this week?\n\nBest regards,\n[Your name]\n[Your role]",
      es: "Hola Jesús,\n\nVi tu sitio web y me gustaría platicar contigo sobre una oportunidad como Software Engineer en [empresa].\n\n[Breve descripción del puesto]\n\n¿Tendrías disponibilidad para una llamada breve esta semana?\n\nSaludos,\n[Tu nombre]\n[Tu puesto]",
    },
  },
  skillsHint: {
    en: "Click a technology to see how I've used it.",
    es: "Da clic en una tecnología para ver cómo la he usado.",
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
  beyond: {
    title: { en: "Beyond the code", es: "Más allá del código" },
    text: {
      en: "Off the clock I play soulslike games like Elden Ring and Sekiro, plus League of Legends. They've taught me patience and persistence: I don't give up on a hard boss, or on a hard bug.",
      es: "En mi tiempo libre juego soulslike como Elden Ring y Sekiro, y también League of Legends. Me han enseñado paciencia y constancia: no me rindo ante un jefe difícil, ni ante un bug difícil.",
    },
  },
  languages: [
    { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" }, pct: 100 },
    { name: { en: "English", es: "Inglés" }, level: { en: "Upper-Intermediate (B2)", es: "Intermedio-avanzado (B2)" }, pct: 75 },
  ],
};

export const experience = [
  {
    company: "AlgorithIA · Grupo Salinas",
    role: { en: "Backend Developer", es: "Desarrollador Backend" },
    start: { en: "Aug 2023", es: "Ago 2023" },
    end: null,
    stack: ["Python", "Spring Boot", "JWT", "PySpark", "Great Expectations", "AWS Lambda", "Cloudera", "Streamlit", "Claude"],
    bullets: [
      {
        en: "Led the follow-up of 2 projects: broke the designs down into macro tasks and subtasks, tracked progress and completed the remaining development.",
        es: "Lideré el seguimiento de 2 proyectos: descompuse el diseño en macro tareas y subtareas, di seguimiento al avance y culminé el desarrollo faltante.",
      },
      {
        en: "Designed a Python library to securely run salary-estimation models, with signed machine-bound licenses, encrypted model weights and hash-chained, blockchain-backed audit logs.",
        es: "Diseñé una librería en Python para ejecutar de forma segura modelos de estimación salarial, con licencias firmadas ligadas al equipo, pesos del modelo cifrados y bitácoras de auditoría encadenadas con hashes y respaldadas en blockchain.",
      },
      {
        en: "Kept end-to-end execution under 30 ms, with roughly half of runtime in inference and the rest in security controls.",
        es: "Mantuve la ejecución completa por debajo de 30 ms, con aproximadamente la mitad del tiempo en inferencia y el resto en controles de seguridad.",
      },
      {
        en: "Built REST APIs secured with JWT authentication and authorization, meeting a 200 ms latency target.",
        es: "Construí APIs REST protegidas con autenticación y autorización JWT, cumpliendo un objetivo de latencia de 200 ms.",
      },
      {
        en: "Developed Python REST APIs for AI models and Spring Boot APIs for statistical data; refactored AWS Lambda functions with the Builder Pattern.",
        es: "Desarrollé APIs REST en Python para modelos de IA y APIs en Spring Boot para información estadística; refactoricé funciones AWS Lambda con el patrón Builder.",
      },
      {
        en: "Built the Great Expectations + PySpark data-validation workflow for enterprise tables with billions of records.",
        es: "Construí el flujo de validación de datos con Great Expectations y PySpark para tablas empresariales con miles de millones de registros.",
      },
      {
        en: "Fixed out-of-memory crashes in multi-table validation runs by releasing Spark memory after each table load.",
        es: "Resolví caídas por falta de memoria al validar múltiples tablas liberando la memoria de Spark después de cargar cada tabla.",
      },
      {
        en: "Tuned Spark session configurations, improving query response times on Hive and Impala datasets in Cloudera Machine Learning.",
        es: "Ajusté configuraciones de sesión de Spark, mejorando los tiempos de respuesta de consultas sobre Hive e Impala en Cloudera Machine Learning.",
      },
      {
        en: "Built a Streamlit dashboard to visualize data-quality results across enterprise tables.",
        es: "Construí un dashboard en Streamlit para visualizar los resultados de calidad de datos de las tablas empresariales.",
      },
      {
        en: "Use Claude as an AI coding assistant, cutting development time by ~30% and unit-test writing time by ~50%.",
        es: "Uso Claude como asistente de programación con IA, reduciendo ~30% el tiempo de desarrollo y ~50% el tiempo de escribir pruebas unitarias.",
      },
    ],
  },
  {
    company: "Accionamos Tus Datos (ATD) · Grupo Salinas",
    role: { en: "Backend Developer", es: "Desarrollador Backend" },
    start: { en: "Aug 2022", es: "Ago 2022" },
    end: { en: "Aug 2023", es: "Ago 2023" },
    stack: ["Java", "Spring Boot", "Grails", "MongoDB", "MySQL", "GraphQL", "JWT", "Mockito", "Spock"],
    bullets: [
      {
        en: "Built Spring Boot services to retrieve bank accounts and categorized transactions from an external financial-data provider (Controller, Service, Repository and DTO layers on MongoDB).",
        es: "Construí servicios en Spring Boot para obtener cuentas bancarias y transacciones categorizadas de un proveedor externo de datos financieros (capas Controller, Service, Repository y DTO sobre MongoDB).",
      },
      {
        en: "Implemented JWT authentication and authorization, including token generation, cryptographic signing and validation.",
        es: "Implementé autenticación y autorización con JWT, incluyendo generación de tokens, firma criptográfica y validación.",
      },
      {
        en: "Integrated external financial APIs and webhook-based async processing; designed REST endpoints with multi-criteria filtering and GraphQL where appropriate.",
        es: "Integré APIs financieras externas y procesamiento asíncrono basado en webhooks; diseñé endpoints REST con filtrado multicriterio y GraphQL donde convenía.",
      },
      {
        en: "Took ownership of an internal Java SDK (Retrofit) after the tech lead's departure while mentoring a junior teammate.",
        es: "Asumí el mantenimiento de un SDK interno en Java (Retrofit) tras la salida del tech lead, mientras apoyaba a un compañero junior.",
      },
      {
        en: "Shipped features across three Grails/Groovy microservices and a push-notification service; wrote unit tests with Mockito and Spock.",
        es: "Entregué funcionalidades en tres microservicios Grails/Groovy y un servicio de notificaciones push; escribí pruebas unitarias con Mockito y Spock.",
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
// `desc` is shown when a visitor clicks the technology
export const skillGroups = [
  {
    title: { en: "Languages", es: "Lenguajes" },
    items: [
      { name: "Java", icon: "java", desc: { en: "Main language at ATD: Spring Boot banking services and an internal Java SDK built with Retrofit.", es: "Lenguaje principal en ATD: servicios bancarios en Spring Boot y un SDK interno en Java construido con Retrofit." } },
      { name: "Python", icon: "python", desc: { en: "Main language at AlgorithIA: a secure ML-model runtime, REST APIs for AI models and PySpark data validation.", es: "Lenguaje principal en AlgorithIA: un runtime seguro para modelos de ML, APIs REST para modelos de IA y validación de datos con PySpark." } },
      { name: "JavaScript", icon: "javascript", desc: { en: "Front ends with Vue.js and a Node.js backend in university projects, plus this React website.", es: "Front ends con Vue.js y un backend en Node.js en proyectos universitarios, además de este sitio en React." } },
      { name: "SQL", icon: "sql", desc: { en: "Queries on MySQL, Hive and Impala for application data, validation and analytics.", es: "Consultas en MySQL, Hive e Impala para datos de aplicaciones, validación y análisis." } },
      { name: "Groovy", icon: "groovy", desc: { en: "Grails microservices and Spock unit tests at ATD.", es: "Microservicios en Grails y pruebas unitarias con Spock en ATD." } },
      { name: "C", icon: "c", desc: { en: "Foundation from ESCOM: algorithms, data structures and low-level programming.", es: "Base de la ESCOM: algoritmos, estructuras de datos y programación de bajo nivel." } },
    ],
  },
  {
    title: { en: "Backend & Frameworks", es: "Backend y frameworks" },
    items: [
      { name: "Spring Boot", icon: "spring", desc: { en: "Banking APIs at ATD (Controller, Service, Repository and DTO layers) and statistics APIs at AlgorithIA.", es: "APIs bancarias en ATD (capas Controller, Service, Repository y DTO) y APIs de estadística en AlgorithIA." } },
      { name: "Flask", icon: "flask", desc: { en: "Python REST APIs that serve AI models.", es: "APIs REST en Python que exponen modelos de IA." } },
      { name: "Grails", icon: "grails", desc: { en: "Endpoints and persistence across three microservices of a banking transaction-categorization platform.", es: "Endpoints y persistencia en tres microservicios de una plataforma de categorización de transacciones bancarias." } },
      { name: "Node.js", icon: "node", desc: { en: "Backend of a real-time vital-signs monitor fed by Arduino sensors (ESCOM).", es: "Backend de un monitor de signos vitales en tiempo real alimentado por sensores Arduino (ESCOM)." } },
      { name: "Vue.js", icon: "vue", desc: { en: "Real-time front end of the vital-signs monitor (ESCOM).", es: "Front end en tiempo real del monitor de signos vitales (ESCOM)." } },
      { name: "GraphQL", icon: "graphql", desc: { en: "Flexible queries alongside REST endpoints with multi-criteria filtering at ATD.", es: "Consultas flexibles junto a endpoints REST con filtrado multicriterio en ATD." } },
      { name: "JWT", icon: "jwt", desc: { en: "Token generation, signing and validation at ATD; JWT-secured APIs under a 200 ms latency target at AlgorithIA.", es: "Generación, firma y validación de tokens en ATD; APIs protegidas con JWT bajo un objetivo de 200 ms en AlgorithIA." } },
    ],
  },
  {
    title: { en: "Data & AI", es: "Datos e IA" },
    items: [
      { name: "PySpark", icon: "spark", desc: { en: "Validation of enterprise tables with billions of records; fixed out-of-memory crashes by freeing memory per table.", es: "Validación de tablas empresariales con miles de millones de registros; resolví caídas por memoria liberándola por tabla." } },
      { name: "Great Expectations", icon: "ge", desc: { en: "Built the data-validation workflow that standardizes quality checks on enterprise tables.", es: "Construí el flujo de validación que estandariza los controles de calidad sobre tablas empresariales." } },
      { name: "Hive", icon: "hive", desc: { en: "Querying enterprise datasets; tuned Spark sessions to speed up Hive and Impala queries.", es: "Consulta de datasets empresariales; ajusté sesiones de Spark para acelerar consultas en Hive e Impala." } },
      { name: "Cloudera", icon: "cloudera", desc: { en: "Cloudera Machine Learning is where the data-validation jobs run.", es: "Cloudera Machine Learning es donde corren los procesos de validación de datos." } },
      { name: "Streamlit", icon: "streamlit", desc: { en: "Dashboard to visualize data-quality results, refactored with the Builder Pattern.", es: "Dashboard para visualizar resultados de calidad de datos, refactorizado con el patrón Builder." } },
      { name: "Machine Learning", icon: "ml", desc: { en: "Secure delivery of salary-estimation models at AlgorithIA and a neural-network fingerprint recognizer at ESCOM.", es: "Entrega segura de modelos de estimación salarial en AlgorithIA y un reconocedor de huellas con redes neuronales en la ESCOM." } },
    ],
  },
  {
    title: { en: "Cloud & Databases", es: "Nube y bases de datos" },
    items: [
      { name: "AWS Lambda", icon: "lambda", desc: { en: "Refactored serverless functions with the Builder Pattern for maintainability.", es: "Refactoricé funciones serverless con el patrón Builder para hacerlas más mantenibles." } },
      { name: "Azure", icon: "azure", desc: { en: "Microsoft Certified: Azure Fundamentals (AZ-900).", es: "Certificación Microsoft Azure Fundamentals (AZ-900)." } },
      { name: "MongoDB", icon: "mongodb", desc: { en: "Persistence for bank accounts and categorized transactions in Spring Boot services.", es: "Persistencia de cuentas bancarias y transacciones categorizadas en servicios Spring Boot." } },
      { name: "MySQL", icon: "mysql", desc: { en: "Relational persistence for ATD's backend services.", es: "Persistencia relacional para los servicios backend de ATD." } },
    ],
  },
  {
    title: { en: "Engineering Practices", es: "Prácticas de ingeniería" },
    items: [
      { name: "Design Patterns", icon: "patterns", desc: { en: "Builder Pattern refactors and layered architectures that keep code reusable and testable.", es: "Refactors con el patrón Builder y arquitecturas por capas que mantienen el código reutilizable y testeable." } },
      { name: "Microservices", icon: "micro", desc: { en: "Shipped features across three Grails microservices.", es: "Entregué funcionalidades en tres microservicios en Grails." } },
      { name: "Mockito / Spock", icon: "test", desc: { en: "Unit tests for Java and Groovy services at ATD.", es: "Pruebas unitarias para servicios Java y Groovy en ATD." } },
      { name: "Claude (AI)", icon: "claude", desc: { en: "AI coding assistant: ~30% less development time and ~50% less time writing unit tests.", es: "Asistente de programación con IA: ~30% menos tiempo de desarrollo y ~50% menos tiempo escribiendo pruebas unitarias." } },
      { name: "Git", icon: "git", desc: { en: "Version control with a feature → develop → main branching flow and pull requests.", es: "Control de versiones con flujo de ramas feature → develop → main y pull requests." } },
      { name: "Gradle", icon: "gradle", desc: { en: "Builds and dependency management for Java and Grails projects.", es: "Compilación y manejo de dependencias en proyectos Java y Grails." } },
      { name: "Scrum / Kanban", icon: "agile", desc: { en: "Agile teams; broke project designs into macro tasks and subtasks to track delivery.", es: "Equipos ágiles; descompuse diseños de proyecto en macro tareas y subtareas para dar seguimiento a la entrega." } },
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
