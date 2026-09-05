import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jennet Oraz | Salesforce Consultant & Business Analyst" },
      {
        name: "description",
        content:
          "Salesforce Consultant, Certified Administrator, and Business Analyst with 5+ years of experience in CRM strategy, automation, UAT, integrations, and AI.",
      },
      { property: "og:title", content: "Jennet Oraz | Salesforce Consultant & Business Analyst" },
      {
        property: "og:description",
        content: "Turning business needs into practical, scalable Salesforce solutions.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["about", "About"],
  ["expertise", "Expertise"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["credentials", "Credentials"],
  ["contact", "Contact"],
];

const SKILLS = [
  {
    number: "01",
    title: "Business analysis",
    copy: "Requirements gathering, functional requirements, user stories, acceptance criteria, process documentation, stakeholder management, and UAT.",
  },
  {
    number: "02",
    title: "Salesforce administration",
    copy: "Sales and Service Cloud, CRM configuration, Flow automation, approvals, reports, dashboards, users, security, and data management.",
  },
  {
    number: "03",
    title: "AI & intelligent automation",
    copy: "Agentforce, Einstein AI, Guru AI, Gong, Claude, generative AI, use-case analysis, AI-enabled workflows, integrations, testing, and UAT.",
  },
  {
    number: "04",
    title: "Agile delivery & integration",
    copy: "Jira, Confluence, backlog management, sprint planning, REST/SOAP integrations, data synchronization, release support, and cross-functional delivery.",
  },
];

const EXPERIENCE = [
  {
    company: "Paychex",
    role: "Salesforce Consultant",
    period: "03/2026 — Present",
    intro:
      "Supporting AI-enabled CRM initiatives while translating operational needs into scalable Salesforce solutions.",
    points: [
      "Support the Salesforce integration of Guru AI and Gong, connecting knowledge and conversation intelligence with CRM workflows to improve sales productivity.",
      "Partner with stakeholders on requirements, process analysis, user stories, documentation, and solution recommendations.",
      "Configure Sales and Service Cloud, Flows, approvals, reports, dashboards, validation rules, security, and data management.",
      "Coordinate UAT, troubleshoot issues, support data quality, and help teams adopt new processes and tools.",
    ],
  },
  {
    company: "MTX Group",
    role: "Salesforce Consultant",
    period: "09/2023 — 02/2026",
    intro:
      "Delivered Salesforce solutions for public health, education, and electoral-sector programs in Agile environments.",
    points: [
      "Gathered business and functional requirements, analyzed workflows, and translated needs into practical platform improvements.",
      "Managed user stories, tasks, defects, enhancements, and documentation in Jira and Confluence.",
      "Supported UAT, stakeholder coordination, Sales and Service Cloud administration, automation, security, reporting, and data models.",
      "Partnered with technical teams on customizations, integrations, deployments, and release readiness.",
    ],
    awards: ["Above and Beyond Award · July 2025", "Team Excellence Award · August 2025"],
  },
  {
    company: "Zillow Group",
    role: "Salesforce Administrator / Consultant",
    period: "06/2021 — 08/2023",
    intro:
      "Administered Sales and Service Cloud environments and helped internal teams turn business needs into reliable CRM improvements.",
    points: [
      "Managed users, profiles, permission sets, data, reports, dashboards, and day-to-day configuration.",
      "Created Flows, approval processes, email automations, validation rules, and workflow enhancements.",
      "Supported requirements, UAT, troubleshooting, defect resolution, integrations, data analysis, and quality initiatives.",
      "Contributed to custom enhancements while following Salesforce architecture, security, and platform best practices.",
    ],
  },
];

const PROJECTS = [
  {
    number: "01",
    client: "Paychex",
    title: "Guru AI & Gong",
    period: "2026 — Present",
    copy: "Connecting AI-powered knowledge and conversation intelligence with Salesforce workflows so sales teams can find useful insights faster.",
    tags: ["AI enablement", "CRM integration", "Adoption"],
  },
  {
    number: "02",
    client: "Washington State",
    title: "WA HELMS",
    period: "Dec 2024 — Mar 2026",
    copy: "Aligned Salesforce capabilities with the operational and regulatory needs of a statewide health and eligibility licensing program.",
    tags: ["Public sector", "Service Cloud", "UAT"],
  },
  {
    number: "03",
    client: "Montana DPHHS",
    title: "MAQCS",
    period: "Oct 2024 — Dec 2024",
    copy: "Supported a public-health quality and compliance solution through platform configuration, structured data, accessible experiences, and release coordination.",
    tags: ["Public health", "Data modeling", "Delivery"],
  },
  {
    number: "04",
    client: "Maryland State Department of Education",
    title: "Child Care Licensing & Services",
    period: "Apr 2024 — Oct 2024",
    copy: "Helped shape tailored Service Cloud solutions, improve the end-user experience, and support reliable delivery through Flosum.",
    tags: ["Service Cloud", "UI/UX", "Flosum"],
  },
  {
    number: "05",
    client: "New York State Board of Elections",
    title: "Public Matching Funds Program",
    period: "Sep 2023 — Mar 2024",
    copy: "Supported Salesforce solutions for public funding and election-cycle compliance, with an emphasis on clear data models and stable releases.",
    tags: ["Compliance", "Data models", "Release support"],
  },
];

function Sidebar() {
  return (
    <aside className="sidebar-shell text-sidebar-foreground">
      <div>
        <a href="#about" className="inline-flex items-center gap-3" aria-label="Back to introduction">
          <span className="flex h-11 w-11 items-center justify-center border border-sidebar-foreground/35 font-display text-2xl">JO</span>
          <span className="text-xs uppercase tracking-[0.16em] text-sidebar-foreground/75">Portfolio · 2026</span>
        </a>

        <h1 className="mt-12 font-display text-[clamp(4.5rem,8vw,8rem)] leading-[0.78] uppercase">
          Jennet<br />Oraz
        </h1>
        <p className="mt-7 max-w-xs text-lg leading-snug text-sidebar-foreground/90">
          Salesforce Consultant<br />Business Analyst<br />Certified Administrator
        </p>

        <nav className="mt-12 hidden lg:block" aria-label="Portfolio sections">
          <ul className="space-y-3">
            {NAV.map(([id, label], index) => (
              <li key={id}>
                <a className="group flex items-center gap-4 text-sm uppercase tracking-[0.12em] text-sidebar-foreground/65 transition-colors hover:text-sidebar-foreground" href={`#${id}`}>
                  <span className="text-xs opacity-60">0{index + 1}</span>
                  <span>{label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-16 border-t border-sidebar-foreground/25 pt-6">
        <p className="text-xs uppercase tracking-[0.15em] text-sidebar-foreground/60">Based in</p>
        <p className="mt-2 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" aria-hidden /> Aventura, Florida</p>
        <a href="mailto:jennet62@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
          Let&apos;s connect <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </aside>
  );
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <header className="mb-10 border-b border-border pb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{number} · {label}</p>
      <h2 className="mt-3 font-display text-5xl uppercase leading-none text-foreground sm:text-6xl">{title}</h2>
    </header>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[minmax(300px,34vw)_1fr]">
      <Sidebar />

      <main className="lg:col-start-2">
        <section id="about" className="relative flex min-h-[88vh] scroll-mt-6 flex-col justify-center overflow-hidden px-6 py-20 sm:px-12 lg:min-h-screen lg:px-[clamp(3rem,8vw,8rem)]">
          <div className="float-note absolute right-[8%] top-[10%] hidden rotate-6 border border-border bg-highlight px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-highlight-foreground shadow-note sm:block" aria-hidden>
            People first.<br />Always.
          </div>
          <div className="float-note-delayed absolute bottom-[14%] right-[12%] hidden h-20 w-20 -rotate-6 items-center justify-center bg-primary font-display text-4xl text-primary-foreground sm:flex" aria-hidden>☁</div>

          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-accent">Hello, I&apos;m Jennet</p>
          <p className="mt-7 max-w-3xl text-[clamp(2rem,4.4vw,4.5rem)] font-light leading-[1.08] text-foreground">
            I turn business needs into <span className="font-display uppercase text-accent">Salesforce solutions</span> people can actually use.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Salesforce Certified Administrator and Business Analyst with 5+ years of experience across requirements, process improvement, automation, data, integrations, UAT, and Agile delivery. I also support AI-enabled CRM initiatives using Agentforce, Guru AI, Gong, and generative AI tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              See my work <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="mailto:jennet62@gmail.com" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
              Email me <Mail className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 border-y border-border sm:grid-cols-4">
            {[["5+", "Years in Salesforce"], ["3", "Credentials"], ["2", "MTX awards"], ["AI", "CRM experience"]].map(([value, label]) => (
              <div key={label} className="border-border px-4 py-5 first:pl-0 sm:border-l sm:first:border-l-0">
                <dt className="font-display text-4xl text-foreground">{value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="expertise" className="page-section bg-surface">
          <SectionHeading number="01" label="What I bring" title="Expertise" />
          <div className="grid gap-x-12 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <article key={skill.title} className="border-b border-border py-7">
                <div className="flex items-start gap-5">
                  <span className="mt-1 font-display text-2xl text-accent">{skill.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{skill.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="page-section">
          <SectionHeading number="02" label="Career" title="Experience" />
          <div>
            {EXPERIENCE.map((job, index) => (
              <article key={job.company} className="grid gap-6 border-b border-border py-10 first:pt-0 md:grid-cols-[9rem_1fr]">
                <div>
                  <p className="font-display text-4xl text-accent">0{index + 1}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{job.period}</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl uppercase text-foreground sm:text-5xl">{job.company}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.1em] text-accent">{job.role}</p>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground">{job.intro}</p>
                  <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-highlight" aria-hidden />{point}</li>)}
                  </ul>
                  {job.awards && <div className="mt-6 flex flex-wrap gap-2">{job.awards.map((award) => <span key={award} className="bg-highlight px-3 py-2 text-xs font-semibold text-highlight-foreground">★ {award}</span>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="page-section bg-foreground text-background">
          <SectionHeading number="03" label="Selected work" title="Projects" />
          <div className="grid gap-px bg-background/20 sm:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <article key={project.title} className={`group relative min-h-80 bg-foreground p-7 transition-colors hover:bg-primary sm:p-9 ${index === 0 ? "sm:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl text-highlight">{project.number}</span>
                  <span className="text-xs uppercase tracking-[0.1em] text-background/60">{project.period}</span>
                </div>
                <div className="mt-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-highlight">{project.client}</p>
                  <h3 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-background/70 group-hover:text-background/90">{project.copy}</p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.08em] text-background/55">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="credentials" className="page-section bg-surface">
          <SectionHeading number="04" label="Proof & foundation" title="Credentials" />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Certifications</h3>
              {["Salesforce Certified Administrator", "Salesforce Certified Platform Developer I", "Salesforce Agentblazer Innovator · 2026"].map((cert, index) => (
                <p key={cert} className="flex items-baseline gap-4 border-b border-border py-5 text-lg font-semibold text-foreground"><span className="font-display text-2xl text-accent">0{index + 1}</span>{cert}</p>
              ))}
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Education</h3>
              <div className="border-b border-border py-5">
                <p className="text-lg font-semibold text-foreground">BBA in Finance</p>
                <p className="mt-1 text-muted-foreground">Delta State University · 2020</p>
                <p className="mt-2 text-sm text-accent">GPA 4.00 · Summa Cum Laude</p>
              </div>
              <div className="border-b border-border py-5">
                <p className="text-lg font-semibold text-foreground">Associate of Science</p>
                <p className="mt-1 text-muted-foreground">Cloud County Community College · 2018</p>
                <p className="mt-2 text-sm text-accent">GPA 4.00 · With Highest Honors</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="page-section bg-highlight text-highlight-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">05 · Contact</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.88]">Let&apos;s make Salesforce work better.</h2>
          <div className="mt-12 flex flex-col gap-4 border-t border-highlight-foreground/25 pt-8 sm:flex-row sm:flex-wrap sm:gap-8">
            <a href="mailto:jennet62@gmail.com" className="inline-flex items-center gap-2 font-semibold hover:underline"><Mail className="h-4 w-4" aria-hidden /> jennet62@gmail.com</a>
            <a href="tel:+13058169757" className="inline-flex items-center gap-2 font-semibold hover:underline"><Phone className="h-4 w-4" aria-hidden /> (305) 816-9757</a>
            <a href="https://linkedin.com/in/jennet-oraz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline">LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
          </div>
          <div className="mt-16 flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.1em] text-highlight-foreground/65">
            <span>Open to BA · Admin · Consultant roles</span>
            <span>© {new Date().getFullYear()} Jennet Oraz</span>
          </div>
        </footer>
      </main>
    </div>
  );
}