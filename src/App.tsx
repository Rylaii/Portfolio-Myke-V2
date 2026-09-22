import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Quote,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  // Use images for the carousel. image remains as a backwards-compatible fallback.
  images?: readonly string[];
  image?: string;
  tags: readonly string[];
  challenge?: string;
  contribution?: readonly string[];
  outcomes?: readonly string[];
  status?: string;
  featured?: boolean;
  privateProject?: boolean;
  privacyNote?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
};

type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: readonly string[];
};

type Experience = {
  number: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
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

type TrustPoint = {
  value: string;
  label: string;
};

/*
  ============================================================
  MAIN PORTFOLIO CONTENT
  ============================================================
  Most future edits can happen in these arrays without touching
  the layout below.
*/

const projects: readonly Project[] = [
  {
    number: "01",
    title: "DUNAMIS Kabalikat",
    type: "Enterprise Microfinance Management Platform",

    description:
      "A large-scale microfinance management platform supporting client management, loan processing, collections, reporting, branch operations, and internal business workflows.",

    // Replace this later with your sanitized screenshot.
    images: [
      "/assets/project-mf-1.jpg",
      "/assets/project-mf-2.jpg",
      "/assets/project-mf-3.jpg",
    ],

    tags: [
      "Angular",
      ".NET",
      "C#",
      "SQL Server",
      "MongoDB",
      "Dapper",
      "SignalR",
      "Stimulsoft",
      "EPPlus",
      "Postman",
      "AWS",
    ],

    challenge:
      "The platform supports complex microfinance operations across multiple roles and branches, requiring reliable frontend workflows, backend services, database integrations, reporting, real-time communication, and deployment processes.",

    contribution: [
      "Contributed to the development and maintenance of the platform for over three years.",
      "Developed and maintained REST APIs and backend services using .NET and C#.",
      "Enhanced and redesigned Angular interfaces across operational modules.",
      "Worked with SQL Server and MongoDB for application data workflows and integrations.",
      "Built reports using Stimulsoft and Excel generation workflows using EPPlus.",
      "Implemented real-time notification workflows using SignalR.",
      "Documented, tested, and validated APIs using Postman.",
      "Supported CI/CD deployments and staging environments through AWS.",
    ],

    outcomes: [
      "Improved consistency and usability across major application modules.",
      "Supported reliable workflows across frontend, backend, database, reporting, and deployment layers.",
      "Introduced reusable UI patterns across the application.",
    ],

    status: "Private enterprise system",
    privateProject: true,
    privacyNote:
      "This is an internal production system. Portfolio screenshots should use sanitized or demo data only and must not expose client information, credentials, or proprietary implementation details.",
    liveUrl: "",
    repoUrl: "",
    caseStudyUrl: "",
  },
  {
    number: "02",
    title: "Scholarship Management System",
    type: "Full-stack project",
    description:
      "An earlier scholarship platform where students can submit and track applications while administrators review requirements and manage application records. A modern public rebuild with a live demo is planned.",
    images: [
      "/assets/project-scholarship.jpg",
      // Add more screenshots later, for example:
      // "/assets/project-scholarship-2.jpg",
      // "/assets/project-scholarship-3.jpg",
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    challenge:
      "Bring scholarship applications and administrative review into one organized workflow instead of relying on disconnected manual steps.",
    contribution: [
      "Student application and tracking flow",
      "Administrative review dashboard",
      "Application and record management",
      "Authentication and role-based access",
    ],
    outcomes: [],
    status: "Public rebuild planned",
    // When the rebuild is live, add:
    // liveUrl: "https://...",
    // repoUrl: "https://github.com/...",
  },
  {
    number: "03",
    title: "Fellowship Group Photo Hub",
    type: "Event Media & Presentation Tool",

    description:
      "A lightweight full-stack web application built for a company fellowship event to centralize group photo collection. Participants can upload and browse event photos, while organizers can generate a PDF output that makes the collected media easier to prepare for presentation.",

    images: [
      "/assets/project-group-photo-1.jpg",
      "/assets/project-group-photo-2.jpg",
      "/assets/project-group-photo-3.jpg",
    ],

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Next.js API Routes",
      "PDF Generation",
      "Vercel",
    ],

    challenge:
      "Collecting photos from multiple fellowship groups and preparing them for presentation would otherwise require organizers to manually gather, sort, and organize files from different participants and sources.",

    contribution: [
      "Designed and developed the application using Next.js, React, and TypeScript.",
      "Built a centralized upload workflow for fellowship groups and participants.",
      "Implemented a gallery for browsing and reviewing submitted event photos.",
      "Created server-side API functionality using Next.js API routes.",
      "Implemented PDF generation to simplify preparation of collected photos for presentation.",
      "Structured the system around the organizers' existing presentation workflow.",
      "Deployed the application through Vercel for use during the company fellowship event.",
    ],

    outcomes: [
      "Provided one centralized place for collecting photos from multiple groups.",
      "Reduced the manual effort required to gather and organize event media.",
      "Made submitted photos easier to prepare for presentation during the event.",
      "Created a reusable workflow for similar company events.",
    ],

    status: "Used at company event",

    liveUrl: "https://group-photo.vercel.app",
    repoUrl: "",
    caseStudyUrl: "",
  },
  {
    number: "04",
    title: "Personal Portfolio",
    type: "React portfolio experience",
    description:
      "A responsive portfolio built to present real project work, technical experience, services, and case-study context through a focused client-facing interface.",
    images: [
      "/assets/Project Pictures/project-portfolio.png",
      // Add more portfolio screenshots here when needed.
    ],
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    challenge:
      "Turn several years of project work into a portfolio that clients and recruiters can understand quickly without overwhelming them with implementation details.",
    contribution: [
      "Responsive React interface",
      "Dark and light themes",
      "Data-driven project, service, and experience sections",
      "Vercel-ready Vite deployment",
    ],
    outcomes: [
      "Created a reusable portfolio structure that can grow with new case studies without requiring another redesign",
    ],
    status: "Live",
    liveUrl: "https://portfolio-myke-v2.vercel.app",
    repoUrl: "https://github.com/Rylaii/Portfolio_Myke",
  },
  {
    number: "05",
    title: "LGU Gonzaga Web Platform",
    type: "Public service website",
    description:
      "Municipal web experiences covering a responsive public landing page and an authenticated entry point for internal services.",
    images: [
      "/assets/project-lgu-landing.jpg",
      "/assets/project-lgu-login.jpg",
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    challenge:
      "Make public information easier to access while providing a straightforward, controlled sign-in experience for authorized users.",
    contribution: [
      "Responsive municipal landing page",
      "Public information and service presentation",
      "Authentication interface and validation",
      "Session and access handling",
    ],
    outcomes: [],
    status: "Earlier work",
  },
];

const services: readonly Service[] = [
  {
    number: "01",
    title: "Full-stack business applications",
    description:
      "I build workflow-driven applications from interface to API and database, with attention to the people who will use and maintain them every day.",
    deliverables: [
      "Responsive interfaces",
      "Business workflows",
      "API integration",
      "Database-backed features",
    ],
  },
  {
    number: "02",
    title: "Angular/React UI engineering",
    description:
      "I turn dense operational requirements into structured Angular screens with reusable components, clear states, validation, and responsive behavior.",
    deliverables: [
      "Angular components",
      "Tailwind UI",
      "Forms & validation",
      "Reusable patterns",
    ],
  },
  {
    number: "03",
    title: ".NET APIs & data workflows",
    description:
      "Backend development for APIs, business rules, reporting, database access, and integrations that keep application workflows dependable.",
    deliverables: [
      ".NET APIs",
      "SQL Server",
      "Dapper / data access",
      "Realtime integrations",
    ],
  },
  {
    number: "04",
    title: "Debugging, modernization & delivery",
    description:
      "I help existing systems move forward by investigating difficult bugs, simplifying old implementations, modernizing interfaces, and supporting deployment issues.",
    deliverables: [
      "Root-cause debugging",
      "Refactoring",
      "UI modernization",
      "Deployment support",
    ],
  },
];

const experiences: readonly Experience[] = [
  {
    number: "01",
    role: "Full-Stack Developer",
    company: "DUNAMIS Kabalikat",
    period: "2023 — Present",

    summary:
      "Contributing to the development, maintenance, and continuous improvement of a large-scale microfinance management platform, working across frontend interfaces, backend APIs, SQL Server and MongoDB data workflows, reporting, system integrations, cloud deployments, and technical documentation.",

    highlights: [
      "Develop and maintain REST APIs and backend services supporting core microfinance workflows.",

      "Enhance and redesign Angular-based user interfaces to improve usability, responsiveness, and consistency across business modules.",

      "Work with SQL Server and MongoDB for application data management, querying, troubleshooting, and backend integration.",

      "Develop and maintain SQL Server stored procedures, queries, and data-access workflows using Entity Framework and Dapper.",

      "Build and maintain operational and financial reports using Stimulsoft Reports.",

      "Generate and process Excel reports and exports using EPPlus.",

      "Document, test, and validate APIs using Postman for internal development and system integrations.",

      "Integrate internal and external APIs across different business modules and operational workflows.",

      "Support CI/CD deployments and staging environments through AWS deployment pipelines.",

      "Investigate and resolve frontend, backend, database, reporting, deployment, and production-related issues.",

      "Prepare technical documentation for APIs, integrations, enhancements, deployment procedures, and development workflows.",
    ],

    stack: [
      "Angular",
      ".NET",
      "C#",
      "SQL Server",
      "MongoDB",
      "Dapper",
      "Entity Framework",
      "Stimulsoft",
      "EPPlus",
      "Postman",
      "AWS",
      "REST APIs",
      "CI/CD",
    ],
  },
];

/*
  Add only real, approved testimonials here.
  The section stays hidden while this array is empty.
*/
const testimonials: readonly Testimonial[] = [];

const trustPoints: readonly TrustPoint[] = [
  {
    value: "3 years",
    label: "Contributing to a production microfinance platform",
  },
  {
    value: "Angular + .NET",
    label: "Primary stack for business application work",
  },
  {
    value: "Frontend → DB",
    label: "Experience working across the application stack",
  },
  {
    value: "Realtime + reports",
    label: "Operational features beyond basic CRUD screens",
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
    title: "Databases & Tools",

    skills: [
      { name: "SQL Server", icon: "/assets/skill-sqlserver.svg" },
      { name: "MongoDB", icon: "/assets/skill-mongodb.svg" },
      { name: "MySQL", icon: "/assets/skill-mysql.svg" },
      { name: "Postman", icon: "/assets/skill-postman.svg" },
      { name: "AWS", icon: "/assets/skill-aws.svg" },
    ],
  },
  {
    number: "04",
    title: "Reporting & Integration",

    skills: [
      { name: "Stimulsoft", icon: "/assets/skill-stimulsoft.svg" },
      { name: "EPPlus", icon: "/assets/skill-excel.svg" },
      { name: "REST APIs", icon: "/assets/skill-api.svg" },
      { name: "SignalR", icon: "/assets/skill-signalr.svg" },
    ],
  },
];

const navItems = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div className="relative flex aspect-[16/9] min-h-[250px] flex-col justify-between overflow-hidden bg-[#111411] p-6 text-[#f3f0e8] md:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(215,250,102,0.18),transparent_36%),radial-gradient(circle_at_82%_80%,rgba(152,202,69,0.10),transparent_32%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative flex items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a9ada4]">
        <span>{project.number} · Project preview</span>
        <span className="border border-[#d7fa66]/35 px-2.5 py-1.5 text-[#d7fa66]">
          {project.privateProject ? "Private" : "Preview"}
        </span>
      </div>

      <div className="relative my-8">
        <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#d7fa66]">
          {project.type}
        </span>
        <p className="max-w-[520px] text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[0.94] tracking-[-0.06em]">
          {project.title}
        </p>
        <p className="mt-4 max-w-[430px] text-[10px] leading-5 text-[#a9ada4]">
          Add or replace screenshots in <strong>public/assets</strong>. If an
          image is missing, this placeholder is shown automatically.
        </p>
      </div>

      <div className="relative border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.14em] text-[#777d74]">
        {project.privateProject
          ? "Use sanitized or demo data only"
          : "Screenshot coming soon"}
      </div>
    </div>
  );
}

function ProjectCarousel({ project }: { project: Project }) {
  const media =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(
    () => new Set(),
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [project.number]);

  const goPrevious = () => {
    if (media.length < 2) return;
    setActiveIndex((current) =>
      current === 0 ? media.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    if (media.length < 2) return;
    setActiveIndex((current) =>
      current === media.length - 1 ? 0 : current + 1,
    );
  };

  const currentImage = media[activeIndex];
  const currentImageFailed = currentImage
    ? failedImages.has(currentImage)
    : true;

  const markImageFailed = (src: string) => {
    setFailedImages((current) => {
      const next = new Set(current);
      next.add(src);
      return next;
    });
  };

  return (
    <div className="min-w-0">
      <div className="group/carousel relative overflow-hidden border border-[#d8d4ca] bg-[#ebe8df] dark:border-[#363936] dark:bg-[#212420]">
        {currentImage && !currentImageFailed ? (
          <div className="aspect-[16/9] overflow-hidden bg-[#dfe5d4] dark:bg-[#111411]">
            <img
              key={currentImage}
              src={currentImage}
              alt={`${project.title} screenshot ${activeIndex + 1}`}
              loading="lazy"
              onError={() => markImageFailed(currentImage)}
              className="h-full w-full object-cover transition duration-500 group-hover/carousel:scale-[1.015]"
            />
          </div>
        ) : (
          <ProjectPlaceholder project={project} />
        )}

        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrevious}
              aria-label={`Previous ${project.title} screenshot`}
              className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center border border-white/20 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label={`Next ${project.title} screenshot`}
              className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 cursor-pointer place-items-center border border-white/20 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75"
            >
              <ChevronRight size={18} />
            </button>

            <span className="absolute bottom-3 right-3 bg-black/60 px-2.5 py-1.5 text-[9px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(media.length).padStart(2, "0")}
            </span>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {media.map((image, index) => {
            const isActive = activeIndex === index;
            const failed = failedImages.has(image);

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title} screenshot ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden border transition ${
                  isActive
                    ? "border-[#98ca45] ring-1 ring-[#98ca45] dark:border-[#d7fa66] dark:ring-[#d7fa66]"
                    : "border-[#d8d4ca] opacity-60 hover:opacity-100 dark:border-[#363936]"
                }`}
              >
                {!failed ? (
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    onError={() => markImageFailed(image)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center bg-[#111411] text-[9px] font-bold text-[#d7fa66]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("portfolio-theme") !== "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>("01");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  const toggleProject = (number: string) => {
    setExpandedProject((current) => (current === number ? null : number));
  };

  return (
    <div
      className={`${
        dark ? "dark" : ""
      } min-h-screen overflow-x-clip bg-[#f4f1eb] text-[#171815] transition-colors duration-300 dark:bg-[#181a18] dark:text-[#f3f0e8]`}
    >
      <header className="sticky top-0 z-[100] w-full border-b border-[#d8d4ca] bg-[#f4f1eb]/90 backdrop-blur-xl dark:border-[#363936] dark:bg-[#181a18]/90">
        <div className="relative mx-auto flex h-[68px] w-[min(1160px,calc(100%-40px))] items-center justify-between md:h-[76px] md:w-[min(1160px,calc(100%-72px))]">
          <a
            className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] md:text-xs"
            href="#hero"
            aria-label="Myke Xardan home"
            onClick={closeMenu}
          >
            <span className="grid size-9 place-items-center">
              <img
                src={
                  dark
                    ? "/assets/myke-logo-darkMode.png"
                    : "/assets/myke-logo-lightMode.png"
                }
                alt="Myke Xardan logo"
                className="h-full w-full object-contain"
              />
            </span>

            <span>MYKE XARDAN</span>
          </a>

          <nav
            className="hidden items-center gap-7 text-[11px] text-[#77766e] md:flex dark:text-[#9b9d95]"
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
              className="hidden items-center gap-2 text-[11px] text-[#77766e] xl:flex dark:text-[#9b9d95]"
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
          <div className="max-w-[1000px]">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              <span className="h-px w-7 bg-[#98ca45] dark:bg-[#d7fa66]" />
              Hello, I&apos;m Myke
            </p>

            <h1 className="mb-8 text-[clamp(3.4rem,8.2vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.08em]">
              Building digital
              <br />
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                systems
              </em>{" "}
              that work.
            </h1>

            <div className="flex flex-col gap-8 border-t border-[#d8d4ca] pt-7 md:flex-row md:items-end md:justify-between dark:border-[#363936]">
              <p className="m-0 max-w-[620px] text-[15px] leading-7 text-[#77766e] md:text-base dark:text-[#9b9d95]">
                Full-stack developer specializing in Angular and .NET, building
                and maintaining business applications across frontend
                interfaces, APIs, databases, reporting, integrations, and cloud
                deployment workflows.
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
                  href="/assets/Myke_Xardan_Bognalon_CV.pdf"
                  download
                >
                  Resume
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
            <span>BUSINESS SYSTEMS</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>INTERFACE DESIGN</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
            <span>DEBUGGING & DELIVERY</span>
            <i className="not-italic text-[#98ca45] dark:text-[#d7fa66]">✦</i>
          </div>
        </section>

        <section
          aria-label="Development strengths"
          className="mx-auto grid w-[min(1160px,calc(100%-40px))] grid-cols-2 border-x border-b border-[#d8d4ca] md:w-[min(1160px,calc(100%-72px))] md:grid-cols-4 dark:border-[#363936]"
        >
          {trustPoints.map((point, index) => (
            <div
              key={point.value}
              className={`px-5 py-6 md:px-6 ${
                index % 2 !== 0 ? "border-l" : ""
              } ${index > 1 ? "border-t md:border-t-0" : ""} ${
                index > 0 ? "md:border-l" : ""
              } border-[#d8d4ca] dark:border-[#363936]`}
            >
              <strong className="mb-2 block text-sm tracking-[-0.02em] text-[#171815] dark:text-[#f3f0e8]">
                {point.value}
              </strong>
              <p className="max-w-[190px] text-[9px] uppercase leading-4 tracking-[0.1em] text-[#77766e] dark:text-[#9b9d95]">
                {point.label}
              </p>
            </div>
          ))}
        </section>

        <section
          id="work"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-24 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-32"
        >
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                Selected work
              </p>
              <h2 className="m-0 text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                Problems I&apos;ve helped
                <br />
                <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                  solve.
                </em>
              </h2>
            </div>
            <p className="m-0 max-w-[320px] text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
              Production work, public projects, and earlier builds presented
              with the context behind what I actually contributed.
            </p>
          </div>

          <div className="border-t border-[#d8d4ca] dark:border-[#363936]">
            {projects.map((project) => {
              const isOpen = expandedProject === project.number;

              return (
                <article
                  key={project.number}
                  className="border-b border-[#d8d4ca] dark:border-[#363936]"
                >
                  {/* Accordion header */}
                  <button
                    type="button"
                    onClick={() => toggleProject(project.number)}
                    aria-expanded={isOpen}
                    className="
            grid w-full cursor-pointer
            grid-cols-[40px_1fr_32px]
            items-center gap-4
            py-6 text-left
            transition
            hover:px-2
            md:grid-cols-[60px_1fr_auto_36px]
            md:gap-6
          "
                  >
                    <span className="text-[11px] text-[#77766e] dark:text-[#9b9d95]">
                      {project.number}
                    </span>

                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <p className="text-[9px] uppercase tracking-[0.14em] text-[#77766e] dark:text-[#9b9d95]">
                          {project.type}
                        </p>
                        {project.status && (
                          <span className="border border-[#98ca45]/35 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#668d25] dark:border-[#d7fa66]/30 dark:text-[#d7fa66]">
                            {project.status}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold tracking-[-0.04em] md:text-xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="hidden flex-wrap justify-end gap-2 md:flex">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="
                  border border-[#d8d4ca]
                  px-2.5 py-1
                  text-[9px]
                  text-[#77766e]
                  dark:border-[#363936]
                  dark:text-[#9b9d95]
                "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ChevronDown
                      size={18}
                      className={`
              transition-transform duration-300
              ${
                isOpen
                  ? "rotate-180 text-[#98ca45] dark:text-[#d7fa66]"
                  : "text-[#77766e] dark:text-[#9b9d95]"
              }
            `}
                    />
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="pb-10 md:pl-[84px]">
                      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                        {/* Screenshot carousel */}
                        <ProjectCarousel project={project} />

                        {/* Details */}
                        <div>
                          <p className="mb-6 max-w-[620px] text-[14px] leading-7 text-[#77766e] dark:text-[#9b9d95]">
                            {project.description}
                          </p>

                          {project.challenge && (
                            <div className="mb-6">
                              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#98ca45] dark:text-[#d7fa66]">
                                The challenge
                              </p>

                              <p className="text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                                {project.challenge}
                              </p>
                            </div>
                          )}

                          {project.contribution &&
                            project.contribution.length > 0 && (
                              <div className="mb-6">
                                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#98ca45] dark:text-[#d7fa66]">
                                  My contribution
                                </p>

                                <div className="space-y-2.5">
                                  {project.contribution.map((item) => (
                                    <div
                                      key={item}
                                      className="flex items-start gap-3"
                                    >
                                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#98ca45] dark:bg-[#d7fa66]" />

                                      <p className="text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                          {project.outcomes && project.outcomes.length > 0 && (
                            <div className="mb-7">
                              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#98ca45] dark:text-[#d7fa66]">
                                Outcomes
                              </p>

                              <div className="space-y-2.5">
                                {project.outcomes.map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-start gap-3"
                                  >
                                    <Check
                                      size={14}
                                      className="mt-1 shrink-0 text-[#98ca45] dark:text-[#d7fa66]"
                                    />

                                    <p className="text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                                      {item}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Mobile tags */}
                          <div className="mb-7 flex flex-wrap gap-2 md:hidden">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#d8d4ca] px-2.5 py-1.5 text-[9px] text-[#77766e] dark:border-[#363936] dark:text-[#9b9d95]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {project.privacyNote && (
                            <p className="mb-6 border-l-2 border-[#98ca45] pl-3 text-[10px] leading-5 text-[#77766e] dark:border-[#d7fa66] dark:text-[#9b9d95]">
                              {project.privacyNote}
                            </p>
                          )}

                          {/* Links / private project label */}
                          <div className="flex flex-wrap items-center gap-5">
                            {project.privateProject &&
                              !project.liveUrl &&
                              !project.repoUrl && (
                                <span className="border border-[#d8d4ca] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#77766e] dark:border-[#363936] dark:text-[#9b9d95]">
                                  Private enterprise system
                                </span>
                              )}

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold"
                              >
                                Live Demo
                                <ArrowUpRight
                                  size={14}
                                  className="text-[#98ca45] dark:text-[#d7fa66]"
                                />
                              </a>
                            )}

                            {project.repoUrl && (
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold"
                              >
                                Source Code
                                <Github
                                  size={14}
                                  className="text-[#98ca45] dark:text-[#d7fa66]"
                                />
                              </a>
                            )}

                            {project.caseStudyUrl && (
                              <a
                                href={project.caseStudyUrl}
                                className="inline-flex items-center gap-2 text-xs font-bold"
                              >
                                Full Case Study
                                <ArrowUpRight
                                  size={14}
                                  className="text-[#98ca45] dark:text-[#d7fa66]"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="services"
          className="border-y border-[#d8d4ca] bg-[#ebe8df]/55 dark:border-[#363936] dark:bg-[#212420]/45"
        >
          <div className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-24 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-28">
            <div className="mb-10 grid gap-7 md:mb-14 md:grid-cols-[1fr_360px] md:items-end">
              <div>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                  How I can help
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                  From workflow to
                  <br />
                  <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                    working system.
                  </em>
                </h2>
              </div>
              <p className="text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                I&apos;m most useful where product requirements, application
                code, data, and real operational constraints all meet.
              </p>
            </div>

            <div className="grid border-l border-t border-[#d8d4ca] md:grid-cols-2 dark:border-[#363936]">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="border-b border-r border-[#d8d4ca] p-6 md:p-8 dark:border-[#363936]"
                >
                  <span className="mb-8 block text-[10px] font-bold text-[#98ca45] dark:text-[#d7fa66]">
                    {service.number}
                  </span>
                  <h3 className="mb-3 text-xl font-bold tracking-[-0.04em]">
                    {service.title}
                  </h3>
                  <p className="mb-6 max-w-[440px] text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="border border-[#d8d4ca] bg-[#f4f1eb]/40 px-2.5 py-1.5 text-[9px] text-[#77766e] dark:border-[#363936] dark:bg-[#181a18]/35 dark:text-[#9b9d95]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-24 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-32"
        >
          <div className="mb-10 md:mb-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              Professional experience
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
              Built through real
              <br />
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                operational work.
              </em>
            </h2>
          </div>

          <div className="border-t border-[#d8d4ca] dark:border-[#363936]">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.role}`}
                className="grid gap-6 border-b border-[#d8d4ca] py-8 md:grid-cols-[60px_220px_1fr] md:gap-7 dark:border-[#363936]"
              >
                <span className="text-[10px] font-bold text-[#98ca45] dark:text-[#d7fa66]">
                  {experience.number}
                </span>

                <div>
                  <h3 className="mb-1 text-lg font-bold tracking-[-0.04em]">
                    {experience.role}
                  </h3>
                  <p className="text-[11px] leading-5 text-[#77766e] dark:text-[#9b9d95]">
                    {experience.company}
                    <br />
                    {experience.period}
                  </p>
                </div>

                <div>
                  <p className="mb-5 max-w-[680px] text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
                    {experience.summary}
                  </p>

                  <div className="mb-5 grid gap-2.5">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2.5 text-[12px] leading-5"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#98ca45] dark:text-[#d7fa66]"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="border border-[#d8d4ca] px-2.5 py-1.5 text-[9px] text-[#77766e] dark:border-[#363936] dark:text-[#9b9d95]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="border-y border-[#d8d4ca] bg-[#ebe8df]/35 dark:border-[#363936] dark:bg-[#212420]/25"
        >
          <div className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-24 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-28">
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <div>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                  What I work with
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                  Tools behind the
                  <br />
                  <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                    systems.
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
                        className="flex items-center gap-2 border border-[#d8d4ca] bg-[#f4f1eb]/55 px-3 py-2 dark:border-[#363936] dark:bg-[#181a18]/35"
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
          </div>
        </section>

        <section
          id="about"
          className="mx-auto grid w-[min(1160px,calc(100%-40px))] scroll-mt-24 grid-cols-1 gap-8 py-20 md:w-[min(1160px,calc(100%-72px))] md:grid-cols-2 md:gap-24 md:py-28"
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

          <div className="max-w-[480px] md:pt-10">
            <p className="mb-5 text-[15px] leading-7 text-[#77766e] dark:text-[#9b9d95]">
              For the past three years, much of my development work has been
              shaped by a large microfinance platform where small interface or
              backend decisions can affect real operational workflows.
            </p>
            <p className="mb-7 text-[15px] leading-7 text-[#77766e] dark:text-[#9b9d95]">
              I enjoy making complicated systems easier to use and maintain —
              whether that means redesigning an Angular workflow, tracing a .NET
              or SQL issue, building a realtime feature, or fixing the
              deployment problem that is blocking everyone else.
            </p>
            <a
              className="inline-flex items-center gap-2 border-b border-current pb-1 text-xs font-bold"
              href="#contact"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={15}
                className="text-[#98ca45] dark:text-[#d7fa66]"
              />
            </a>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="border-y border-[#d8d4ca] bg-[#ebe8df]/55 dark:border-[#363936] dark:bg-[#212420]/45">
            <div className="mx-auto w-[min(1160px,calc(100%-40px))] py-20 md:w-[min(1160px,calc(100%-72px))] md:py-28">
              <div className="mb-10 md:mb-14">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
                  What people say
                </p>
                <h2 className="text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
                  Proof from people I&apos;ve
                  <br />
                  <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                    worked with.
                  </em>
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <figure
                    key={`${testimonial.name}-${testimonial.role}`}
                    className="border border-[#d8d4ca] bg-[#f4f1eb]/50 p-7 md:p-8 dark:border-[#363936] dark:bg-[#181a18]/35"
                  >
                    <Quote
                      size={22}
                      className="mb-8 text-[#98ca45] dark:text-[#d7fa66]"
                    />
                    <blockquote className="mb-8 text-lg leading-8 tracking-[-0.02em]">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption>
                      <strong className="block text-xs">
                        {testimonial.name}
                      </strong>
                      <span className="mt-1 block text-[10px] text-[#77766e] dark:text-[#9b9d95]">
                        {testimonial.role}
                        {testimonial.company ? ` · ${testimonial.company}` : ""}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          id="contact"
          className="mx-auto w-[min(1160px,calc(100%-40px))] scroll-mt-24 py-20 md:w-[min(1160px,calc(100%-72px))] md:py-32"
        >
          <div className="border border-[#d8d4ca] bg-[#ebe8df] px-5 py-16 text-center sm:px-10 md:py-24 dark:border-[#363936] dark:bg-[#212420]">
            <Sparkles
              size={24}
              className="mx-auto mb-6 text-[#98ca45] dark:text-[#d7fa66]"
            />
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#77766e] dark:text-[#9b9d95]">
              Have a project or system problem in mind?
            </p>
            <h2 className="mb-5 text-[clamp(2.4rem,5vw,4.125rem)] font-bold leading-[0.96] tracking-[-0.07em]">
              Let&apos;s build something
              <br />
              <em className="not-italic text-[#98ca45] dark:text-[#d7fa66]">
                useful together.
              </em>
            </h2>
            <p className="mx-auto mb-9 max-w-[540px] text-[13px] leading-6 text-[#77766e] dark:text-[#9b9d95]">
              Tell me what you&apos;re building, what is currently getting in
              the way, and what a successful result would look like.
            </p>

            <a
              className="inline-flex items-center gap-3 bg-[#98ca45] px-5 py-3.5 text-xs font-bold text-[#171815] transition hover:-translate-y-0.5 dark:bg-[#d7fa66]"
              href="mailto:mykexardantorresbognalon@mail.com?subject=Project%20inquiry"
            >
              Start a conversation <Mail size={16} />
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
            href="https://github.com/Rylaii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
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
          Built with React, TypeScript & Tailwind CSS.
        </span>
      </footer>
    </div>
  );
}
