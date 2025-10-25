import { useState, useEffect, useRef } from 'react';
import Menubox from './Menubox';

const Navbar = () => {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    const [active, setActive] = useState('home');
    const lastActiveRef = useRef('home');
    const scrollToId = (id) => {
        if (id === 'home') return scrollToTop();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Track sections relative to scroll position and highlight the current nav item
    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

    const ids = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

        const getSections = () => ids
            .map(id => document.getElementById(id))
            .filter(Boolean);

        let ticking = false;

        const updateActive = () => {
            ticking = false;
            const sections = getSections();
            if (!sections.length) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight || 0;
            const probe = scrollY + viewportHeight * 0.35; // sample point a bit below top

            let nextActive = ids[0];
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                const sectionTop = scrollY + rect.top;
                const sectionBottom = sectionTop + rect.height;
                if (probe >= sectionTop && probe < sectionBottom) {
                    nextActive = section.id;
                    break;
                }
            }

            if (lastActiveRef.current !== nextActive) {
                lastActiveRef.current = nextActive;
                setActive(nextActive);
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(updateActive);
            }
        };

        updateActive();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // for navmenu list
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // also stop scrolling when menu is open
        if (!isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    };

    const baseItem = 'block px-4 py-2 rounded-full text-sm transition-colors';
    const idleItem = 'text-zinc-200 hover:text-white hover:bg-white/10';
    return (
        <div className='w-screen bg-transparent fixed top-0 left-0 z-50 font-[font2]'>
            {/* for desktop view */}
            <div className='w-full items-center justify-between py-4 px-8 hidden md:flex lg:flex'>
                <button
                    type="button"
                    className="left cursor-pointer inline-flex items-center"
                    aria-label="Go to top"
                    onClick={scrollToTop}
                >
                    <span className='text-3xl'>Henil.</span>
                </button>

                <div className="hidden md:block">
                    {/* Glassmorphism menu container */}
                    <div
                        className="menulist relative rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-2 py-1 overflow-hidden"
                    >
                        {/* subtle top sheen */}
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-white/15 to-transparent" />
                        <ul className='relative z-10 flex items-center gap-1 md:gap-2'>
                            <li>
                                <a
                                    href="#home"
                                    onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                                    className={`${baseItem} ${active === 'home' ? 'bg-white/10 text-white' : idleItem}`}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => { e.preventDefault(); scrollToId('about'); }}
                                    className={`${baseItem} ${active === 'about' ? 'bg-white/10 text-white' : idleItem}`}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experience"
                                    onClick={(e) => { e.preventDefault(); scrollToId('experience'); }}
                                    className={`${baseItem} ${active === 'experience' ? 'bg-white/10 text-white' : idleItem}`}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    onClick={(e) => { e.preventDefault(); scrollToId('projects'); }}
                                    className={`${baseItem} ${active === 'projects' ? 'bg-white/10 text-white' : idleItem}`}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}
                                    className={`${baseItem} ${active === 'contact' ? 'bg-white/10 text-white' : idleItem}`}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:block">
                    <button onClick={toggleMenu} className='px-2 py-1 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command mx-0 hidden size-5 md:block" aria-hidden="true"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
                    </button>
                </div>
            </div>

            {/* for mobile view */}
            <div className="sm:block md:hidden lg:hidden">
                <div className='w-full text-center py-8 px-8'>
                    <span className='cursor-pointer relative rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden py-4 px-16' onClick={toggleMenu}>Henil.</span>
                </div>
            </div>
            {isOpen && (
                <Menubox
                    toggleMenu={toggleMenu}
                    activeSection={active}
                    onNavigate={(id) => {
                        if (id === 'home') {
                            scrollToTop();
                        } else {
                            scrollToId(id);
                        }
                    }}
                />
            )}
        </div>
    )
}

export default Navbar