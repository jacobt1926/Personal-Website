"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import type { AppName } from "./appwindow";
import { AppIcon } from "./appicon";

export function TaskbarButton({
    appName,
    onOpen,
}: {
    appName: AppName;
    onOpen: (appName: AppName) => void;
}) {
    const nodeRef = useRef<HTMLLIElement>(null);

    return (
        <Draggable nodeRef={nodeRef} bounds="parent">
            <li ref={nodeRef} className="taskbar-app-buttons">
                <button
                    type="button"
                    className="taskbar-app-button"
                    title={appName}
                    aria-label={`Open ${appName}`}
                    onClick={() => onOpen(appName)}
                >
                    <AppIcon appName={appName} size={28} />
                </button>
            </li>
        </Draggable>
    );
}
