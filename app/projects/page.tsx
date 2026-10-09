import { GridWrapper } from "@/app/components/GridWrapper";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "AI Chief of Staff systems",
    description:
      "Private AI chief-of-staff systems that run on the owner's own hardware and work from a single chat: email, morning briefings, memory and task desks, with nothing sent without sign-off. Built for myself first, now packaged for entrepreneurs and family offices.",
    image: "/blog/chief_of_staff_ai.svg",
    url: "/blog/one-chat-to-run-it-all",
  },
  {
    title: "Majlis by the Sea",
    description:
      "A members-only club that seats strangers together at curated dinners in Abu Dhabi, Dubai, Riyadh and Doha. I built the platform: the mobile app, the admin tools and a rule-based engine that decides who sits with whom.",
    image: "/projects/majlis.svg",
    url: "https://majlisbythesea.com",
  },
  {
    title: "Barjeel",
    description:
      "Real-estate market intelligence for the UAE. It collects listings, compares asking prices with government sale records and scores every deal from 0 to 100, with a rental-yield calculator on top.",
    image: "/projects/barjeel.svg",
    url: "/blog/barjeel-checking-property-prices-against-what-sold",
  },
  {
    title: "Home lab",
    description:
      "A small home server that holds the whole family's photos and files: three 6 TB drives in RAID 5, Proxmox to keep every service isolated, and Nextcloud, Immich and Time Machine on top.",
    image: "/projects/homelab.svg",
    url: "/blog/home-lab-a-small-server-for-the-whole-family",
  },
  {
    title: "FullfillForge",
    description:
      "A 3D-print-on-request service: upload a model, get an instant quote and 3D preview, then follow the order through production, quality checks and shipping.",
    image: "/projects/fullfillforge.svg",
    url: "https://fullfillforge.com",
  },
];

function ProjectImage(props) {
  return (
    <img src={props.src} alt={props.alt} className="drama-shadow rounded-xl" />
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Things I&apos;ve built.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="space-y-12">
            <GridWrapper className="px-10">
              <ProjectImage src={project.image} alt={project.title} />
            </GridWrapper>
            <GridWrapper className="px-10">
              <div className="max-w-2xl text-balance">
                <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                  {project.title}
                </h2>
                <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center text-sm font-medium text-indigo-600"
                  href={project.url}
                >
                  Visit {project.title}
                  <svg
                    className="relative ml-2.5 mt-px overflow-visible"
                    width="3"
                    height="6"
                    viewBox="0 0 3 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0L3 3L0 6"></path>
                  </svg>
                </a>
              </div>
            </GridWrapper>
          </div>
        ))}
      </GridWrapper>
    </div>
  );
}
