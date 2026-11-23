import { TaskbarButton } from "./taskbarbutton";
import type { AppName } from "./appwindow";

const apps: AppName[] = ["Projects", "Experience", "About"];

export function Footer({ onOpen }: { onOpen: (appName: AppName) => void }) {
    return (
        <footer className="footer">
            <ul className="taskbar" style={{ position: "relative" }}>
                {apps.map((appName) => (
                    <TaskbarButton
                        key={appName}
                        appName={appName}
                        onOpen={onOpen}
                    />
                ))}
            </ul>
        </footer>
    );
}
