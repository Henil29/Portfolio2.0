import { useRef } from 'react'
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiGithub,
	SiNotion,
	SiFigma,
	SiVercel,
	SiRedux,
	SiPython,
	SiStorybook,
	SiFirebase,
} from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { PiLightningBold } from 'react-icons/pi'
import { motion } from "motion/react"

const skillItems = [
	{ name: 'React', icon: SiReact, gradient: 'from-[#61dafb]/45 via-[#1a2235]/70 to-[#0b1220]/90', angle: -7 },
	{ name: 'JavaScript', icon: SiJavascript, gradient: 'from-[#facc15]/35 via-[#f59e0b]/50 to-[#111827]/90', angle: 8 },
	{ name: 'Tailwind CSS', icon: SiTailwindcss, gradient: 'from-[#22d3ee]/35 via-[#0ea5e9]/55 to-[#0f172a]/90', angle: -5 },
	{ name: 'HTML5', icon: SiHtml5, gradient: 'from-[#f97316]/40 via-[#ea580c]/60 to-[#111827]/90', angle: 5 },
	{ name: 'CSS3', icon: SiCss3, gradient: 'from-[#60a5fa]/35 via-[#2563eb]/60 to-[#0f172a]/90', angle: -4 },
	{ name: 'Node.js', icon: SiNodedotjs, gradient: 'from-[#34d399]/40 via-[#059669]/55 to-[#052e16]/90', angle: 6 },
	{ name: 'Express', icon: SiExpress, gradient: 'from-white/15 via-[#0f0f15]/75 to-[#050507]/90', angle: -8 },
	{ name: 'MongoDB', icon: SiMongodb, gradient: 'from-[#4ade80]/45 via-[#16a34a]/55 to-[#052e16]/90', angle: 4 },
	{ name: 'PostgreSQL', icon: SiPostgresql, gradient: 'from-[#38bdf8]/40 via-[#0ea5e9]/55 to-[#0f172a]/90', angle: -6 },
	{ name: 'Redux Toolkit', icon: SiRedux, gradient: 'from-[#a855f7]/40 via-[#7c3aed]/55 to-[#171126]/90', angle: -3 },
	{ name: 'Git', icon: SiGit, gradient: 'from-[#f97316]/45 via-[#ea580c]/60 to-[#111827]/90', angle: -2 },
	{ name: 'GitHub', icon: SiGithub, gradient: 'from-white/25 via-[#111525]/80 to-[#05060c]/95', angle: 5 },
	{ name: 'Vercel', icon: SiVercel, gradient: 'from-white/15 via-[#111222]/80 to-[#05070f]/95', angle: -5 },
	{ name: 'Figma', icon: SiFigma, gradient: 'from-[#fb7185]/45 via-[#a855f7]/60 to-[#1f1626]/90', angle: 3 },
	{ name: 'Notion', icon: SiNotion, gradient: 'from-white/20 via-[#14141c]/80 to-[#050507]/95', angle: -7 },
	{ name: 'Firebase', icon: SiFirebase, gradient: 'from-[#f97316]/45 via-[#fb923c]/50 to-[#111827]/90', angle: 6 },
	{ name: 'Storybook', icon: SiStorybook, gradient: 'from-[#fb7185]/45 via-[#f472b6]/55 to-[#1f1020]/90', angle: -6 },
	{ name: 'Python', icon: SiPython, gradient: 'from-[#38bdf8]/40 via-[#facc15]/45 to-[#0f172a]/90', angle: 6 },
	{ name: 'Java', icon: FaJava, gradient: 'from-[#ef4444]/40 via-[#f97316]/55 to-[#111827]/90', angle: -4 },
]

const Skills = () => {
	const containerRef = useRef(null)
	return (
		<section
			id='skills'
			className='relative overflow-hidden bg-[#060608] py-24 sm:py-28 lg:py-32'
		>
			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),rgba(6,8,19,0.85)_48%,rgba(4,4,8,1))]' />
			<div className='pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-[#060608] via-[#070712] to-transparent' />

			<div className='relative mx-auto flex w-full max-w-5xl flex-col items-center gap-16 px-6 text-white md:px-10'>
				<header className='relative flex flex-col items-center gap-5 text-center text-white/75'>
					<span className='font-[font2] text-xs uppercase tracking-[0.45em] text-white/45'>
						My Skills
					</span>
					<h2 className='font-[font3] text-4xl leading-tight text-white drop-shadow-[0_12px_35px_rgba(99,102,241,0.25)] sm:text-5xl lg:text-6xl'>
						The Secret{' '}
						<span className='bg-linear-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent'>
							Sauce
						</span>
					</h2>
					<p className='max-w-lg font-[font2] text-sm text-white/55 sm:text-base'>
						A curated stack of tools, platforms, and languages I lean on to build reliable, delightful digital products end to end.
					</p>
					<span className='text-[11px] font-[font2] uppercase text-white/30'>
						grab a badge and sling it around
					</span>
					<span className='absolute -top-10 hidden rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] uppercase tracking-[0.48em] text-white/50 shadow-[0_12px_38px_rgba(15,15,28,0.4)] sm:block'>
						<PiLightningBold className='mr-2 inline-block text-white/60' size={14} />
						Craftsmanship
					</span>
				</header>

				<div
					ref={containerRef}
					className='relative flex w-full flex-wrap justify-center gap-6 sm:gap-8'
				>
					<div className='pointer-events-none absolute inset-0 -z-10 blur-3xl [background:radial-gradient(circle_at_center,rgba(236,72,153,0.16),rgba(59,130,246,0.1),transparent_65%)]' />
					{skillItems.map(({ name, icon: Icon, gradient, angle }) => (
						<motion.div
							key={name}
							className='group cursor-grab relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 shadow-[0_18px_45px_rgba(12,12,25,0.35)] transition-transform duration-300 ease-out hover:-translate-y-2 sm:h-24 sm:w-24'
							style={{ rotate: angle }}
							drag
							dragConstraints={containerRef}
							dragElastic={0.18}
							dragMomentum={false}
							whileTap={{ scale: 0.95 }}
						>
							<div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`} />
							<div className='relative flex h-full w-full items-center justify-center text-2xl sm:text-3xl'>
								<Icon />
							</div>
							<span className='absolute bottom-[-26px] hidden rounded-full border border-white/10 bg-[#10101a]/80 px-3 py-1 text-[10px] font-[font2] uppercase tracking-[0.28em] text-white/70 shadow-[0_8px_22px_rgba(15,15,30,0.45)] group-hover:flex'>
								{name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
