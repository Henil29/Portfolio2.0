import React, { useEffect, useRef, useState } from 'react'
import ParticlesBg from '../components/home/ParticlesBg'
import { BiCopy } from 'react-icons/bi'
import { RiArrowRightLine, RiCheckLine } from 'react-icons/ri'

const Home = () => {
  const emailAddress = 'henil247138@gmail.com'
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const copyEmailToClipboard = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(emailAddress)
      return
    }

  if (typeof document === 'undefined') return

  const textarea = document.createElement('textarea')
    textarea.value = emailAddress
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  const handleCopyEmail = async () => {
    try {
      await copyEmailToClipboard()
      setCopied(true)
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
      resetTimerRef.current = setTimeout(() => setCopied(false), 3000)
    } catch (error) {
      console.error('Failed to copy email to clipboard', error)
    }
  }

  return (
    <div id='home' className='relative overflow-hidden'>
      <ParticlesBg />
        <div className='relative flex h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center'>
          <h1 className="max-w-4xl font-[font3] text-4xl font-semibold leading-[1.05] tracking-[0.08em] text-white/95 md:text-5xl md:tracking-[0.12em] lg:text-[64px]">
            I turn coffee and code
            <br className='hidden md:block' />
            &nbsp;into stunning <span className='bg-linear-to-r from-[#f59e0b] via-[#ec4899] to-[#6366f1] bg-clip-text text-transparent'>web apps.</span>
          </h1>
          <div className='flex flex-wrap items-center justify-center gap-3 font-[font2] text-base uppercase text-white/75 md:text-lg lg:text-2xl'>
            <span className='text-white'>Hello, I'm Henil Patel</span>
            {/* <span className='hidden text-white/40'>·</span> */}
            <span className='text-white'>a Full Stack Developer</span>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 font-[font2] text-sm text-white/80 md:text-base'>
            <a
              href='#contact'
              className='group inline-flex items-center gap-4 rounded-full border border-white/10 bg-linear-to-r from-white/10 via-white/5 to-white/10 px-6 py-3 text-white transition-colors duration-200 hover:border-white/20 hover:from-white/15 hover:to-white/15'
            >
              <span className='tracking-[0.22em] uppercase text-[13px] md:text-sm'>Let&apos;s Connect</span>
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 transition-transform duration-200 group-hover:translate-x-1'>
                <RiArrowRightLine size={20} />
              </span>
            </a>
            <button
              type='button'
              onClick={handleCopyEmail}
              className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/80 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40'
              title='Copy email address'
            >
              {copied ? (
                <RiCheckLine size={18} className='text-emerald-300 transition-all duration-200' />
              ) : (
                <BiCopy size={18} className='text-white/70 transition-all duration-200' />
              )}
              <span className='tracking-[0.3em] uppercase text-[12px] md:text-sm text-white/70'>{emailAddress}</span>
              <span className='sr-only' aria-live='polite'>
                {copied ? 'Email copied to clipboard' : 'Copy email address'}
              </span>
            </button>
          </div>
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent via-[#08080f80] to-[#050505]' />
        </div>
    </div>
  )
}

export default Home