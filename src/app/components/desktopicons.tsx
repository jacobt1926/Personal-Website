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
    const moved = useRef(false);

    return(
        <Draggable
            nodeRef={nodeRef}
            bounds="parent"
            onStart={() => { moved.current = false; }}
            onDrag={(_, data) => {
                if (data.deltaX !== 0 || data.deltaY !== 0) moved.current = true;
            }}
            onStop={(event) => {
                if (event.type === "touchend" && !moved.current) onOpen();
            }}
        >
            <li ref={nodeRef} className="desktop-icons-individual">
                <button
                    type="button"
                    className="desktop-icon-button"
                    onClick={(event) => {
                        if (event.detail === 0) onOpen();
                    }}
                    onDoubleClick={() => {
                        if (!moved.current) onOpen();
                    }}
                    aria-label={`Open ${appName}`}
                >
                    <AppIcon appName={appName} size={44} />
                    <span>{appName}</span>
                </button>
            </li>
        </Draggable>
    );
}
