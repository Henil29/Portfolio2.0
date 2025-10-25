import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
    RiHome5Line,
    RiFolder3Line,
    RiBookOpenLine,
    RiChat3Line,
    RiLinksLine,
    RiUserLine,
    RiTaskLine,
    RiStackLine,
    RiMailSendLine,
    RiPhoneLine,
    RiExternalLinkLine
} from 'react-icons/ri';

import resume from '../../assets/docs/HenilPatel_Resume.pdf'

const svgs = [
    {
        name: 'linkedin',
        icon: <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
        link: 'https://www.linkedin.com/in/henilpatel06/'
    },
    {
        name: 'github',
        icon: <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
        link: 'https://github.com/Henil29'
    },
    {
        name: 'twitter',
        icon: <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
        link: 'https://x.com/HenilPatel2906'
    }
]

const navItems = [
    {
        id: 'home',
        section: 'Navigation',
        title: 'Home',
        description: 'Jump back to the hero section',
        icon: <RiHome5Line size={18} />,
        badge: 'Current'
    },
    {
        id: 'about',
        section: 'Navigation',
        title: 'About',
        description: 'Learn more about me',
        icon: <RiUserLine size={18} />
    },
    {
        id: 'skills',
        section: 'Navigation',
        title: 'Skills',
        description: 'Tools and technologies I excel at',
        icon: <RiStackLine size={18} />
    },
    {
        id: 'experience',
        section: 'Navigation',
        title: 'Experience',
        description: 'Showcase of my work',
        icon: <RiTaskLine size={18} />
    },
    {
        id: 'projects',
        section: 'Navigation',
        title: 'Projects',
        description: 'Showcase of my work',
        icon: <RiFolder3Line size={18} />
    },
    {
        id: 'contact',
        section: 'Navigation',
        title: 'Contact',
        description: 'Ways to collaborate or say hi',
        icon: <RiMailSendLine size={18} />
    },
    {
        id: 'resume',
        section: 'Resources',
        title: 'Resume',
        description: 'Download my latest resume',
        href: resume,
        icon: <RiBookOpenLine size={18} />
    },
    {
        id: 'github',
        section: 'Social',
        title: 'GitHub',
        description: 'View my GitHub profile',
        href: 'https://github.com/Henil29',
        icon: <RiLinksLine size={18} />
    },
    {
        id: 'linkedin',
        section: 'Social',
        title: 'LinkedIn',
        description: 'Connect with me on LinkedIn',
        href: 'https://www.linkedin.com/in/henilpatel06/',
        icon: <RiTaskLine size={18} />
    },
    {
        id: 'X',
        section: 'Social',
        title: 'X (Twitter)',
        description: 'Follow my updates on X',
        href: 'https://x.com/HenilPatel2906',
        icon: <RiChat3Line size={18} />
    },
    {
        id: 'book-a-call',
        section: 'Navigation',
        title: 'Book a Call',
        description: 'Let’s connect for a conversation',
        icon: <RiPhoneLine size={18} />
    }
];

const shortcuts = [
    { key: '↑/↓', label: 'navigate' },
    { key: '↵', label: 'select' },
    { key: 'esc', label: 'close' }
];

const Menubox = ({ toggleMenu, activeSection = 'home', onNavigate }) => {
    const [query, setQuery] = useState('');
    const [highlightIndex, setHighlightIndex] = useState(0);

    const filteredItems = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) return navItems;
        return navItems.filter((item) =>
            item.title.toLowerCase().includes(normalized) ||
            item.description.toLowerCase().includes(normalized)
        );
    }, [query]);

    const handleSelect = useCallback((item) => {
        if (item.href) {
            if (typeof window !== 'undefined') {
                const isExternal = item.href.startsWith('http') || resume;
                if (isExternal) {
                    window.open(item.href, '_blank', 'noopener,noreferrer');
                } else {
                    window.location.href = item.href;
                }
            }
        } else if (onNavigate) {
            onNavigate(item.id);
        }
        toggleMenu();
    }, [onNavigate, toggleMenu]);

    useEffect(() => {
        if (!query) {
            const idx = filteredItems.findIndex((item) => item.id === activeSection);
            setHighlightIndex(idx >= 0 ? idx : 0);
        } else {
            setHighlightIndex(0);
        }
    }, [activeSection, filteredItems, query]);

    useEffect(() => {
        if (!filteredItems.length) {
            setHighlightIndex(0);
            return;
        }
        setHighlightIndex((prev) => {
            if (prev >= filteredItems.length) {
                return filteredItems.length - 1;
            }
            return prev;
        });
    }, [filteredItems.length]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                toggleMenu();
                return;
            }
            if (!filteredItems.length) return;
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setHighlightIndex((prev) => (prev + 1) % filteredItems.length);
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setHighlightIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (event.key === 'Enter') {
                event.preventDefault();
                const selected = filteredItems[highlightIndex];
                if (selected) {
                    handleSelect(selected);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [filteredItems, highlightIndex, handleSelect, toggleMenu]);

    return (
        <div className="fixed inset-0 z-40 flex items-start justify-center px-3 sm:px-6">
            <div className='absolute inset-0 bg-transparent backdrop-blur-sm' onClick={toggleMenu} />
            <div className="relative mt-12 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[rgba(25,25,30,0.32)] to-[rgba(15,15,20,0.18)] backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.35)] font-[font2]">
                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                    <BiSearch size={20} className="text-white/60" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-0"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        autoFocus
                    />
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className=" cursor-pointer lg:inline-flex hidden items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/60 hover:bg-white/10"
                        aria-label="Close menu"
                    >
                        ESC
                    </button>
                </div>

                <div className="scrollbar max-h-[55vh] overflow-y-auto px-2 py-4 sm:px-4">
                    <ul className="flex flex-col gap-1">
                        {(() => {
                            let lastSection = '';
                            return filteredItems.map((item, index) => {
                                const sectionChanged = item.section && item.section !== lastSection;
                                if (sectionChanged) {
                                    lastSection = item.section;
                                }
                                const isActive = activeSection === item.id;
                                const isHighlighted = index === highlightIndex;
                                const isSelected = isActive || isHighlighted;
                                return (
                                    <Fragment key={item.id}>
                                        {sectionChanged && (
                                            <li className="px-4 pt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35 first:pt-0">
                                                {item.section}
                                            </li>
                                        )}
                                        <li>
                                            <button
                                                type="button"
                                                onClick={() => handleSelect(item)}
                                                className={` cursor-pointer flex w-full items-start gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${isSelected ? 'bg-white/10 text-white shadow-[0_12px_45px_rgba(17,17,35,0.35)]' : 'text-white/75 hover:bg-white/8 hover:text-white'} ${isHighlighted && !isActive ? 'ring-1 ring-white/15' : ''}`}
                                            >
                                                <span className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 ${isSelected ? 'text-white' : 'text-white/60'}`}>
                                                    {item.icon}
                                                </span>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium">{item.title}</span>
                                                        {isActive && item.badge && (
                                                            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/75">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-1 text-[12px] text-white/55">{item.description}</p>
                                                </div>
                                                {item.href && (
                                                    <span className="mt-1 text-white/40">
                                                        <RiExternalLinkLine size={16} />
                                                    </span>
                                                )}
                                            </button>
                                        </li>
                                    </Fragment>
                                );
                            });
                        })()}
                        {!filteredItems.length && (
                            <li className="px-4 py-6 text-center text-sm text-white/40">
                                No matches found.
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 bg-white/2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <ul className='flex items-center gap-4 text-white/60'>
                        {svgs.map((svg) => (
                            <li key={svg.name} className='transition-colors hover:text-white/90'>
                                <a
                                    href={svg.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={svg.name}
                                    className='flex items-center justify-center'
                                >
                                    {svg.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:flex hidden flex-wrap items-center gap-3 text-[11px] uppercase tracking-widest text-white/35">
                        {shortcuts.map((shortcut) => (
                            <span key={shortcut.key} className="inline-flex items-center gap-2 select-none">
                                <span className="inline-flex h-6 min-w-[38px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-2 text-[10px] font-semibold text-white/60">
                                    {shortcut.key}
                                </span>
                                <span>{shortcut.label}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menubox