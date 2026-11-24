const work = [
    {
        name: "MSU AI Club",
        description: "I’m building a tool that helps people trace links between petrochemical facilities and company records.",
    },
    {
        name: "Spartan Technical Consulting",
        description: "I’m working with OXR to bring extended reality experiences to educators.",
    },
    {
        name: "Personal projects",
        description: "I experiment with semantic search and build web apps like this desktop portfolio.",
    },
];

export function About() {
    return (
        <div
            className="app-page-scroll app-scroll-area @container bg-[#142221] p-[clamp(1.25rem,4vw,2.75rem)] text-[#f0f7f3] [scrollbar-color:#55716d_#142221] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#a7e8cd]"
            role="region"
            aria-label="About Jacob Thole"
            tabIndex={0}
        >
            <div className="mx-auto max-w-3xl">
                <header className="grid items-center gap-6 pb-7 @lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] motion-safe:animate-about-enter" data-enter>
                    <div className="self-center">
                        <p className="font-mono text-xs tracking-widest text-[#a7e8cd] uppercase">Michigan State University</p>
                        <h1 className="mt-2 text-[clamp(2.75rem,10cqi,5.25rem)] leading-[0.94] font-[650] tracking-[-0.085em] text-balance">Jacob Thole</h1>
                        <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-[#c3d5d3]">
                            Computer science student interested in how we search, connect, and make sense of data.
                        </p>
                        <a className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-md border border-[#5b8075] px-3.5 text-sm text-[#dcfaeb] hover:bg-[#29443d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a7e8cd] motion-safe:transition motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0" href="#about-current-work">
                            See what I&apos;m building <span aria-hidden="true">&darr;</span>
                        </a>
                    </div>
                    <div className="grid min-h-32 place-items-center overflow-hidden rounded-md border border-[#39544d] bg-[radial-gradient(circle,#84bea459_1px,transparent_1.5px),radial-gradient(ellipse_at_65%_22%,#315e50,#1b302c_75%)] [background-position:center] [background-size:10px_10px,100%_100%] @lg:min-h-56" aria-hidden="true">
                        <span className="font-mono text-[clamp(4rem,17cqi,7rem)] leading-none font-bold tracking-[-0.13em] text-[#d9fbe8] [text-shadow:3px_4px_#203c33] motion-safe:animate-about-mark">JT</span>
                    </div>
                </header>

                <section id="about-current-work" className="scroll-mt-5 border-t border-[#324745] pt-6">
                    <h2 className="text-xl font-semibold tracking-tight">Current work</h2>
                    <ul className="mt-2 divide-y divide-[#324745]">
                        {work.map(({ name, description }) => (
                            <li key={name} className="grid gap-1 py-3.5 @lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] @lg:gap-6">
                                <h3 className="text-sm font-semibold text-[#edf5ef]">{name}</h3>
                                <p className="text-sm leading-relaxed text-[#b4c8c6]">{description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="border-t border-[#324745] pb-2 pt-6">
                    <h2 className="text-xl font-semibold tracking-tight">Tools I use</h2>
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs leading-relaxed text-[#b4c8c6]">
                        {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "PostgreSQL", "Vector search", "LLMs"].map((tool) => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
