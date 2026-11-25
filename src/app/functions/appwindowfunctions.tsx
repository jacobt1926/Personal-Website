import Image from "next/image";
import emailIcon from "../../images/email icon.jpg";
import githubIcon from "../../images/github icon.png";
import instagramIcon from "../../images/instagram icon.jpg";
import linkedinIcon from "../../images/linkedin icon.jpg";
import Link from "next/link";

export function Projects() {
    return(
        <div>
            <p>see my GitHub:</p>
            <Link href={'https://github.com/jacobt1926'}>GitHub</Link>
        </div>
        
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
