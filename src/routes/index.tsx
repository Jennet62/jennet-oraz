import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jennet Oraz — Salesforce Business Analyst & Certified Admin" },
      {
        name: "description",
        content:
          "Salesforce Certified Administrator and Business Analyst with 5+ years configuring Sales & Service Cloud, Flow automation, integrations, and Agentforce AI solutions.",
      },
      { property: "og:title", content: "Jennet Oraz — Salesforce Business Analyst & Certified Admin" },
      {
        property: "og:description",
        content:
          "5+ years administering and improving Salesforce: requirements, automation, UAT, integrations, and AI-enabled solutions with Agentforce.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    title: "Business Analysis",
    items: [
      "Requirements gathering & functional specs",
      "User stories and acceptance criteria",
      "Business process & workflow analysis",
      "Process documentation & improvement",
    ],
  },
  {
    title: "Agile Delivery",
    items: [
      "Agile / Scrum ceremonies",
      "Jira backlog & sprint planning",
      "Confluence documentation",
      "UAT, defect & enhancement tracking",
    ],
  },
  {
    title: "Salesforce Administration",
    items: [
      "Sales Cloud & Service Cloud configuration",
      "Flows, approval processes, validation rules",
      "Reports, dashboards, user management",
      "Profiles, permission sets, sharing rules",
    ],
  },
  {
    title: "Development & Integration",
    items: [
      "Apex, LWC / Aura, Visualforce",
      "SOQL, SOSL, data modeling",
      "REST & SOAP API integrations",
      "SFDX, Bitbucket, GitHub, Flosum",
    ],
  },
  {
    title: "AI & Agentforce",
    items: [
      "Agentblazer Innovator",
      "Salesforce AI Agents & AI workflows",
      "AI-enabled business solution design",
      "Stakeholder enablement & adoption",
    ],
  },
  {
    title: "Front-End Support",
    items: ["HTML & CSS", "JavaScript", "Salesforce Lightning Design System", "UI/UX refinement for end users"],
  },
];

const EXPERIENCE = [
  {
    role: "Salesforce Consultant / Business Analyst",
    company: "Paychex",
    period: "03/2026 — Present",
    bullets: [
      "Partner with business stakeholders to gather and analyze requirements, assess processes, and recommend scalable Salesforce solutions aligned with operational goals.",
      "Manage requirements, user stories, tasks, bugs, and enhancement requests in Jira within Agile project environments.",
      "Configure and administer Sales and Service Cloud: user management, profiles, permission sets, security, and data management.",
      "Build and maintain Flows, approval processes, reports, dashboards, and validation rules from business requirements.",
      "Support UAT by validating functionality against requirements, documenting defects, and driving issue resolution.",
      "Provide day-to-day support, troubleshooting, data investigation, training, and adoption initiatives.",
    ],
  },
  {
    role: "Salesforce Consultant / Business Analyst",
    company: "MTX Group",
    period: "09/2023 — 02/2026",
    bullets: [
      "Translated business needs into Salesforce solutions across public health, education, and electoral-sector programs, improving processes and user experience.",
      "Created and managed user stories and enhancement requests in Jira; maintained project documentation in Confluence.",
      "Worked in Agile/Scrum: requirements discussions, sprint planning, backlog refinement, and reviews.",
      "Administered and customized Sales and Service Cloud, including security, sharing rules, and data management.",
      "Developed with Apex, Lightning Components (LWC/Aura), Visualforce, SOQL, and SOSL; supported data model design and data quality.",
      "Managed deployments, version control, and releases with Bitbucket and GitHub.",
    ],
    awards: ['MTX "Above and Beyond" Award — July 2025', 'MTX "Team Excellence" Award — August 2025'],
  },
  {
    role: "Salesforce Administrator / Developer",
    company: "Zillow Group",
    period: "06/2021 — 08/2023",
    bullets: [
      "Administered Sales and Service Cloud environments supporting daily business operations.",
      "Managed user setup, profiles, permission sets, data maintenance, reports, dashboards, and configuration.",
      "Gathered requirements from internal teams and turned them into Salesforce solutions and process improvements.",
      "Built Flows, approval processes, email automations, validation rules, and workflow enhancements.",
      "Supported integrations and data synchronization with external systems via REST and SOAP APIs.",
      "Contributed custom enhancements with Apex, LWC, Aura, and Visualforce following platform best practices.",
    ],
  },
];

const PROJECTS = [
  {
    client: "Paychex",
    name: "AI Tool Guru & Gong Engage",
    role: "Salesforce Consultant / Business Analyst",
    period: "2026 — Present",
    summary:
      "Supporting AI-enabled sales enablement initiatives, partnering with stakeholders on requirements, configuration, and adoption for AI tooling and Gong Engage within the Salesforce ecosystem.",
    tags: ["AI Enablement", "Gong Engage", "Requirements", "Adoption"],
  },
  {
    client: "Washington State — WA HELMS",
    name: "Health & Eligibility Licensing Management",
    role: "Consultant — MTX Group",
    period: "MTX Group",
    summary:
      "Delivered Salesforce configuration and solution support for a state licensing and management program, aligning platform capabilities with regulatory and operational requirements.",
    tags: ["Public Sector", "Service Cloud", "Flows", "UAT"],
  },
  {
    client: "Montana DPHHS — MAQCS",
    name: "Public Health Quality & Compliance System",
    role: "Consultant — MTX Group",
    period: "Oct 2024 — Present",
    summary:
      "Crafted and customized Salesforce solutions aligned with public health objectives, using Apex, Visualforce, and Lightning Components per SLDS standards. Designed structured, accessible data models and leveraged SOQL/SOSL for optimal data access, with deployment, version control, and CI supporting system integrity.",
    tags: ["Apex", "LWC", "Data Modeling", "CI/CD"],
  },
  {
    client: "Maryland State Dept. of Education — Office of Child Care",
    name: "Child Care Licensing & Services",
    role: "Senior Consultant — MTX Group",
    period: "Apr 2024 — Oct 2024",
    summary:
      "Developed tailored Salesforce solutions for core education requirements using Apex, Visualforce, and Lightning Components built to SLDS standards. Enhanced UI/UX for end users, applied SOQL/SOSL for Service Cloud data handling, and managed deployments and CI through Flosum.",
    tags: ["Service Cloud", "UI/UX", "Flosum", "SOQL"],
  },
  {
    client: "New York State Board of Elections",
    name: "Public Matching Funds Program",
    role: "Senior Salesforce Developer — MTX Group",
    period: "Sep 2023 — Mar 2024",
    summary:
      "Designed and implemented custom Salesforce solutions for public funding and compliance across election cycles. Built Lightning Components to SLDS standards, focused on robust data model design, and handled version control and CI with Bitbucket.",
    tags: ["Compliance", "Lightning", "Data Models", "Bitbucket"],
  },
];

const CERTS = [
  { name: "Salesforce Certified Administrator", note: "Platform administration & configuration" },
  { name: "Salesforce Certified Developer I", note: "Apex, LWC, and platform development" },
  { name: "Salesforce Agentblazer Innovator", note: "2026 — AI Agents & Agentforce" },
];

const EDUCATION = [
  {
    school: "Delta State University, College of Business",
    place: "Cleveland, Mississippi · 2020",
    degree: "Bachelor of Business Administration — Finance",
    honors: "GPA 4.00 · Summa Cum Laude",
  },
  {
    school: "Cloud County Community College",
    place: "Concordia, Kansas · 2018",
    degree: "Associate of Science",
    honors: "GPA 4.00 · With Highest Honors",
  },
];

function Sidebar() {
  return (
    <aside className="bg-gradient-ink text-sidebar-foreground lg:fixed lg:inset-y-0 lg:left-0 lg:w-80 lg:overflow-y-auto">
      <div className="flex flex-col gap-8 px-8 py-10 lg:min-h-full">
        <div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sidebar-primary text-2xl font-semibold text-sidebar-primary-foreground">
            JO
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-sidebar-accent-foreground">Jennet Oraz</h1>
          <p className="mt-2 text-sm leading-relaxed text-sidebar-foreground/75">
            Salesforce Certified Administrator · Business Analyst · Agentblazer Innovator
          </p>
        </div>

        <nav aria-label="Section navigation" className="hidden lg:block">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-sidebar-border pt-6 text-sm">
          <a
            href="mailto:jennet62@gmail.com"
            className="block text-sidebar-foreground/80 transition-colors hover:text-sidebar-accent-foreground"
          >
            jennet62@gmail.com
          </a>
          <a
            href="tel:+13058169757"
            className="block text-sidebar-foreground/80 transition-colors hover:text-sidebar-accent-foreground"
          >
            (305) 816-9757
          </a>
          <a
            href="https://linkedin.com/in/jennet-oraz"
            target="_blank"
            rel="noreferrer"
            className="block text-sidebar-foreground/80 transition-colors hover:text-sidebar-accent-foreground"
          >
            linkedin.com/in/jennet-oraz
          </a>
          <p className="text-sidebar-foreground/60">Aventura, Florida</p>
        </div>

        <p className="mt-auto hidden text-xs text-sidebar-foreground/50 lg:block">
          Eligible to work in the United States with no restrictions.
        </p>
      </div>
    </aside>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-border py-14 first:border-t-0 first:pt-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-foreground">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="mx-auto max-w-4xl px-6 py-14 lg:ml-80 lg:max-w-none lg:px-16">
        <div className="mx-auto max-w-3xl">
          <Section id="about" eyebrow="Introduction" title="Turning business needs into Salesforce solutions">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Salesforce Certified Administrator and Business Analyst with 5+ years administering, configuring, and
              improving Salesforce solutions. I work across requirements gathering, business process analysis,
              automation, data management, integrations, UAT, and Agile delivery — with a growing specialization in
              Agentforce and AI-enabled business solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              As an Agentblazer Innovator, I build and explore Salesforce AI Agents and AI workflows, partnering with
              business and technical stakeholders to translate needs into scalable, adoptable solutions.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["5+", "Years in Salesforce"],
                ["3", "Certifications"],
                ["6+", "Enterprise & public-sector programs"],
                ["2", "Excellence awards"],
              ].map(([value, label]) => (
                <div key={label} className="surface-card px-4 py-5">
                  <dt className="text-2xl font-semibold text-foreground">{value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="skills" eyebrow="Capabilities" title="Areas of expertise">
            <div className="grid gap-4 sm:grid-cols-2">
              {SKILLS.map((group) => (
                <div key={group.title} className="surface-card p-6">
                  <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section id="experience" eyebrow="Career" title="Work experience">
            <div className="space-y-8">
              {EXPERIENCE.map((job) => (
                <article key={job.company} className="surface-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                      <p className="text-sm font-medium text-accent">{job.company}</p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{job.period}</p>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {job.awards && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.awards.map((a) => (
                        <span
                          key={a}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="Selected work" title="Project experience">
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <article key={p.name} className="surface-card p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{p.client}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {p.name} · {p.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="certifications" eyebrow="Credentials" title="Certifications">
            <div className="grid gap-4 sm:grid-cols-3">
              {CERTS.map((c) => (
                <div key={c.name} className="surface-card p-6">
                  <h3 className="text-sm font-semibold leading-snug text-foreground">{c.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{c.note}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="education" eyebrow="Background" title="Education">
            <div className="space-y-4">
              {EDUCATION.map((e) => (
                <div key={e.school} className="surface-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-foreground">{e.school}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.place}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.degree}</p>
                  <p className="mt-1 text-sm font-medium text-accent">{e.honors}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" eyebrow="Get in touch" title="Let's work together">
            <div className="surface-card p-8">
              <p className="text-muted-foreground">
                Open to Salesforce Business Analyst, Administrator, and Agentforce-focused roles. The fastest way to
                reach me is email.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:jennet62@gmail.com"
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
                >
                  Email me
                </a>
                <a
                  href="https://linkedin.com/in/jennet-oraz"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  LinkedIn
                </a>
                <a
                  href="tel:+13058169757"
                  className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  (305) 816-9757
                </a>
              </div>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Jennet Oraz · Aventura, Florida
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}
