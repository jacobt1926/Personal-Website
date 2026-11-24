import Image, { type StaticImageData } from "next/image";
import stcLogo from "../../images/Spartan Technical Consulting logo.jpg";
import toddLogo from "../../images/toddagriscience_logo.jpg";
import emailIcon from "../../images/email icon.jpg";
import githubIcon from "../../images/github icon.png";
import instagramIcon from "../../images/instagram icon.jpg";
import linkedinIcon from "../../images/linkedin icon.jpg";

export function About() {
    return (
        <div className="app-page-scroll flex overflow-hidden bg-[#f3f3f3] text-[#1f1f1f]">
            <aside className="hidden w-48 shrink-0 border-r border-[#e5e5e5] bg-[#f6f6f6] p-3 sm:block">
                <nav aria-label="About sections" className="space-y-1">
                    <a href="#about-me" className="flex items-center gap-3 rounded-md bg-white px-3 py-2.5 text-sm font-medium text-[#1f1f1f] shadow-sm ring-1 ring-black/5">
                        <span className="h-4 w-1 rounded-full bg-[#0878d1]" />About Me
                    </a>
                    <a href="#working-on" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#444] hover:bg-black/5">
                        <span className="h-4 w-1 rounded-full bg-transparent" />What I&apos;m Working On
                    </a>
                    <a href="#technologies" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#444] hover:bg-black/5">
                        <span className="h-4 w-1 rounded-full bg-transparent" />Technologies
                    </a>
                </nav>
            </aside>

            <div className="app-scroll-area min-w-0 flex-1 px-5 py-6 sm:px-8 sm:py-7">
                <div className="mx-auto max-w-2xl">
                    <header className="mb-7 flex items-center gap-4 border-b border-[#dedede] pb-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e5f1fb] text-lg font-semibold text-[#075b9a]">
                            JT
                        </div>
                        <div className="min-w-0 flex-1">
                            <h1 className="text-xl font-semibold tracking-tight">Jacob Thole</h1>
                            <p className="mt-1 text-sm text-[#5b5b5b]">Computer Science @ Michigan State University</p>
                        </div>
                        <span className="hidden shrink-0 items-center gap-2 rounded-full border border-[#c8e3d1] bg-[#edf7ef] px-3 py-1.5 text-xs font-medium text-[#236b38] sm:inline-flex">
                            <span className="h-2 w-2 rounded-full bg-[#2e9b50]" />
                            Open to opportunities
                        </span>
                    </header>

                    <section id="about-me" className="scroll-mt-6 border-b border-[#dedede] pb-6">
                        <h2 className="mb-3 text-lg font-semibold tracking-tight">About Me</h2>
                        <div className="space-y-3 text-sm leading-6 text-[#3d3d3d]">
                            <p>
                                Hey! I&apos;m Jacob, a Computer Science student at Michigan State University
                                with a passion for software development, artificial intelligence,
                                and building things that solve real problems.
                            </p>
                            <p>
                                I&apos;m especially interested in AI engineering, developing intelligent
                                systems, and making emerging technologies more accessible and useful.
                                Whether I&apos;m building an application, experimenting with machine learning,
                                or collaborating with a team, I enjoy turning ideas into working software.
                            </p>
                        </div>
                    </section>

                    <section id="working-on" className="scroll-mt-6 border-b border-[#dedede] py-6">
                        <h2 className="mb-2 text-lg font-semibold tracking-tight">What I&apos;m Working On</h2>
                        <div className="divide-y divide-[#e6e6e6]">
                            <article className="grid gap-1 py-3 sm:grid-cols-[190px_1fr] sm:gap-5">
                                <h3 className="text-sm font-medium">AI &amp; Data Engineering</h3>
                                <p className="text-sm leading-5 text-[#5b5b5b]">Developing an AI-powered petrochemical facility tracking system with MSU&apos;s AI Club.</p>
                            </article>
                            <article className="grid gap-1 py-3 sm:grid-cols-[190px_1fr] sm:gap-5">
                                <h3 className="text-sm font-medium">Software Consulting</h3>
                                <p className="text-sm leading-5 text-[#5b5b5b]">Building software solutions for real clients through Spartan Technical Consulting.</p>
                            </article>
                            <article className="grid gap-1 py-3 sm:grid-cols-[190px_1fr] sm:gap-5">
                                <h3 className="text-sm font-medium">Personal Projects</h3>
                                <p className="text-sm leading-5 text-[#5b5b5b]">Exploring web development, AI integrations, semantic search, and creative applications like this desktop portfolio.</p>
                            </article>
                        </div>
                    </section>

                    <section id="technologies" className="scroll-mt-6 py-6">
                        <h2 className="mb-3 text-lg font-semibold tracking-tight">Technologies</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "AI / LLMs", "Vector Search"].map((technology) => (
                                <span key={technology} className="rounded-md border border-[#d8d8d8] bg-white px-3 py-1.5 text-xs text-[#333] shadow-sm">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>

                    <footer className="border-t border-[#dedede] py-4 text-xs text-[#777]">
                        Built with curiosity, caffeine, and probably too many browser tabs.
                    </footer>
                </div>
            </div>
        </div>
    );
}

export function Experience() {
    const roles: {
        title: string;
        company: string;
        dates: string;
        arrangement: string;
        bullets: string[];
        logo?: StaticImageData;
        logoAlt?: string;
        monogram: string;
    }[] = [
        {
            title: "Software Consultant",
            company: "Spartan Technical Consulting",
            dates: "November 2026 - Present",
            arrangement: "Hybrid / Co-op",
            logo: stcLogo,
            logoAlt: "Spartan Technical Consulting logo",
            monogram: "ST",
            bullets: [
                "Collaborating with startups to develop and deliver technology solutions in teams",
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Todd",
            dates: "June 2026 - August 2026",
            arrangement: "Remote / Part-time",
            logo: toddLogo,
            logoAlt: "Todd AgriScience logo",
            monogram: "T",
            bullets: [
                "Built React/TypeScript components for an authenticated user dashboard used by over 2,000 monthly visitors, including navigation that adapts to signed-in and signed-out user states",
                "Wrote integration tests to validate authentication-dependent UI behavior and collaborated through GitHub pull requests and code reviews",
            ],
        },
        {
            title: "AI Policy Intern",
            company: "Sarraille & Associates",
            dates: "May 2026 - August 2026",
            arrangement: "Remote / Full-time",
            monogram: "SA",
            bullets: [
                "Researched healthcare AI litigation and regulatory developments, assessing liability and compliance risks through legal filings, government guidance, and academic research",
                "Authored research briefs and policy analyses for legal consultants, translating complex technical and legal issues into clear written findings",
            ],
        },
    ];

    return (
        <div className="app-page-scroll app-scroll-area bg-[#f3f2ef] px-4 py-5 text-[#191919] sm:px-6 sm:py-7">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-[#e2e0dc] bg-white shadow-sm">
                <header className="border-b border-[#e6e4e1] px-5 py-5 sm:px-7">
                    <h1 className="text-xl font-semibold tracking-tight">Experience</h1>
                </header>

                <div className="divide-y divide-[#e6e4e1] px-5 sm:px-7">
                    {roles.map((role) => (
                        <article key={role.company} className="flex gap-4 py-5 sm:gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#e5e5e5] bg-white text-xs font-semibold text-[#46525b]">
                                {role.logo ? (
                                    <Image
                                        src={role.logo}
                                        alt={role.logoAlt ?? `${role.company} logo`}
                                        width={48}
                                        height={48}
                                        unoptimized
                                        className="h-12 w-12 object-contain"
                                    />
                                ) : (
                                    role.monogram
                                )}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
                                    <div>
                                        <h2 className="text-base font-semibold leading-5">{role.title}</h2>
                                        <p className="mt-1 text-sm text-[#404040]">{role.company}</p>
                                    </div>
                                    <div className="shrink-0 text-sm text-[#666] sm:text-right">
                                        <p>{role.dates}</p>
                                        <p className="mt-0.5 text-xs">{role.arrangement}</p>
                                    </div>
                                </div>
                                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-5 text-[#3f3f3f] marker:text-[#737373]">
                                    {role.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    return(
        <p>AI Murder bot</p>
    )
}


export function Contact() {
    const contactMethods = [
        {
            label: "Email",
            value: "jacobth1243@icloud.com",
            detail: "Best for opportunities and project inquiries",
            href: "mailto:jacobth1243@icloud.com",
            icon: emailIcon,
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/jacobtho",
            detail: "Connect with me professionally",
            href: "https://www.linkedin.com/in/jacobtho/",
            icon: linkedinIcon,
        },
        {
            label: "GitHub",
            value: "github.com/jacobt1926",
            detail: "Explore my projects and code",
            href: "https://github.com/jacobt1926",
            icon: githubIcon,
        },
        {
            label: "Instagram",
            value: "instagram.com/jacob.thol",
            detail: "Find me on Instagram",
            href: "https://www.instagram.com/jacob.thol/",
            icon: instagramIcon,
        },
    ];

    return (
        <div className="app-page-scroll app-scroll-area bg-[#f3f3f3] px-5 py-6 text-[#1f1f1f] sm:px-8 sm:py-8">
            <div className="mx-auto max-w-2xl">
                <header className="mb-7 border-b border-[#dedede] pb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0878d1]">
                        Contact
                    </p>
                    <h1 className="text-2xl font-semibold tracking-tight">Let&apos;s connect.</h1>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#5b5b5b]">
                        Have a project, opportunity, or just want to talk? Reach out through either of these channels.
                    </p>
                </header>

                <div className="space-y-3">
                    {contactMethods.map((method) => (
                        <a
                            key={method.label}
                            href={method.href}
                            target={method.label === "Email" ? undefined : "_blank"}
                            rel={method.label === "Email" ? undefined : "noreferrer"}
                            className="group flex items-center gap-4 rounded-lg border border-[#dedede] bg-white p-4 shadow-sm transition hover:border-[#a8c9e4] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878d1] sm:p-5"
                        >
                            <Image
                                src={method.icon}
                                alt=""
                                width={44}
                                height={44}
                                unoptimized
                                className="h-11 w-11 shrink-0 rounded-lg object-cover"
                            />
                            <span className="min-w-0 flex-1">
                                <span className="block text-sm font-semibold">{method.label}</span>
                                <span className="mt-0.5 block break-all text-sm text-[#0878d1]">{method.value}</span>
                                <span className="mt-1 block text-xs text-[#6b6b6b]">{method.detail}</span>
                            </span>
                            <span aria-hidden="true" className="text-lg text-[#8a8a8a] transition group-hover:translate-x-0.5 group-hover:text-[#0878d1]">
                                ↗
                            </span>
                        </a>
                    ))}
                </div>

                <p className="mt-6 text-xs text-[#777]">For the fastest reply, email is the best place to reach me.</p>
            </div>
        </div>
    );
}
