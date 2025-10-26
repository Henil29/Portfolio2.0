import ScrollStack, { ScrollStackItem } from '../components/Projects/ScrollStack'

import project1 from "../assets/imgs/project1.png";
import project2 from "../assets/imgs/project2.png";
import project3 from "../assets/imgs/project3.png";

const projects = [
    {
        slug: "connectify",
        title: "Connectify",
        tagline:
            "A social media platform to connect, share, and chat with people in real time.",
        summary:
            "Connectify is a full-stack social networking app built using the MERN stack. It allows users to create posts, like, comment, follow others, and chat instantly — all in a smooth, modern UI.",
        highlights: [
            "Implemented real-time chat and messaging using Socket.io.",
            "Integrated JWT authentication and secure user sessions.",
            "Built reusable React components for posts, profiles, and feed layout.",
            "Optimized MongoDB queries for faster loading and feed updates.",
        ],
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "JWT",
            "Tailwind CSS",
            "Resend (Mailer)",
            "Cloudinary",
        ],
        github: "https://github.com/Henil29/Connectify",
        live: "https://connectify.henilp.dev/",
        img: project1,
        gradient:
            "linear-gradient(135deg, rgba(56,189,248,0.9), rgba(37,99,235,0.85))",
    },
    {
        slug: "shopshere",
        title: "ShopShere",
        tagline:
            "A dynamic e-commerce web app for seamless online shopping experience.",
        summary:
            "ShopShere is an e-commerce platform built using the MERN stack. It features product listings, cart management, user authentication.",
        highlights: [
            "Implemented REST APIs with Express for product and user management.",
            "Integrated JWT-based authentication and authorization.",
            "Handled image uploads using Cloudinary for product images.",
            "Designed UI with Tailwind CSS for optimal user experience.",
        ],
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
            "Redux",
            "Cloudinary",
        ],
        github: "https://github.com/Henil29/ShopShere",
        live: "https://shopsphere.henilp.dev/",
        img: project2,
        gradient:
            "linear-gradient(135deg, rgba(249,115,22,0.9), rgba(234,88,12,0.85))",
    },
    {
        slug: "k72",
        title: "K72",
        tagline:
            "A modern, responsive website designed for a tech club to manage and showcase events.",
        summary:
            "k72 is a project built using React along with GSAP to implement rich animations and interactive UI elements.",
        highlights: [
            "Developed responsive UI optimized for both desktop and mobile.",
            "Added smooth scroll and animations using Framer Motion.",
            "Implemented event and project sections with modular card design.",
            "Optimized for performance and SEO using modern React practices.",
        ],
        tech: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "JavaScript",
        ],
        github: "https://github.com/Henil29/K72",
        live: "https://k72.henilp.dev/",
        img: project3,
        gradient:
            "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(59,130,246,0.85))",
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
                                    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/30 aspect-16/10 sm:aspect-4/3 lg:aspect-auto lg:h-full">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="h-full w-full object-contain"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent to-black/40"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-full items-center gap-3 lg:pl-8 max-sm:justify-center max-sm:gap-2 max-sm:flex-nowrap">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-black transition hover:bg-white whitespace-nowrap max-sm:px-4 max-sm:py-1.5 max-sm:text-xs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View GitHub
                                        </a>
                                    )}
                                    {project.live ? (
                                        <a
                                            href={project.live}
                                            className="rounded-full border border-white/80 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 whitespace-nowrap max-sm:px-4 max-sm:py-1.5 max-sm:text-xs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/50 whitespace-nowrap max-sm:px-4 max-sm:py-1.5 max-sm:text-xs cursor-not-allowed">
                                            Live Demo • Coming Soon
                                        </span>
                                    )}
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