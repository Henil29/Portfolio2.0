import { useEffect, useRef, useState } from 'react'
import { RiMapPin2Line, RiRemoteControlLine } from 'react-icons/ri'

const roles = [
    {
        timeframe: 'Jun 2024 – Present',
        company: 'Self Experience',
        location: 'Ahmedabad, India',
        remote: false,
        title: 'Full Stack Developer',
        summary: [
            'Developed and deployed full-stack MERN applications including social platforms, integrating advanced features like live chat, follow/unfollow.',
            'Engineered modular, reusable React components with optimized rendering and responsive design using Tailwind CSS, ensuring seamless cross-device user experience.',
            'Built scalable REST APIs in Node.js and Express, integrated with MongoDB for efficient data modeling, and implemented JWT authentication for secure access control.',
            'Designed and implemented robust email-based OTP verification flows using Resend mailer / Nodemailer , improving account security and verification success rates.',
            // 'Migrated legacy Express.js backend to Django REST Framework for improved scalability and modularity, maintaining feature parity across user, post, and chat modules.',
            // 'Collaborated with design and product teams to deliver pixel-perfect, accessible interfaces and continuously improved UX through feedback-driven iteration.',
            // 'Leveraged GitHub for version control, CI/CD automation, and peer code reviews, ensuring consistent code quality and deployment reliability.'
        ],
        skills: [
            // 🚀 Core Stack
            'React.js',
            'Express.js',
            'MongoDB',
            'Node.js',
            'Next.js',

            // 🎨 Frontend
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'Framer Motion',
            'Gasp',

            // ⚙️ Backend & APIs
            'RESTful APIs',
            'JWT Authentication',
            'Django',

            // 🗄️ Database
            'Mongoose',
            'MySQL',

            // 🧠 Programming & DSA
            'Java (DSA)',
            'Python',

            // 🧰 Tools & Deployment
            'Git',
            'GitHub',
            'Postman',
            'Render',
            'Vercel',

            // 🌐 Integrations & Others
            'Resend (Mailer Integration)',
            'Cloudinary',
            'Responsive Design',
        ]


    }
]

const Experience = () => {
    const articleRefs = useRef([])
    const trackRefs = useRef([])
    const [markerState, setMarkerState] = useState(() =>
        roles.map(() => ({ lead: 0, tail: 0, active: true }))
    )

    articleRefs.current.length = roles.length
    trackRefs.current.length = roles.length

    useEffect(() => {
        setMarkerState(roles.map(() => ({ lead: 0, tail: 0, active: true })))
    }, [roles.length])

    useEffect(() => {
        if (typeof window === 'undefined') return undefined

        const markerSize = 56 // px (tailwind w-14 => 3.5rem)
        const anchorRatio = 0.4

        const handleScroll = () => {
            const viewportHeight = window.innerHeight || 0
            const anchor = viewportHeight * anchorRatio

            const nextState = roles.map((_, index) => {
                const article = articleRefs.current[index]
                const track = trackRefs.current[index]

                if (!article || !track) {
                    return { lead: 0, tail: 0, active: false }
                }

                const articleRect = article.getBoundingClientRect()
                const trackRect = track.getBoundingClientRect()
                const trackHeight = trackRect.height > 0 ? trackRect.height : articleRect.height

                const rawProgress = (anchor - articleRect.top) / articleRect.height
                const progress = Math.min(1, Math.max(0, rawProgress))

                const travel = Math.max(0, trackHeight - markerSize)
                const lead = Math.min(travel, Math.max(0, travel * progress))
                const tail = Math.max(0, travel - lead)

                const isActive =
                    articleRect.top < anchor + markerSize / 2 &&
                    articleRect.bottom > anchor - markerSize / 2

                return { lead, tail, active: isActive }
            })

            setMarkerState(prev => {
                if (
                    prev.length === nextState.length &&
                    nextState.every((state, idx) => {
                        const current = prev[idx]
                        return (
                            current &&
                            Math.abs(current.lead - state.lead) < 0.5 &&
                            Math.abs(current.tail - state.tail) < 0.5 &&
                            current.active === state.active
                        )
                    })
                ) {
                    return prev
                }
                return nextState
            })
        }

        const throttled = () => {
            window.requestAnimationFrame(handleScroll)
        }

        handleScroll()
        window.addEventListener('scroll', throttled, { passive: true })
        window.addEventListener('resize', throttled)

        return () => {
            window.removeEventListener('scroll', throttled)
            window.removeEventListener('resize', throttled)
        }
    }, [roles.length])

    return (
        <section
            id='experience'
            className='relative overflow-hidden bg-[#050505] py-24 sm:py-28 lg:py-32'
        >
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(5,5,9,0.85)_45%,rgba(5,5,9,1))]' />
            <div className='pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-[#050505] via-[#06060b] to-transparent' />

            <div className='relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 text-white md:px-10'>
                <header className='flex flex-col items-start gap-3 text-white/80'>
                    <span className='font-[font2] text-xs uppercase tracking-[0.45em] text-white/50'>
                        The Experience
                    </span>
                    <h1 className='font-[font3] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl'>
                        Experience That Brings{' '}
                        <span className='bg-linear-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent'>
                            Ideas to Life
                        </span>
                    </h1>
                </header>

                <div className='relative flex flex-col gap-20'>
                    <div className='pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block'>
                        <span className='block h-full w-px bg-linear-to-b from-white/0 via-white/25 to-white/0' />
                    </div>

                    {roles.map((role, index) => (
                        <article
                            key={role.company}
                            ref={el => {
                                articleRefs.current[index] = el
                            }}
                            className='relative grid grid-cols-1 gap-10 pl-14 sm:pl-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.3fr)_minmax(0,1.5fr)] lg:items-start lg:pl-0'
                        >
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex w-14 justify-center sm:left-2 lg:hidden'>
                                <span className='absolute top-16 bottom-8 hidden w-0.5 bg-linear-to-b from-white/0 via-white/35 to-white/0 sm:block' />
                                <span className='absolute top-12 bottom-10 w-0.5 bg-linear-to-b from-white/0 via-white/35 to-white/0 sm:hidden' />
                                <div
                                    className='absolute left-1/2 top-12 flex flex-col items-center gap-2 transition-transform duration-200 ease-out'
                                    style={{ transform: `translate(-50%, ${Math.max(0, markerState[index]?.lead || 0)}px)` }}
                                >
                                    <span className='block h-6 w-0.5 rounded-full bg-linear-to-b from-[#60a5fa] via-[#ec4899] to-[#f97316]' />
                                    <span className='grid h-14 w-14 place-items-center rounded-full border border-white/35 bg-[#11101a]/80 shadow-[0_10px_26px_rgba(236,72,153,0.35)] backdrop-blur-xl'>
                                        <span className='h-10 w-10 rounded-full bg-linear-to-br from-[#60a5fa] via-[#ec4899] to-[#f97316]' />
                                    </span>
                                    <span
                                        className='block w-0.5 rounded-full bg-linear-to-b from-[#f97316]/40 via-[#ec4899]/10 to-transparent'
                                        style={{ height: Math.max(0, markerState[index]?.tail || 0) }}
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(5,5,10,0.35)]'>
                                <span className='font-[font2] text-xs uppercase tracking-[0.35em] text-white/55'>
                                    {role.timeframe}
                                </span>
                                <h2 className='font-[font3] text-3xl text-white sm:text-4xl'>
                                    {role.company}
                                </h2>
                                <div className='flex flex-wrap items-center gap-4 text-sm text-white/70'>
                                    <span className='inline-flex items-center gap-2'>
                                        <RiMapPin2Line className='text-white/60' size={18} />
                                        {role.location}
                                    </span>
                                    {role.remote && (
                                        <span className='inline-flex items-center gap-2'>
                                            <RiRemoteControlLine className='text-white/60' size={18} />
                                            Remote work
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div
                                className='relative hidden h-full items-stretch justify-center lg:flex'
                                ref={el => {
                                    trackRefs.current[index] = el
                                }}
                            >
                                <span className='pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-white/0 via-white/30 to-white/0' />
                                <div className='pointer-events-none relative flex w-full justify-center'>
                                    <div
                                        className='absolute left-1/2 top-0 flex -translate-x-1/2 transform flex-col items-center gap-3 transition-all duration-200 ease-out'
                                    >
                                        <span
                                            className='block w-0.5 rounded-full bg-linear-to-b from-[#60a5fa] via-[#ec4899] to-[#f97316]'
                                            style={{ height: Math.max(0, markerState[index]?.lead || 0) }}
                                        />
                                        <span
                                            className={`grid h-14 w-14 place-items-center rounded-full border border-white/35 bg-[#0f0f17]/80 shadow-[0_16px_38px_rgba(236,72,153,0.4)] backdrop-blur-xl transition-opacity duration-200 ${markerState[index]?.active ? 'opacity-100' : 'opacity-60'
                                                }`}
                                        >
                                            <span className='h-10 w-10 rounded-full bg-linear-to-br from-[#60a5fa] via-[#ec4899] to-[#f97316]' />
                                        </span>
                                        <span
                                            className='block w-0.5 rounded-full bg-linear-to-b from-[#f97316]/40 via-[#ec4899]/10 to-transparent'
                                            style={{ height: Math.max(0, markerState[index]?.tail || 0) }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-6 rounded-4xl border border-white/8 bg-black/35 p-6 shadow-[0_24px_70px_rgba(10,10,25,0.45)]'>
                                <h3 className='font-[font3] text-2xl text-white sm:text-3xl'>
                                    {role.title}
                                </h3>
                                <div className='space-y-4 font-[font2] text-base leading-relaxed text-white/75 sm:text-lg'>
                                    {role.summary.map(point => (
                                        <p key={point} className='text-white/80'>
                                            {point.split(/(\d+%|\d+\+|CMS|Next\.js|React|Tailwind CSS|TypeScript|Monorepo|Turborepo|WCAG 2\.1 AA)/g).map((chunk, idx) =>
                                                /(\d+%|\d+\+|CMS|Next\.js|React|Tailwind CSS|TypeScript|Monorepo|Turborepo|WCAG 2\.1 AA)/.test(chunk)
                                                    ? (
                                                        <span key={`${chunk}-${idx}`} className='font-semibold text-white'>
                                                            {chunk}
                                                        </span>
                                                    )
                                                    : (
                                                        <span key={`${chunk}-${idx}`}>
                                                            {chunk}
                                                        </span>
                                                    )
                                            )}
                                        </p>
                                    ))}
                                </div>
                                {role.skills?.length ? (
                                    <div className='flex flex-col gap-3 pt-2'>
                                        <span className='font-[font2] text-xs uppercase tracking-[0.32em] text-white/40'>
                                            Skills &amp; Tools
                                        </span>
                                        <div className='flex flex-wrap gap-3'>
                                            {role.skills.filter(Boolean).map(skill => (
                                                <span
                                                    key={skill}
                                                    className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-[font2] text-white/80 shadow-[0_12px_24px_rgba(14,14,35,0.35)] backdrop-blur'
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience