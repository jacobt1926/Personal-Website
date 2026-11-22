"use client";

import Draggable from "react-draggable";
import { useRef } from "react";

export type desktopIcon = {
    appName: string;
}

const icons: desktopIcon[] = [{appName: 'Projects'}, {appName: 'Experience'}, {appName: 'About'}]


export function DesktopIcon({appName}: { appName: string}) {

    const nodeRef = useRef<HTMLLIElement>(null);

    return(
        <Draggable nodeRef={nodeRef} bounds="parent">
            <li ref={nodeRef} className="desktop-icons-individual">{appName}</li>
        </Draggable>
    );
}