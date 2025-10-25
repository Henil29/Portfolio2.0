import { useMemo } from 'react'
import {
	RiMailSendLine,
	RiLinkedinBoxLine,
	RiGithubLine,
	RiMapPin2Line,
	RiTimeLine,
	RiChatSmile3Line,
	RiArrowRightUpLine
} from 'react-icons/ri'

const emailAddress = 'henil247138@gmail.com'

const contactLinks = [
	{
		label: 'Email',
		description: 'henil247138@gmail.com',
		href: `mailto:${emailAddress}`,
		icon: RiMailSendLine
	},
	{
		label: 'LinkedIn',
		description: 'Let’s connect professionally',
		href: 'https://www.linkedin.com/in/henilpatel06/',
		icon: RiLinkedinBoxLine
	},
	{
		label: 'GitHub',
		description: 'Peek at my latest builds',
		href: 'https://github.com/Henil29',
		icon: RiGithubLine
	}
]

const Contact = () => {
	const availability = useMemo(() => ({
		location: 'Ahmedabad, India',
		timezone: 'IST (UTC +05:30)',
		response: 'Replies within 24 hours'
	}), [])

	const handleSubmit = event => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const name = formData.get('name') || 'Someone curious'
		const email = formData.get('email') || 'your-email@example.com'
		const projectType = formData.get('projectType') || 'General'
		const timeline = formData.get('timeline') || 'Flexible'
		const message = formData.get('message') || ''

		const subject = encodeURIComponent(`New ${projectType} inquiry from ${name}`)
		const pieces = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Project type: ${projectType}`,
			`Timeline: ${timeline}`,
			'',
			message
		]
		const body = encodeURIComponent(pieces.join('\n'))

		window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
	}

	return (
		<section
			id='contact'
			className='relative overflow-hidden bg-[#050507] py-24 sm:py-28 lg:py-32'
		>
			<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),rgba(5,5,10,0.9)_45%,rgba(5,5,10,1))]' />
			<div className='pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-[#050507] via-[#070712] to-transparent' />

			<div className='relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 text-white md:px-10'>
				<header className='flex flex-col items-start gap-3 text-white/70'>
					<span className='font-[font2] text-xs uppercase tracking-[0.45em] text-white/45'>
						Say Hello
					</span>
					<h2 className='font-[font3] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl'>
						Let’s build the next{' '}
						<span className='bg-linear-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent'>
							big thing
						</span>
					</h2>
					<p className='max-w-2xl font-[font2] text-sm text-white/55 sm:text-base'>
						Tell me about the problem you need solved, the product you want to scale, or simply the idea that keeps you up at night. I’ll help you stitch the strategy, design, and engineering into one seamless experience.
					</p>
				</header>

				<div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]'>
					<div className='flex flex-col gap-8 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(5,5,15,0.45)] backdrop-blur-xl sm:p-8'>
						<div className='flex flex-col gap-4'>
							<span className='inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.4em] text-white/45'>
								<RiChatSmile3Line size={18} className='text-white/60' />
								Start a conversation
							</span>
							<h3 className='font-[font3] text-3xl text-white'>Prefer a direct reply?</h3>
							<p className='font-[font2] text-sm leading-relaxed text-white/60'>
								Drop a line and share a few bullet points. I’ll follow up with next steps, timelines, and how we can collaborate.
							</p>
						</div>

						<div className='space-y-4 select-none'>
							<div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white/70 shadow-[0_12px_30px_rgba(10,10,25,0.45)]'>
								<RiMapPin2Line size={20} className='text-white/60' />
								<span className='font-[font2] text-sm uppercase tracking-[0.35em] text-white/45'>Based in {availability.location}</span>
						</div>
							<div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white/70 shadow-[0_12px_30px_rgba(10,10,25,0.45)]'>
								<RiTimeLine size={20} className='text-white/60' />
								<span className='font-[font2] text-sm uppercase tracking-[0.35em] text-white/45'>{availability.timezone}</span>
						</div>
							<div className='flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white/70 shadow-[0_12px_30px_rgba(10,10,25,0.45)]'>
								<RiMailSendLine size={20} className='text-white/60' />
								<span className='font-[font2] text-sm uppercase tracking-[0.35em] text-white/45'>{availability.response}</span>
						</div>
						</div>

						<ul className='flex flex-col gap-3 pt-2'>
							{contactLinks.map(({ label, description, href, icon: Icon }) => (
								<li key={label}>
									<a
										href={href}
										target={href.startsWith('http') ? '_blank' : undefined}
										rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
										className='group inline-flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white/75 transition-colors duration-200 hover:border-white/20 hover:bg-white/10'
									>
										<span className='flex items-center gap-3'>
											<span className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70'>
												<Icon size={20} />
											</span>
											<span className='flex flex-col text-left'>
												<span className='font-[font3] text-lg text-white'>{label}</span>
												<span className='text-sm font-[font2] text-white/55'>{description}</span>
											</span>
										</span>
										<RiArrowRightUpLine size={20} className='text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70' />
									</a>
								</li>
							))}
						</ul>
					</div>

					<form
						onSubmit={handleSubmit}
						className='flex flex-col gap-6 rounded-4xl border border-white/10 bg-black/40 p-6 shadow-[0_24px_90px_rgba(8,8,20,0.45)] backdrop-blur-xl sm:p-8'
					>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<label className='flex flex-col gap-2 text-sm text-white/60'>
								<span className='uppercase tracking-[0.28em] text-white/40'>Name</span>
								<input
									name='name'
									type='text'
									placeholder='Your name'
									className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 placeholder:text-white/30 focus:border-white/30 focus:outline-none'
									required
								/>
							</label>
							<label className='flex flex-col gap-2 text-sm text-white/60'>
								<span className='uppercase tracking-[0.28em] text-white/40'>Email</span>
								<input
									name='email'
									type='email'
									placeholder='Your email address'
									className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 placeholder:text-white/30 focus:border-white/30 focus:outline-none'
									required
								/>
							</label>
						</div>

						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<label className='flex flex-col gap-2 text-sm text-white/60'>
								<span className='uppercase tracking-[0.28em] text-white/40'>Project Type</span>
								<select
									name='projectType'
									defaultValue='Product Design'
									className='glass-select rounded-2xl border border-white/10 bg-white/5 px-4 pr-10 py-3 text-white/85 focus:border-white/30 focus:outline-none'
								>
									<option value='Full-Stack Build'>Full-stack build</option>
									<option value='Frontend Engineering'>Frontend design</option>
									<option value='Frontend Engineering'>Backend development</option>
									<option value='Other'>Other</option>
								</select>
							</label>
							<label className='flex flex-col gap-2 text-sm text-white/60'>
								<span className='uppercase tracking-[0.28em] text-white/40'>Timeline</span>
								<select
									name='timeline'
									defaultValue='Flexible'
									className='glass-select rounded-2xl border border-white/10 bg-white/5 px-4 pr-10 py-3 text-white/85 focus:border-white/30 focus:outline-none'
								>
									<option value='1-3 months' selected>1-3 months</option>
									<option value='3-6 months'>3-6 months</option>
									<option value='Flexible'>Flexible</option>
								</select>
							</label>
						</div>

						<label className='flex flex-col gap-2 text-sm text-white/60'>
							<span className='uppercase tracking-[0.28em] text-white/40'>Project Details</span>
							<textarea
								name='message'
								rows={6}
								placeholder='Share the vision, desired outcomes, links, or timelines you have in mind.'
								className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 placeholder:text-white/30 focus:border-white/30 focus:outline-none'
								required
                                style={{resize: "none"}}
							/>
						</label>

						<button
							type='submit'
							className='group cursor-pointer inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-linear-to-r from-white/10 via-white/5 to-white/10 px-6 py-3 text-sm uppercase tracking-[0.28em] text-white transition-all duration-200 hover:border-white/20 hover:from-white/15 hover:to-white/15'
						>
							<span>Send Message</span>
							<span className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-200 group-hover:translate-x-1'>
								<RiMailSendLine size={20} />
							</span>
						</button>
						<span className='text-center text-xs font-[font2] uppercase tracking-[0.3em] text-white/35'>Prefer Slack or Notion? Mention it in the message and I’ll adapt.</span>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
