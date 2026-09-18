import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  image: string;
  tags: readonly string[];
};

type Skill = {
  name: string;
  icon: string;
};

type SkillGroup = {
  number: string;
  title: string;
  skills: readonly Skill[];
};

const projects: readonly Project[] = [
  {
    number: "01",
    title: "Scholarship System",
    type: "Full-stack platform",
    description:
      "A scholarship management system where students can apply and track applications while administrators review, approve, and manage records through a focused dashboard.",
    image: "/assets/project-scholarship.jpg",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    number: "02",
    title: "LGU Gonzaga Landing Page",
    type: "Public service website",
    description:
      "A responsive municipal landing page built to make local government information, services, and announcements easier to find across desktop and mobile devices.",
    image: "/assets/project-lgu-landing.jpg",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    number: "03",
    title: "LGU Gonzaga Login Page",
    type: "Authentication experience",
    description:
      "A clean sign-in experience for a municipal web platform with form validation, session handling, secure credential processing, and controlled access to internal services.",
    image: "/assets/project-lgu-login.jpg",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    number: "04",
    title: "Personalized Portfolio",
    type: "Portfolio experience",
    description:
      "A personal portfolio created to present projects, technical skills, and development experience through responsive layouts and interactive frontend components.",
    image: "/assets/project-portfolio.png",
    tags: ["React", "CSS", "TypeScript", "JavaScript"],
  },
];

const skillGroups: readonly SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    skills: [
      { name: "Angular", icon: "/assets/skill-angular.svg" },
      { name: "React", icon: "/assets/skill-react.svg" },
      { name: "TypeScript", icon: "/assets/skill-typescript.svg" },
      { name: "JavaScript", icon: "/assets/skill-javascript.svg" },
      { name: "HTML", icon: "/assets/skill-html.svg" },
      { name: "CSS", icon: "/assets/skill-css.svg" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    skills: [
      { name: "C#", icon: "/assets/skill-csharp.svg" },
      { name: ".NET", icon: "/assets/skill-dotnet.svg" },
      { name: "PHP", icon: "/assets/skill-php.svg" },
    ],
  },
  {
    number: "03",
    title: "Data & tools",
    skills: [
      { name: "MySQL", icon: "/assets/skill-mysql.svg" },
      { name: "MongoDB", icon: "/assets/skill-mongodb.svg" },
      { name: "Postman", icon: "/assets/skill-postman.svg" },
    ],
  },
];

const navItems = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`${dark ? "dark" : ""} min-h-screen overflow-x-clip bg-[#f4f1eb] text-[#171815] transition-colors duration-300 dark:bg-[#181a18] dark:text-[#f3f0e8]`}
    >
      <header className="sticky top-0 z-50 w-full border-b border-[#d8d4ca] bg-[#f4f1eb]/90 backdrop-blur-xl dark:border-[#363936] dark:bg-[#181a18]/90">
        <div className="relative mx-auto flex h-[68px] w-[min(1160px,calc(100%-40px))] items-center justify-between md:h-[76px] md:w-[min(1160px,calc(100%-72px))]">
          <a
            className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] md:text-xs"
            href="#hero"
            aria-label="Myke Xardan home"
            onClick={closeMenu}
          >
            <span className="grid size-8 place-items-center overflow-hidden rounded-full border border-[#171815] dark:border-[#f3f0e8]">
              <img
                src="/assets/mb-icon.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
            <span>MYKE XARDAN</span>
          </a>

          <nav
            className="hidden items-center gap-9 text-xs text-[#77766e] md:flex dark:text-[#9b9d95]"
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-[#98ca45] dark:hover:text-[#d7fa66]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-[#d8d4ca] bg-transparent transition hover:-translate-y-0.5 dark:border-[#363936]"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              className="hidden items-center gap-2 text-[11px] text-[#77766e] lg:flex dark:text-[#9b9d95]"
              href="#contact"
            >
              <span className="size-2 rounded-full bg-[#98ca45] shadow-[0_0_0_4px_rgba(152,202,69,0.12)]" />
              Available for work
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid size-8 cursor-pointer place-items-center rounded-md border border-[#d8d4ca] md:hidden dark:border-[#363936]"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {menuOpen && (
            <div className="fixed inset-x-0 top-[68px] border-b border-[#d8d4ca] bg-[#f4f1eb]/95 px-5 py-5 shadow-xl backdrop-blur-xl md:hidden dark:border-[#363936] dark:bg-[#181a18]/95">
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[#77766e] transition hover:bg-[#ebe8df] hover:text-[#171815] dark:text-[#9b9d95] dark:hover:bg-[#212420] dark:hover:text-[#f3f0e8]"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="mx-auto flex min-h-[590px] w-[min(1160px,calc(100%-40px))] scroll-mt-20 flex-col justify-center py-16 md:w-[min(1160px,calc(100%-72px))] md:py-24"
        >
          <div className="max-w-[980px]">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              <span className="h-px w-7 bg-[#98ca45] dark:bg-[#d7fa66]" />
              Hello, I&apos;m Myke
            </p>

            <h1 className="mb-8 text-[clamp(3.4rem,8.2vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.08em]">
              Building digital
              <br />
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                experiences
              </em>{" "}
              that work.
            </h1>

            <div className="flex flex-col gap-8 border-t border-[#d8d4ca] pt-7 md:flex-row md:items-end md:justify-between dark:border-[#363936]">
              <p className="m-0 max-w-[580px] text-[15px] leading-7 text-[#77766e] md:text-base dark:text-[#9b9d95]">
                Full-stack developer specializing in Angular and .NET, focused
                on turning complex problems into clean, reliable systems and
                useful product experiences.
              </p>

              <div className="flex shrink-0 flex-wrap items-center gap-6">
                <a
                  className="inline-flex items-center gap-3 bg-[#98ca45] px-5 py-3.5 text-xs font-bold text-[#171815] transition hover:-translate-y-0.5 dark:bg-[#d7fa66]"
                  href="#work"
                >
                  See my work <ArrowUpRight size={16} />
                </a>
                <a
                  className="inline-flex items-center gap-2 border-b border-[#171815] pb-1 text-xs font-bold dark:border-[#f3f0e8]"
                  href="/assets/myke-xardan-cv.pdf"
                  download
                >
                  Resume{" "}
                  <ArrowDownToLine
                    size={15}
                    className="text-[#98ca45] dark:text-[#d7fa66]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Areas of focus"
          className="overflow-hidden border-y border-[#d8d4ca] py-4 dark:border-[#363936]"
        >
          <div className="mx-auto flex min-w-[980px] items-center justify-around gap-8 whitespace-nowrap text-[10px] tracking-[0.16em] text-[#77766e] dark:text-[#9b9d95] md:text-[11px]">
            <span>ANGULAR</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>.NET DEVELOPMENT</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>PRODUCT THINKING</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>INTERFACE DESIGN</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>DEBUGGING & SYSTEMS</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
          </div>
        </section>

        <section
          id="work"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-20 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-32"
        >
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                Selected work
              </p>
              <h2 className="m-0 text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                Things I&apos;ve{" "}
                <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                  built.
                </em>
              </h2>
            </div>
            <p className="m-0 max-w-[260px] text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
              Real project work from V1, presented through the cleaner visual
              system of V2.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden border border-[#d8d4ca] bg-[#ebe8df] dark:border-[#363936] dark:bg-[#212420]"
              >
                <div className="relative aspect-[16/8.2] overflow-hidden bg-[#dfe5d4]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                  <span className="absolute left-5 top-5 text-[11px] font-bold text-white">
                    {project.number}
                  </span>
                  <ArrowUpRight
                    className="absolute right-5 top-5 text-white"
                    size={20}
                  />
                </div>

                <div className="p-6 md:p-7">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.13em] text-[#77766e] dark:text-[#9b9d95]">
                    {project.type}
                  </p>
                  <h3 className="mb-3 text-[22px] font-bold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#d8d4ca] px-2.5 py-1.5 text-[9px] text-[#77766e] dark:border-[#363936] dark:text-[#9b9d95]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid w-[min(1160px,calc(100%-40px))] scroll-mt-20 grid-cols-1 gap-8 border-y border-[#d8d4ca] py-20 md:w-[min(1160px,calc(100%-72px))] md:grid-cols-2 md:gap-24 md:py-28 dark:border-[#363936]"
        >
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              A little about me
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
              I care about the space
              <br />
              between{" "}
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                problem
              </em>{" "}
              and solution.
            </h2>
          </div>

          <div className="max-w-[460px] md:pt-10">
            <p className="mb-5 text-[15px] leading-7 text-[#77766e] dark:text-[#9b9d95]">
              I&apos;m a full-stack developer who enjoys making complicated
              workflows feel simple. My day-to-day work spans Angular
              interfaces, .NET APIs, databases, integrations, and the debugging
              required to keep systems dependable.
            </p>
            <p className="mb-7 text-[15px] leading-7 text-[#77766e] dark:text-[#9b9d95]">
              I pay close attention to the details that affect real users: clear
              interactions, maintainable code, responsive layouts, and fixes
              that address the root cause instead of just the symptom.
            </p>
            <a
              className="inline-flex items-center gap-2 border-b border-current pb-1 text-xs font-bold"
              href="#contact"
            >
              Let&apos;s work together{" "}
              <ArrowUpRight
                size={15}
                className="text-[#98ca45] dark:text-[#d7fa66]"
              />
            </a>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-20 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-32"
        >
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                What I bring
              </p>
              <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                Tools for making
                <br />
                <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                  good work.
                </em>
              </h2>
            </div>
            <Code2
              className="hidden text-[#98ca45] sm:block dark:text-[#d7fa66]"
              size={42}
              strokeWidth={1}
            />
          </div>

          <div className="border-t border-[#d8d4ca] dark:border-[#363936]">
            {skillGroups.map((group) => (
              <div
                key={group.number}
                className="grid gap-5 border-b border-[#d8d4ca] py-7 sm:grid-cols-[52px_145px_1fr_20px] sm:items-center sm:gap-5 dark:border-[#363936]"
              >
                <span className="text-[11px] text-[#77766e] dark:text-[#9b9d95]">
                  {group.number}
                </span>
                <h3 className="m-0 text-xl font-bold tracking-[-0.04em]">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:pr-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 border border-[#d8d4ca] bg-[#ebe8df]/60 px-3 py-2 dark:border-[#363936] dark:bg-[#212420]"
                    >
                      <img
                        src={skill.icon}
                        alt=""
                        className="size-5 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[11px] text-[#77766e] dark:text-[#9b9d95]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                <Check
                  className="hidden text-[#98ca45] sm:block dark:text-[#d7fa66]"
                  size={18}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-20 pb-20 md:w-[min(1160px,calc(100%-72px))] md:pb-32"
        >
          <div className="border border-[#d8d4ca] bg-[#ebe8df] px-5 py-16 text-center sm:px-10 md:py-24 dark:border-[#363936] dark:bg-[#212420]">
            <Sparkles
              size={24}
              className="mx-auto mb-6 text-[#98ca45] dark:text-[#d7fa66]"
            />
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              Have a project in mind?
            </p>
            <h2 className="mb-9 text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
              Let&apos;s make something
              <br />
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                worth remembering.
              </em>
            </h2>
            <a
              className="inline-flex items-center gap-3 bg-[#98ca45] px-5 py-3.5 text-xs font-bold text-[#171815] transition hover:-translate-y-0.5 dark:bg-[#d7fa66]"
              href="mailto:mykexardantorresbognalon@mail.com"
            >
              Get in touch <Mail size={16} />
            </a>

            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-3 text-[11px] text-[#77766e] sm:flex-row sm:gap-7 dark:text-[#9b9d95]">
              <a
                href="mailto:mykexardantorresbognalon@mail.com"
                className="flex items-center gap-2 transition hover:text-[#171815] dark:hover:text-[#f3f0e8]"
              >
                <Mail size={14} /> Email me
              </a>
              <a
                href="tel:+639159024439"
                className="flex items-center gap-2 transition hover:text-[#171815] dark:hover:text-[#f3f0e8]"
              >
                <Phone size={14} /> +63 915 902 4439
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Mandaluyong, Metro Manila
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-[min(1160px,calc(100%-40px))] flex-wrap items-center justify-between gap-4 border-t border-[#d8d4ca] py-6 text-[10px] tracking-[0.05em] text-[#77766e] md:w-[min(1160px,calc(100%-72px))] dark:border-[#363936] dark:text-[#9b9d95]">
        <span>© 2026 Myke Xardan</span>
        <div className="flex items-center gap-4 text-[#171815] dark:text-[#f3f0e8]">
          <a
            href="https://github.com/Rylaii/Portfolio_Myke"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub repository"
            className="transition hover:text-[#98ca45] dark:hover:text-[#d7fa66]"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:mykexardantorresbognalon@mail.com"
            aria-label="Email"
            className="transition hover:text-[#98ca45] dark:hover:text-[#d7fa66]"
          >
            <Mail size={17} />
          </a>
          <a
            href="/assets/myke-xardan-cv.pdf"
            download
            aria-label="Download resume"
            className="transition hover:text-[#98ca45] dark:hover:text-[#d7fa66]"
          >
            <ArrowDownToLine size={17} />
          </a>
        </div>
        <span className="w-full sm:w-auto">
          Designed in V2. Powered by V1 content.
        </span>
      </footer>
    </div>
  );
}
