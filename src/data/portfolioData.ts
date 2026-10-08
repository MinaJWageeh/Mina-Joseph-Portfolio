export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architectureHighlights: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  ranking: string;
  graduationProject: {
    title: string;
    grade: string;
    description: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: "Core" | "Advanced" | "Proficient"; highlight?: boolean }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
}

import { getAssetPath } from "@/lib/assets";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mina Joseph Wageh",
    title: "Full-Stack Developer & Systems Software Engineer",
    location: "Shubra, Cairo, Egypt",
    phone: "(+20) 1098734124",
    email: "minajoseph997@gmail.com",
    linkedin: "https://www.linkedin.com/in/minajoseph10",
    linkedinHandle: "minajoseph10",
    github: "https://github.com/MinaJWageeh",
    githubHandle: "MinaJWageeh",
    profilePhoto: getAssetPath("/mina-joseph.jpg"),
    cvPath: getAssetPath("/Mina_Joseph_Wageh_Full_Stack_CV_ATS.pdf"),
    statusText: "Available for Full-Time Roles & High-Impact Contracts",
    headline: "Architecting high-performance web systems, real-time engines, and distributed platforms with mathematical rigor.",
    bioLead: "Full-Stack Engineer with an Honors Electrical Engineering foundation from Benha University. I combine systems-level engineering discipline with cutting-edge web craftsmanship.",
    languages: [
      { name: "English", level: "Professional Working / Very Good" },
      { name: "Italian", level: "Working Proficiency / Good" },
      { name: "Arabic", level: "Native" }
    ],
    stats: [
      { value: "6+", label: "Verified Production Projects" },
      { value: "Top 3%", label: "Engineering Honors Graduate" },
      { value: "Sub-50ms", label: "Real-time State Latency" },
      { value: "100%", label: "Verified Source & Architecture" }
    ]
  },

  projects: [
    {
      id: "rental-app",
      title: "La Place — Luxury Rental & Property Platform",
      tagline: "End-to-end property rental web platform inspired by Airbnb with real-time WebSockets and automated contract lifecycles.",
      category: "Full-Stack SaaS",
      featured: true,
      badge: "Flagship Monorepo",
      problem: "Traditional rental platforms suffer from fragmented communication between tenants and landlords, opaque contract signing, and delayed payment reconciliation.",
      solution: "Engineered an integrated monorepo architecture uniting a NestJS API backend and Next.js web application. Integrated persistent WebSocket gateways for instantaneous tenant-host messaging and live notifications, tied directly to PostgreSQL and Prisma schemas.",
      role: "Lead Full-Stack Architect & Developer",
      technologies: ["Next.js 14+", "NestJS", "PostgreSQL", "Prisma ORM", "WebSockets", "TypeScript", "Tailwind CSS", "Docker"],
      metrics: [
        { label: "Architecture", value: "Modular Monorepo" },
        { label: "Real-Time Sync", value: "WebSocket Gateway" },
        { label: "Data Integrity", value: "ACID Prisma Schemas" }
      ],
      keyFeatures: [
        "Real-time bidirectional messaging between hosts and prospective tenants via WebSockets",
        "Unified web origin serving both public tenant marketplace and administrative `/admin` portal",
        "Automated booking lifecycle management with audit logging, lease contracts, and stored reminders",
        "Prisma database migrations and seed tooling supporting automated CI verification"
      ],
      architectureHighlights: [
        "Strict separation of concerns between NestJS enterprise API layer and unified Next.js App Router front",
        "JWT and refresh token authentication with role-based route protection (Tenants, Hosts, Superadmins)",
        "PostgreSQL relational schema modeling properties, leases, payment transactions, and conversation threads"
      ],
      codeSnippet: {
        filename: "apps/api/src/modules/realtime/rental-gateway.ts",
        language: "typescript",
        code: `@WebSocketGateway({ cors: { origin: '*' } })
export class RentalGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  @SubscribeMessage('send_message')
  async handleTenantMessage(@ConnectedSocket() socket: Socket, @MessageBody() payload: MessagePayload) {
    const message = await this.chatService.persistAndAuthorize(payload);
    this.server.to(\`contract_\${payload.contractId}\`).emit('new_message', message);
    await this.notificationService.triggerPushNotification(payload.recipientId, message);
  }
}`
      },
      githubUrl: "https://github.com/MinaJWageeh",
      liveUrl: "https://github.com/MinaJWageeh"
    },
    {
      id: "paper-io",
      title: "Paper.io — Multimode Real-Time Game Engine",
      tagline: "High-throughput multiplayer game engine built with shared Rust core, WebAssembly, and real-time state synchronization.",
      category: "Systems & Real-Time",
      featured: true,
      badge: "Rust & WebAssembly",
      problem: "Fast-paced territory capture games require low-latency spatial collision algorithms and deterministic state across heterogeneous targets (Web browsers and native desktop).",
      solution: "Architected a zero-overhead Rust gameplay engine in a monorepo (`packages/shared-rust`), compiled to native desktop binaries via Cargo and to high-performance WebAssembly (`apps/web/rust`) for the web client, connected via low-latency WebSockets.",
      role: "Systems Programmer & Core Engine Architect",
      technologies: ["Rust", "WebAssembly (WASM)", "WebSockets", "Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
      metrics: [
        { label: "Frame Rate", value: "Locked 60 FPS" },
        { label: "Sync Engine", value: "Rust Core -> WASM" },
        { label: "Game Modes", value: "3 Competitive Rules" }
      ],
      keyFeatures: [
        "Core gameplay logic compiled from identical Rust source to both native binaries and browser WASM",
        "Low-latency multiplayer synchronization handling real-time player input, trail lines, and territory expansion",
        "Three distinct competitive modes: Time Attack, Killer leaderboard, and Target capture",
        "Dynamic power-ups, collectible accelerators, and spatial collision algorithms"
      ],
      architectureHighlights: [
        "Shared zero-copy memory buffers between WASM runtime and browser HTML5 Canvas renderer",
        "Spatial bounding-box queries avoiding quadratic computation during active line intersection checks",
        "Dual-engine fallback: web JavaScript build and optimized Rust/WASM build in single monorepo"
      ],
      codeSnippet: {
        filename: "packages/shared-rust/src/game_engine.rs",
        language: "rust",
        code: `pub struct GameSession {
    pub players: HashMap<PlayerId, TerritoryPlayer>,
    pub grid: SpatialGrid,
    pub tick_rate: u32,
}

impl GameSession {
    pub fn update_tick(&mut self, dt: f32) -> Vec<GameEvent> {
        let mut events = Vec::new();
        for (_, player) in self.players.iter_mut() {
            player.step_forward(dt);
            if let Some(collision) = self.grid.check_trail_intersection(player) {
                events.push(GameEvent::TerritoryClaimed(collision));
            }
        }
        events
    }
}`
      },
      githubUrl: "https://github.com/MinaJWageeh",
      liveUrl: "https://github.com/MinaJWageeh"
    },
    {
      id: "coptic-dic",
      title: "Coptic Neural Dictionary & RAG Translation Pipeline",
      tagline: "Linguistic translation engine combining contextual grammatical rules, FastAPI, PostgreSQL pgvector, and Next.js portal.",
      category: "AI & NLP Pipeline",
      featured: true,
      badge: "FastAPI & pgvector",
      problem: "Translating ancient languages like Coptic from modern Arabic lacks massive parallel corpora, causing pure statistical models to hallucinate grammatical markers and tense prefixes.",
      solution: "Engineered a hybrid translation pipeline marrying contextual grammatical rules with deterministic vector search via PostgreSQL `pgvector`. Built with FastAPI backend, Next.js administrative dashboard, and Expo React Native mobile client.",
      role: "Backend & NLP Pipeline Engineer",
      technologies: ["FastAPI", "Python", "PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "Next.js", "Docker"],
      metrics: [
        { label: "Lexicon Coverage", value: "Comprehensive" },
        { label: "Search Technique", value: "pgvector Cosine Sim" },
        { label: "Audit Pipeline", value: "Reviewer Feedback Loop" }
      ],
      keyFeatures: [
        "FastAPI translation service executing normalization, tokenization, and grammatical sense matching",
        "PostgreSQL schema with `pgvector` index for semantic retrieval of parallel segments and grammar rules",
        "Interactive Next.js translator with literal word-by-word breakdown, grammar notes, and confidence scores",
        "Review queue workflow where expert-approved translations automatically update the vector knowledge base"
      ],
      architectureHighlights: [
        "Deterministic local embeddings for rapid development and reproducible evaluation benchmarks",
        "Alembic database migrations ensuring zero-downtime schema evolution for lexicon entities",
        "Full Docker Compose orchestration spinning up PostgreSQL/pgvector, Redis, FastAPI, and Next.js"
      ],
      codeSnippet: {
        filename: "backend/app/services/translation_pipeline.py",
        language: "python",
        code: `async def translate_sentence(query: str, db: AsyncSession) -> TranslationResult:
    tokens = tokenize_and_normalize(query)
    vector = await embedding_service.get_vector(query)
    
    # Retrieve closest verified parallel segment via pgvector cosine distance
    similar_segments = await db.execute(
        select(ParallelSegment).order_by(ParallelSegment.embedding.cosine_distance(vector)).limit(3)
    )
    
    analyzed = apply_coptic_grammar_rules(tokens, similar_segments.scalars().all())
    return TranslationResult(coptic_text=analyzed.text, confidence=analyzed.score, references=analyzed.refs)`
      },
      githubUrl: "https://github.com/MinaJWageeh/coptic-dictionary",
      liveUrl: "https://github.com/MinaJWageeh/coptic-dictionary"
    },
    {
      id: "coptic-learn",
      title: "Learn Coptic Language — Cross-Platform Educational Ecosystem",
      tagline: "Bilingual educational platform delivering audio-synchronized curriculum across Flutter mobile and Next.js web applications.",
      category: "Mobile & Web Ecosystem",
      featured: false,
      badge: "Flutter & Next.js",
      problem: "Heritage language learners lack structured digital tools with synchronized authentic pronunciation, structured grammar progression, and offline access.",
      solution: "Developed a cross-platform Flutter application and companion Next.js web portal providing interactive learning stages, synchronized audio pronunciation guides, vocabulary flashcards, and scriptural texts.",
      role: "Mobile & Frontend Engineer",
      technologies: ["Flutter", "Dart", "Next.js", "TypeScript", "Tailwind CSS", "Audio Player Engine"],
      metrics: [
        { label: "Deployment", value: "iOS / Android / Web" },
        { label: "Audio Sync", value: "Sub-100ms Word Sync" },
        { label: "Availability", value: "Offline-First Storage" }
      ],
      keyFeatures: [
        "Bilingual English/Arabic curriculum structured across progressive grammar and vocabulary tiers",
        "Synchronized audio playback highlighting corresponding scriptural text in real time",
        "Interactive flashcard quizzes with spaced-repetition retention metrics",
        "Full offline caching of audio tracks and vocabulary datasets on mobile devices"
      ],
      architectureHighlights: [
        "Clean BLoC / provider pattern in Flutter ensuring decoupled UI and audio state machines",
        "Shared JSON lexicon schemas consumed identically by Flutter mobile and Next.js web platforms"
      ],
      githubUrl: "https://github.com/MinaJWageeh/coptic-language-app",
      liveUrl: "https://github.com/MinaJWageeh/coptic-language-app"
    },
    {
      id: "scandiweb-ecommerce",
      title: "Enterprise E-Commerce Platform @ Scandiweb",
      tagline: "High-performance enterprise e-commerce solutions built on Magento 2 and the lightweight Hyvä Theme framework.",
      category: "Enterprise E-Commerce",
      featured: true,
      badge: "Production Enterprise",
      problem: "Heavy legacy enterprise e-commerce storefronts suffer from slow First Contentful Paint, poor Mobile PageSpeed scores, and brittle checkout funnels.",
      solution: "Engineered performant frontend components and full-stack modules utilizing Magento 2 and Hyvä Theme. Replaced bulky Knockout/RequireJS legacy dependencies with lightweight Alpine.js and Tailwind CSS for superior conversion.",
      role: "Full-Stack Web Developer at Scandiweb",
      technologies: ["Magento 2", "Hyvä Theme", "PHP", "Alpine.js", "Tailwind CSS", "MySQL", "Advanced Git"],
      metrics: [
        { label: "Tenure", value: "Sep 2025 – May 2026" },
        { label: "Performance", value: "95+ Lighthouse Scores" },
        { label: "Methodology", value: "Agile / Strict Code Review" }
      ],
      keyFeatures: [
        "Engineered customer-facing product listing, checkout, and account components with Hyvä",
        "Drastic reduction in JavaScript bundle size resulting in instant user interactivity",
        "Collaborated across international sprint teams with rigorous peer code reviews and clean Git flows",
        "Integrated backend PHP controllers and custom GraphQL/REST data pipelines"
      ],
      architectureHighlights: [
        "Headless-first frontend performance principles eliminating render-blocking scripts",
        "Robust enterprise PHP dependency injection and event-observer architecture"
      ],
      githubUrl: "https://github.com/MinaJWageeh/Scandiweb-Junior-Assignment",
      liveUrl: "https://github.com/MinaJWageeh"
    },
    {
      id: "eslam-store",
      title: "Eslam Store — High-Throughput POS & Inventory Engine",
      tagline: "Retail management and point-of-sale platform featuring instant barcode cashier, thermal receipt printing, and Cloudflare Tunnel sync.",
      category: "Retail & Business Automation",
      featured: false,
      badge: "Retail POS & Hardware",
      problem: "Local merchants need rapid cashier billing, inventory alerts, and receipt printing without expensive proprietary software or cloud lock-in.",
      solution: "Created a modern Shopify-inspired inventory & POS system using Next.js, offline-first local storage, 80mm ESC/POS thermal printing, and wireless QR code connection allowing mobile access via Cloudflare Tunnel.",
      role: "Full-Stack Developer",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Dexie / IndexedDB", "Thermal ESC/POS", "Cloudflare Tunnel"],
      metrics: [
        { label: "Checkout Speed", value: "Instant Barcode Scan" },
        { label: "Hardware Support", value: "80mm Thermal & A4" },
        { label: "Remote Access", value: "Cloudflare Tunnel" }
      ],
      keyFeatures: [
        "High-speed cashier POS with automated discounts, totals, and low-stock validation",
        "Instant thermal receipt generation formatted for standard 80mm receipt and A4 printers",
        "Wireless QR code pairing allowing store clerks to scan items and check inventory from mobile phones",
        "Automated profit/loss analytics, inventory valuation, and one-click Excel (.xlsx) export"
      ],
      architectureHighlights: [
        "IndexedDB offline persistence ensuring billing never fails during intermittent connectivity",
        "Zero-configuration remote tunneling using Cloudflare for secure remote owner auditing"
      ],
      githubUrl: "https://github.com/MinaJWageeh",
      liveUrl: "https://github.com/MinaJWageeh"
    }
  ],

  experience: [
    {
      id: "scandiweb",
      role: "Full-Stack Web Developer",
      company: "Scandiweb",
      location: "Remote / International",
      period: "Sep 2025 — May 2026",
      type: "Full-Time",
      summary: "Contributed to production-grade enterprise e-commerce solutions utilizing Magento 2 and the cutting-edge Hyvä theme framework, driving sub-second page performance.",
      achievements: [
        "Developed responsive, accessible, high-conversion frontend components using Hyvä, Alpine.js, and Tailwind CSS",
        "Engineered full-stack features adhering to strict Magento 2 architecture standards, clean PHP, and MySQL optimization",
        "Actively participated in international agile sprints, comprehensive code reviews, and robust Git workflows"
      ],
      skills: ["Magento 2", "Hyvä Theme", "PHP", "Tailwind CSS", "JavaScript", "MySQL", "Advanced Git"]
    },
    {
      id: "electrical-engineer",
      role: "Electrical Technical Office Engineer",
      company: "Engineering Consultancy & Contracting Firms (3 Companies)",
      location: "Cairo, Egypt",
      period: "Jan 2022 — May 2025",
      type: "Full-Time",
      summary: "Directed technical office engineering workflows, single-line diagrams, cost estimation, and procurement workflows for large-scale engineering projects.",
      achievements: [
        "Prepared detailed engineering drawings, single-line diagrams, and shop drawings following strict client specifications and safety codes",
        "Executed precision project cost estimations, material pricing, and Bills of Quantities (BOQ) preparation",
        "Managed complex vendor procurement lifecycles, ensuring technical compliance and on-time project delivery",
        "Cultivated rigorous systems-thinking discipline and analytical problem solving now applied directly to software architecture"
      ],
      skills: ["Systems Engineering", "Technical Documentation", "BOQ & Cost Analysis", "Process Optimization", "Quality Assurance"]
    }
  ],

  education: {
    degree: "Bachelor of Science in Electrical Power and Machines Engineering",
    institution: "Shubra Faculty of Engineering, Benha University",
    location: "Cairo, Egypt",
    period: "2016 — 2020",
    grade: "Excellent with Honor",
    ranking: "Ranked 6th cumulatively; Ranked 3rd during final two academic years",
    graduationProject: {
      title: "Electrical Services Design and Home Automation for a 220-Bed Hospital",
      grade: "Excellent",
      description: "Comprehensive automation and electrical distribution infrastructure for a critical-care 220-bed hospital facility, incorporating automated backup power switching, HVAC monitoring, and smart BMS integration."
    }
  },

  certifications: [
    { name: "Advanced Git", issuer: "DataCamp", date: "Sep 2026" },
    { name: "Algorithms & Data Structures", issuer: "Specialized Course", date: "Oct 2025 – Feb 2026" },
    { name: "AI Fundamentals", issuer: "DataCamp", date: "Aug 2025 – Sep 2025" },
    { name: "Vanilla PHP Deep Dive", issuer: "Specialized Program", date: "May 2025 – Jul 2025" },
    { name: "SQL Power & Query Optimization", issuer: "Specialized Course", date: "Apr 2025" },
    { name: "Ultimate React & Modern Ecosystem", issuer: "Specialized Program", date: "Feb 2025 – Mar 2025" },
    { name: "Full-Stack Web Development", issuer: "W3Schools Certified", date: "Jan 2024 – Jan 2025" },
    { name: "Data Analysis Professional Track", issuer: "DataCamp", date: "Dec 2023 – Nov 2024" }
  ],

  skillCategories: [
    {
      title: "Core Languages",
      icon: "Code2",
      description: "Strong foundational fluency in systems, scripting, and typed languages",
      skills: [
        { name: "TypeScript", level: "Core", highlight: true },
        { name: "JavaScript (ES6+)", level: "Core", highlight: true },
        { name: "PHP", level: "Core", highlight: true },
        { name: "Rust", level: "Advanced", highlight: true },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Core", highlight: true },
        { name: "Dart", level: "Proficient" },
        { name: "HTML5 / CSS3", level: "Core" }
      ]
    },
    {
      title: "Frontend & UI Systems",
      icon: "Layout",
      description: "Modern, reactive, pixel-perfect user interfaces with sub-second performance",
      skills: [
        { name: "Next.js (App Router)", level: "Core", highlight: true },
        { name: "React.js", level: "Core", highlight: true },
        { name: "Tailwind CSS", level: "Core", highlight: true },
        { name: "Hyvä Theme (Magento 2)", level: "Advanced", highlight: true },
        { name: "Alpine.js", level: "Advanced" },
        { name: "State Management (Zustand/Redux)", level: "Core" },
        { name: "Responsive & Accessible UI", level: "Core" }
      ]
    },
    {
      title: "Backend & Distributed",
      icon: "Server",
      description: "High-throughput APIs, event-driven gateways, and real-time protocols",
      skills: [
        { name: "NestJS", level: "Core", highlight: true },
        { name: "FastAPI", level: "Advanced", highlight: true },
        { name: "WebSockets & Event Gateways", level: "Core", highlight: true },
        { name: "RESTful API Architecture", level: "Core" },
        { name: "Node.js", level: "Core" },
        { name: "Microservices & Monorepos", level: "Advanced" }
      ]
    },
    {
      title: "Databases, ORM & AI",
      icon: "Database",
      description: "Relational persistence, vector similarity search, and high-performance ORMs",
      skills: [
        { name: "PostgreSQL & pgvector", level: "Core", highlight: true },
        { name: "MySQL", level: "Core", highlight: true },
        { name: "Prisma ORM", level: "Core", highlight: true },
        { name: "SQLAlchemy", level: "Advanced" },
        { name: "Redis Caching", level: "Advanced" },
        { name: "RAG Retrieval Pipelines", level: "Advanced", highlight: true }
      ]
    },
    {
      title: "Platforms & DevOps",
      icon: "Cpu",
      description: "Production containerization, version control, and multi-platform runtimes",
      skills: [
        { name: "Docker & Compose", level: "Advanced", highlight: true },
        { name: "Git & Advanced Workflows", level: "Core", highlight: true },
        { name: "Flutter (Cross-Platform Mobile)", level: "Advanced" },
        { name: "Cloudflare (Tunnels & Workers)", level: "Advanced" },
        { name: "Linux / Shell Scripting", level: "Proficient" },
        { name: "Browser Extensions", level: "Proficient" }
      ]
    }
  ],

  services: [
    {
      id: "fullstack-saas",
      title: "High-Performance Full-Stack Web Applications",
      tagline: "End-to-end web applications engineered for speed, clean architecture, and conversion.",
      description: "I build complete SaaS platforms and web products using Next.js App Router, NestJS or FastAPI backends, and PostgreSQL. From schema design to interactive frontends, every layer is engineered for long-term maintainability.",
      deliverables: [
        "Clean, typed full-stack monorepo or microservice architecture",
        "Lightning-fast SEO and Core Web Vitals optimization",
        "Role-based authentication (JWT, OAuth) and administrative dashboards",
        "Database schema modeling with migrations and automated seeds"
      ],
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"]
    },
    {
      id: "realtime-systems",
      title: "Real-Time Systems & High-Throughput Engines",
      tagline: "Zero-latency synchronization, WebSockets, and Rust-powered performance cores.",
      description: "When milliseconds matter—whether for multiplayer interactions, collaborative dashboards, or instant live messaging—I architect low-latency WebSocket gateways and compiled Rust/WASM engines.",
      deliverables: [
        "Bidirectional WebSocket gateways with pub/sub clustering",
        "Client-side state reconciliation and lag mitigation",
        "Rust core logic compiled to native desktop or browser WebAssembly",
        "Robust reconnection handling and message persistence"
      ],
      stack: ["Rust", "WebAssembly", "WebSockets", "NestJS Gateways", "Next.js"]
    },
    {
      id: "enterprise-ecommerce",
      title: "Enterprise E-Commerce & Hyvä Storefronts",
      tagline: "Sub-second Magento 2 and headless commerce experiences that boost conversion.",
      description: "Drawing from direct production experience at Scandiweb, I modernize legacy e-commerce stores using Magento 2 and Hyvä Theme to eliminate bloat, achieve 90+ Lighthouse scores, and increase checkout velocity.",
      deliverables: [
        "Hyvä Theme implementation replacing legacy RequireJS/Knockout stacks",
        "Tailwind CSS and Alpine.js storefront customization",
        "Performance audits and Core Web Vitals remediation",
        "Custom checkout flows, catalog indexing, and third-party integrations"
      ],
      stack: ["Magento 2", "Hyvä Theme", "PHP", "Alpine.js", "Tailwind CSS", "MySQL"]
    },
    {
      id: "ai-rag-pipelines",
      title: "Specialized AI, RAG & Vector Search Pipelines",
      tagline: "Domain-specific AI applications, pgvector semantic search, and structured retrieval.",
      description: "I design production-ready retrieval-augmented generation (RAG) and domain-specific search services. By pairing deterministic algorithmic heuristics with vector databases like PostgreSQL pgvector, I deliver reliable, hallucination-resistant systems.",
      deliverables: [
        "FastAPI microservices with pgvector embedding cosine indexing",
        "Custom linguistic/document parsing and tokenization pipelines",
        "Interactive web interfaces with confidence scoring and reference citations",
        "Audit queues and human-in-the-loop review workflows"
      ],
      stack: ["FastAPI", "Python", "pgvector", "PostgreSQL", "Next.js", "Docker"]
    }
  ]
};
