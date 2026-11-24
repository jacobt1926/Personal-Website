import Image, { type StaticImageData } from "next/image";
import stcLogo from "../../images/Spartan Technical Consulting logo.jpg";
import toddLogo from "../../images/toddagriscience_logo.jpg";

type Role = {
    title: string;
    company: string;
    dates: string;
    arrangement: string;
    bullets: string[];
    logo?: StaticImageData;
    monogram: string;
};

const roles: Role[] = [
    {
        title: "Software Consultant",
        company: "Spartan Technical Consulting",
        dates: "November 2026 - Present",
        arrangement: "Hybrid / Co-op",
        logo: stcLogo,
        monogram: "ST",
        bullets: [
            "Working with OXR to bring extended reality experiences to educators and schools.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Todd",
        dates: "June 2026 - August 2026",
        arrangement: "Remote / Part-time",
        logo: toddLogo,
        monogram: "T",
        bullets: [
            "Built React and TypeScript dashboard components for a site used by over 2,000 monthly visitors, including navigation that adapts to sign-in status.",
            "Wrote integration tests for signed-in and signed-out states and collaborated through GitHub pull requests and code reviews.",
        ],
    },
    {
        title: "AI Policy Intern",
        company: "Sarraille & Associates",
        dates: "May 2026 - August 2026",
        arrangement: "Remote / Full-time",
        monogram: "SA",
        bullets: [
            "Reviewed legal filings, government guidance, and academic research to assess liability and compliance risks in healthcare AI.",
            "Wrote research briefs and policy analyses for legal consultants.",
        ],
    },
];

export function Experience() {
    return (
        <section
            aria-label="Professional experience"
            tabIndex={0}
            className="app-page-scroll app-scroll-area @container bg-[#0b111b] p-[clamp(1.25rem,4vw,2.75rem)] text-[#edf4ff] [scrollbar-color:#466284_#0b111b] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#8fc4ff]"
        >
            <div className="mx-auto max-w-3xl">
                <header className="border-b border-[#2b405b] pb-6">
                    <h1 className="text-[clamp(2.25rem,8cqi,4.25rem)] leading-none font-semibold tracking-[-0.07em]">Experience</h1>
                    <p className="mt-3 text-sm leading-relaxed text-[#b9cbe2] @lg:text-base">
                        Software consulting, frontend engineering, and healthcare AI policy.
                    </p>
                </header>

                <ol className="mt-5 border-s border-[#304a69] ps-4 @lg:ps-6">
                    {roles.map((role) => (
                        <li key={role.company} className="group relative pb-4 last:pb-0">
                            <span
                                aria-hidden="true"
                                className="absolute -start-[calc(1rem+5px)] top-5 size-[9px] rounded-full bg-[#6488b3] ring-4 ring-[#0b111b] group-first:bg-[#8fc4ff] @lg:-start-[calc(1.5rem+5px)]"
                            />
                            <article className="grid gap-3 rounded-lg border border-[#243950] bg-[#111d2d] p-4 @lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] @lg:gap-5 @lg:p-5">
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 @lg:block">
                                    <p className="font-mono text-xs leading-relaxed text-[#9acaff]">{role.dates}</p>
                                    <p className="text-xs leading-relaxed text-[#aebfd6] @lg:mt-1">{role.arrangement}</p>
                                </div>
                                <div className="min-w-0">
                                    <header className="flex items-center gap-3">
                                        <div aria-hidden="true" className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-md border border-[#385477] bg-[#1b3049] font-mono text-xs font-semibold text-[#9acaff]">
                                            {role.logo ? <Image src={role.logo} alt="" width={40} height={40} unoptimized className="size-full bg-white object-contain" /> : role.monogram}
                                        </div>
                                        <div className="min-w-0">
                                            <h2 className="text-base leading-tight font-semibold @lg:text-lg">{role.title}</h2>
                                            <p className="mt-0.5 text-sm leading-snug text-[#b9cbe2]">{role.company}</p>
                                        </div>
                                    </header>
                                    <ul className="mt-3 list-disc space-y-1.5 ps-4 text-sm leading-relaxed text-[#c3d2e6] marker:text-[#7aa9dc]">
                                        {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
