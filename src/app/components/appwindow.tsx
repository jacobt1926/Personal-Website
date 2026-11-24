"use client";


import Draggable from "react-draggable";
import { useRef } from "react";
import { About, Projects, Experience, Contact} from "../functions/appwindowfunctions" 
import { AppIcon } from "./appicon";

const APPS = {
    About: About,
    Experience: Experience,
    Projects: Projects,
    Contact: Contact,
};

export type AppName = keyof typeof APPS;

export function AppWindow({appName, onClose}: {appName: AppName; onClose: () => void;}) {
    const nodeRef = useRef<HTMLDivElement>(null);

    const SelectedApp = APPS[appName];

    return(
        <Draggable nodeRef={nodeRef} bounds="parent" handle=".window-titlebar">
            <div ref={nodeRef} className="app-window">
                <div className="window-titlebar">
                    <div className="window-title">
                        <AppIcon appName={appName} size={18} />
                        <span>{appName}</span>
                    </div>
                    <button
                        type="button"
                        onMouseDown={(event) => event.stopPropagation()}
                        onClick={onClose}
                        className="close-app-window"
                        aria-label={`Close ${appName} window`}>
                        X
                    </button>
                </div>
                <div className="window-content">
                    <SelectedApp />
                </div>
            </div>
        </Draggable>
    )
}


