"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import type { AppName } from "./appwindow";

export type DesktopApp = {
    appName: AppName;
}

export function DesktopIcon({appName, onOpen,}: {appName: string; onOpen: () => void;}) {

    const nodeRef = useRef<HTMLLIElement>(null);

    return(
        <Draggable nodeRef={nodeRef} bounds="parent">
            <li ref={nodeRef} className="desktop-icons-individual">
                <button type="button" onDoubleClick={onOpen}>
                    {appName}
                </button>
            </li>
        </Draggable>
    );
}
