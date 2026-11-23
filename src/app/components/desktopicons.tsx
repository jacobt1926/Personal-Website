"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import type { AppName } from "./appwindow";
import { AppIcon } from "./appicon";

export type DesktopApp = {
    appName: AppName;
}

export function DesktopIcon({appName, onOpen,}: {appName: AppName; onOpen: () => void;}) {

    const nodeRef = useRef<HTMLLIElement>(null);

    return(
        <Draggable nodeRef={nodeRef} bounds="parent">
            <li ref={nodeRef} className="desktop-icons-individual">
                <button type="button" className="desktop-icon-button" onDoubleClick={onOpen} aria-label={`Open ${appName}`}>
                    <AppIcon appName={appName} size={44} />
                    <span>{appName}</span>
                </button>
            </li>
        </Draggable>
    );
}
