import ScrollStack, { ScrollStackItem } from '../components/Projects/ScrollStack'

import project1 from "../assets/imgs/project1.avif";
import project2 from "../assets/imgs/project2.avif";
import project3 from "../assets/imgs/project3.avif";

const projects = [
    {
        slug: "next-ventures",
        title: "Next Ventures",
        tagline:
            "A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design",
        summary:
            "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. Built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
        highlights: [
            "Leveraged Partial Prerendering and After for faster loading.",
            "Simplified idea submission with a clean, intuitive design.",
            "Enhanced browsing with seamless performance optimization.",
        ],
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Motion.dev",
            "Sanity CMS",
            "Auth.js",
            "Markdown",
            "GROQ",
            "Sentry",
        ],
        link: "https://aayushbharti.in/projects/next-ventures",
        img: project1,
        gradient:
            "linear-gradient(135deg, rgba(221,94,137,0.95), rgba(247,187,151,0.85))",
        accent: "#f472b6",
    },
    {
        slug: "zenith-minds",
        title: "Zenith Minds",
        tagline:
            "A platform connecting students and instructors for enhanced learning experiences",
        summary:
            "An education platform that unites learners and mentors through immersive projects, tailored courses, and community accountability. Designed to scale with a modern, resilient architecture.",
        highlights: [
            "Adaptive course journeys with Zustand and Zod validation.",
            "Integrated MongoDB and REST APIs for collaborative learning.",
            "Polished UI with Motion.dev and custom gradient themes.",
        ],
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Zustand",
            "MongoDB",
            "Node.js",
            "Express.js",
            "Motion.dev",
            "Razorpay",
        ],
        link: "https://aayushbharti.in/projects/zenith-minds",
        img: project2,
        gradient:
            "linear-gradient(135deg, rgba(76,106,255,0.92), rgba(166,85,255,0.88))",
        accent: "#7dd3fc",
    },
    {
        slug: "campus-connect",
        title: "Campus Connect",
        tagline:
            "A modern hub for managing campus events, communities, and announcements",
        summary:
            "Campus Connect streamlines the college experience with event discovery, RSVPs, and cross-club collaboration in a single cohesive interface.",
        highlights: [
            "Server actions and edge caching for real-time event feeds.",
            "Collaborative tools for managing schedules and volunteers.",
            "Optimized accessibility and theming for dark mode browsing.",
        ],
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Prisma",
            "PlanetScale",
            "Uploadcare",
            "Lucide",
            "Recharts",
        ],
        link: "https://aayushbharti.in/projects/campus-connect",
        img: project3,
        gradient:
            "linear-gradient(135deg, rgba(79,209,197,0.92), rgba(19,84,122,0.9))",
        accent: "#5eead4",
    },
];

const Projects = () => {
    return (
        <section className="w-screen min-h-screen bg-[#050505] py-24 sm:py-28 lg:pt-32 font-[font2]" id="projects">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-3 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60 sm:text-sm">
                    Featured Case Studies
                </span>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl font-[font2]">
                    Curated{' '}
                    <span className="bg-linear-to-r from-[#ffffff] via-[#f873ff] to-[#ff5ecd] bg-clip-text text-transparent font-[font3]">
                        work
                    </span>
                </h2>
            </div>
            <ScrollStack className="w-full" useWindowScroll>
                {projects.map(project => (
                    <ScrollStackItem
                        key={project.slug}
                        itemClassName="text-white border border-white/10 backdrop-blur-xl pb-4"
                        itemStyle={{ background: project.gradient }}
                    >
                        <div className="relative flex h-full w-full flex-col gap-6 lg:flex-row lg:gap-12">
                            <div className="flex w-full flex-col gap-5 md:gap-6 lg:w-2/5 lg:justify-between">
                                <div className="flex flex-col gap-4">    
                                    <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm leading-relaxed text-white/80 md:text-base">
                                        {project.summary}
                                    </p>
                                </div>
                                <div className="flex-col gap-2.5 md:gap-3 hidden lg:flex md:flex">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                                        Highlights
                                    </h3>
                                    <ul className="space-y-1.5 text-sm text-white/80 md:text-base">
                                        {project.highlights.map(highlight => (
                                            <li key={`${project.slug}-${highlight}`}>• {highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={`${project.slug}-${tech}`}
                                            className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-5 md:gap-6 lg:w-3/5 lg:justify-between">
                                <div className="flex flex-col gap-6 md:flex-row">
                                    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 aspect-16/10 sm:aspect-4/3 lg:aspect-auto lg:h-full">
                                        <a
                                            href={project.link}
                                            className="block h-full w-full"
                                            style={{ color: project.accent }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={project.img}
                                                alt={project.title}
                                                className="h-full w-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-linear-to-br from-transparent to-black/40"
                                                style={{ borderColor: project.accent }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
};

export default Projects;