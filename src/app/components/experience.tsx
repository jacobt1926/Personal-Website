"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import stcLogo from "../../images/Spartan Technical Consulting logo.jpg";
import toddLogo from "../../images/toddagriscience_logo.jpg";

const branches = ["main", "ai-ml", "software-engineering", "consulting", "research-policy"] as const;
type Branch = typeof branches[number];
type Commit = {
    id: string; message: string; company: string; role: string; dates: string;
    branches: Branch[]; tag?: string; logo?: StaticImageData; summary: string;
    highlights: string[]; stack: string[]; files: string[];
};
const commits: Commit[] = [
    {
        id: "c01a001", message: "feat: joined Spartan Technical Consulting as Software Consultant",
        company: "Spartan Technical Consulting", role: "Software Consultant", dates: "Nov 2026 – Present",
        branches: ["consulting", "software-engineering"], tag: "consulting-v1.0", logo: stcLogo,
        summary: "Delivering software solutions to businesses with Spartan Technical Consulting.",
        highlights: ["Delivering innovative software solutions to businesses", "Following the SD-LC while working in 5 day development sprints"],
        stack: ["consulting", "client work", "software development", "team collaboration"],
        files: ["client-work/oxr3d.md", "consulting/requirements-analysis.md", "team/collaboration.md"],
    },
    {
        id: "c04d004", message: "feat: developed semantic search + local AI workflow for petrochemical tracker",
        company: "MSU AI Club", role: "Advanced Projects Team", dates: "Oct 2026 – Present",
        branches: ["ai-ml", "software-engineering"], tag: "ai-systems-v1.0",
        summary: "Contributed to an AI-enhanced petrochemical OSINT tracker using SEC EDGAR and EPA data. Helped shape workflows around semantic search, local models, and data pipelines to make the system more useful, efficient, and cost-conscious.",
        highlights: ["Developed an AI-powered data pipeline integrating SEC EDGAR and EPA ECHO datasets", "Leveraged vector embeddings, semantic search, and locally hosted language models to enable intelligent information retrieval while minimizing inference costs"],
        stack: ["AI", "semantic search", "local models", "data pipelines", "Streamlit", "OSINT"],
        files: ["ai/semantic-search.md", "data/sec-edgar-pipeline.md", "data/epa-echo-matching.md", "models/local-llm-experiments.md", "dashboard/streamlit-search-ui.md"],
    },
    {
        id: "c02b002", message: "feat: built frontend systems for AI agriculture startup",
        company: "Todd", role: "Software Engineer Intern", dates: "Jun 2026 – Aug 2026",
        branches: ["software-engineering", "ai-ml"], logo: toddLogo,
        summary: "Built React/TypeScript components for an authenticated user dashboard at Todd, used by over 2,000 monthly visitors.",
        highlights: ["Built React/TypeScript components for an authenticated user dashboard used by over 2,000 monthly visitors, including navigation that adapts to signed-in and signed-out user states", "Wrote integration tests to validate authentication-dependent UI behavior and collaborated through GitHub pull requests and code reviews"],
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "testing", "startup"],
        files: ["frontend/header.tsx", "auth/session-state.md", "db/postgresql-integration.md", "testing/integration-tests.md"],
    },
    {
        id: "c03c003", message: "feat: researched AI governance and policy issues",
        company: "Sarraille & Associates", role: "AI Policy Intern", dates: "May 2026 – Aug 2026",
        branches: ["research-policy", "ai-ml"],
        summary: "Researched healthcare AI litigation and regulatory developments and authored research briefs and policy analyses for legal consultants.",
        highlights: ["Researched healthcare AI litigation and regulatory developments, assessing liability and compliance risks through legal filings, government guidance, and academic research", "Authored research briefs and policy analyses for legal consultants, translating complex technical and legal issues into clear written findings"],
        stack: ["AI policy", "research", "healthcare AI", "analysis", "writing"],
        files: ["research/doj-focus.md", "healthcare/insurer-ai.md", "policy/cms-safeguards.md", "cases/realpage-analogy.md"],
    },
    {
        id: "c05e005", message: "feat: built AI retrieval system with vector search + Claude integration",
        company: "Personal Project", role: "AI-Enabled Natural Language Query (NLQ) Processing System", dates: "May 2026",
        branches: ["ai-ml", "software-engineering"], tag: "personal-project-v1.0",
        summary: "Built an AI retrieval workflow using Python, Claude, MCP, and Voyage embeddings to compare vector-based retrieval against a Claude-only approach.",
        highlights: ["Designed and implemented a natural-language retrieval system integrating the Claude API, MCP, vector embeddings, and semantic search to retrieve information from structured datasets and documents", "Identified performance limitations in an initial LLM-only implementation and developed a vector-search-based retrieval approach to improve query efficiency", "Benchmarked vector-based retrieval against a Claude-only baseline across 12 test queries, observing a 62% reduction in query latency"],
        stack: ["Python", "Claude API", "MCP", "Voyage embeddings", "RAG", "benchmarking"],
        files: ["retrieval/vector-search.md", "benchmarks/latency-tests.md", "llm/claude-integration.md"],
    },
];
const releases = [
    ["v1.0", "AI retrieval project"], ["v1.5", "Professional internships"],
    ["v2.0", "AI systems + semantic search"], ["v2.5", "Consulting + client work"], ["v3.0", "Still shipping…"],
];

export function Experience() {
    const [branch, setBranch] = useState<Branch>("main");
    const [selectedId, setSelectedId] = useState(commits[0].id);
    const detailsRef = useRef<HTMLElement>(null);
    const visible = commits.filter(commit => branch === "main" || commit.branches.includes(branch));
    const selected = visible.find(commit => commit.id === selectedId) ?? visible[0];
    const tags = visible.filter(commit => commit.tag).length;

    function selectBranch(next: Branch) {
        setBranch(next);
        if (next !== "main" && !commits.find(commit => commit.id === selectedId)?.branches.includes(next)) {
            setSelectedId(commits.find(commit => commit.branches.includes(next))!.id);
        }
    }

    return (
        <section aria-label="Career commit history" className="career app-page-scroll app-scroll-area @container">
            <header className="career-header">
                <div className="career-repo-line"><span className="career-eyebrow">EXPERIENCE / REPOSITORY</span></div>
                <h1>career.git <span>/ Commit History</span></h1>
                <p className="career-repo">jacob-thole/career</p>
                <p>A version-controlled view of my professional journey — each commit represents a role, project, or milestone that helped shape how I build, learn, and solve problems.</p>
            </header>
            <div className="career-branches">
                <label htmlFor="career-branch">⑂ Branch</label>
                <select id="career-branch" value={branch} onChange={event => selectBranch(event.target.value as Branch)}>
                    {branches.map(item => <option key={item} value={item}>{item} ({item === "main" ? commits.length : commits.filter(commit => commit.branches.includes(item)).length})</option>)}
                </select>
            </div>
            <div className="career-workspace">
                <aside className="career-history" aria-label="Commit history">
                    <div className="career-panel-label">HISTORY <span aria-live="polite">{visible.length} / {commits.length}</span></div>
                    <p className="career-note">Newest first. Retrieval project predates the internships; exact dates are not listed. IDs are synthetic.</p>
                    <ol className="career-log">
                        {visible.map(commit => <li key={commit.id}><button type="button" aria-pressed={selected.id === commit.id} aria-controls="career-details" onClick={() => { setSelectedId(commit.id); detailsRef.current?.focus({ preventScroll: true }); detailsRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" }); }}>
                            <span className="career-hash">{commit.id}</span><span className="career-message">{commit.message}</span>
                            <span className="career-meta">{commit.company} · {commit.dates}</span>
                            {commit.tag && <span className="career-tag">◇ {commit.tag}</span>}
                        </button></li>)}
                    </ol>
                </aside>
                <article id="career-details" ref={detailsRef} tabIndex={-1} aria-labelledby="career-role" className="career-details">
                    <div className="career-panel-label">COMMIT DETAILS <span>{selected.id}</span></div>
                    <div className="career-role-header">
                        {selected.logo && <Image src={selected.logo} alt="" width={40} height={40} unoptimized className="career-logo" />}
                        <div><p className="career-company">{selected.company}</p><h2 id="career-role">{selected.role}</h2></div>
                    </div>
                    <p className="career-meta">Jacob Thole · {selected.dates}</p>
                    <div className="career-chips">{selected.branches.map(item => <span key={item}>⑂ {item}</span>)}</div>
                    {selected.tag && <p className="career-tag">◇ {selected.tag} <span className="career-note">/ conceptual tag</span></p>}
                    <p className="career-summary">{selected.summary}</p>
                    <h3>Highlights</h3>
                    <ul className="career-highlights">{selected.highlights.map(item => <li key={item}>{item}</li>)}</ul>
                    <h3>Tools & skills</h3>
                    <div className="career-chips">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>
                    <details className="career-files" key={selected.id} open>
                        <summary>Files changed <span>{selected.files.length} illustrative paths</span></summary>
                        <ul>{selected.files.map(file => <li key={file}><span aria-hidden="true">+ </span><code>{file}</code></li>)}</ul>
                    </details>
                </article>
            </div>
            <section className="career-releases" aria-label="Conceptual releases">
                <h2>Releases <span>Conceptual milestones</span></h2>
                <ul>{releases.map(([version, label]) => <li key={version}><code>{version}</code><span>{label}</span></li>)}</ul>
            </section>
            <footer className="career-footer">
                <p role="status">{visible.length} of {commits.length} commits · {branches.length - 1} topic branches · {tags} visible tags</p>
            </footer>
        </section>
    );
}
