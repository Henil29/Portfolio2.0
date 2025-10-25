import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'
import portraitImg from '../assets/imgs/my.jpg'
import eat from '../assets/imgs/eat.jpg'
import travel from '../assets/imgs/travel.jpg'
import CardSwap, { Card } from '../components/About/CardSwap'

const About = () => {
  const details = [
    { label: 'I Code', image: portraitImg },
    { label: 'I Travel', image: travel },
    { label: 'I eat', image: eat }
  ]
  return (
    <section
      id='about'
      className='relative overflow-hidden bg-[#050505] py-24 sm:py-28 lg:py-32'
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.16),rgba(5,5,9,0.05)_45%,rgba(5,5,9,0.9))]' />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#050505] via-[#04040a] to-transparent' />
      <div className='relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 text-white md:px-10 lg:flex-row lg:items-center lg:gap-20'>
        <div className='flex-1'>
          <p className='font-[font2] text-xs uppercase tracking-[0.4em] text-white/45'>More About Me</p>
          <h2 className='mt-4 font-[font3] text-4xl leading-[1.1] text-white/95 sm:text-5xl lg:text-6xl'>
            I&apos;m Henil, a creative{' '}
            <span className='bg-linear-to-r from-[#f472b6] via-[#c084fc] to-[#60a5fa] bg-clip-text italic text-transparent'>engineer</span>
          </h2>
          <div className='mt-6 space-y-5 font-[font2] text-base leading-relaxed text-white/70 sm:text-lg'>
            <p>
              I&apos;m a proactive full-stack developer focused on building dynamic, meaningful web experiences. From crafting polished frontends to architecting reliable backends, I thrive on solving complex problems with clean, efficient code.
            </p>
            <p>
              My toolkit spans React, Next.js, Node.js, and modern UI systems. I stay curious, keep experimenting, and seek opportunities that stretch my creativity and technical skills.
            </p>
            <p>
              When I&apos;m not shipping features, I&apos;m exploring new ideas, reading about design systems, or tinkering with side projects that keep me inspired. Every day is another chance to learn something impactful.
            </p>
          </div>
          <div className='mt-8 flex flex-wrap items-center gap-4 text-white/70'>
            <a
              href='https://www.linkedin.com/'
              className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30 hover:bg-white/15'
              aria-label='LinkedIn'
            >
              <RiLinkedinLine size={20} />
            </a>
            <a
              href='https://github.com/'
              className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30 hover:bg-white/15'
              aria-label='GitHub'
            >
              <RiGithubLine size={20} />
            </a>
            <a
              href='https://twitter.com/'
              className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30 hover:bg-white/15'
              aria-label='Twitter'
            >
              <RiTwitterLine size={20} />
            </a>
          </div>
        </div>

        <div className='flex w-full justify-center lg:flex-1 lg:justify-end'>
          <CardSwap
            width={340}
            height={420}
            cardDistance={90}
            verticalDistance={80}
            delay={3000}
            pauseOnHover
            className='lg:translate-x-6'
          >
            {details.map(({ label, image }) => (
              <Card key={label} className='group overflow-hidden border-white/15 bg-black/80 p-3 shadow-[0_40px_110px_rgba(0,0,0,0.55)]'>
                <div className='relative h-full w-full overflow-hidden rounded-3xl border border-white/12 bg-linear-to-br from-white/10 to-white/5'>
                  <img
                    src={image}
                    alt={`${label} highlight`}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                  <div className='absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 rounded-b-3xl bg-linear-to-t from-black/80 via-black/20 to-transparent pb-6 pt-5'>
                    <span className='font-[font2] text-sm uppercase tracking-[0.4em] text-white/90'>
                      {label}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  )
}

export default About