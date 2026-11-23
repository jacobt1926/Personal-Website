import type { AppName } from "./appwindow";

const ICON_COLORS: Record<AppName, string> = {
    Projects: "#3b82f6",
    Experience: "#8b5cf6",
    About: "#14b8a6",
};

export function AppIcon({
    appName,
    size = 40,
}: {
    appName: AppName;
    size?: number;
}) {
    return (
        <svg
            className="app-icon"
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            role="img"
            aria-hidden="true"
            focusable="false"
        >
            <rect x="2" y="2" width="44" height="44" rx="13" fill={ICON_COLORS[appName]} />

            {appName === "Projects" && (
                <path
                    d="M11 17.5a2.5 2.5 0 0 1 2.5-2.5h7l3 3h11A2.5 2.5 0 0 1 37 20.5v12a2.5 2.5 0 0 1-2.5 2.5h-21a2.5 2.5 0 0 1-2.5-2.5v-15Z"
                    fill="white"
                    fillOpacity=".96"
                />
            )}

            {appName === "Experience" && (
                <>
                    <rect x="11" y="18" width="26" height="19" rx="3" fill="white" fillOpacity=".96" />
                    <path d="M19 18v-2.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V18" stroke="white" strokeWidth="2.5" />
                    <path d="M11 25h26M21 25v3h6v-3" stroke={ICON_COLORS.Experience} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </>
            )}

            {appName === "About" && (
                <>
                    <circle cx="24" cy="19" r="7" fill="white" fillOpacity=".96" />
                    <path d="M11.5 36c1-7 5.5-10.5 12.5-10.5S35.5 29 36.5 36" fill="white" fillOpacity=".96" />
                </>
            )}
        </svg>
    );
}
