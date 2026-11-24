"use client";

import { Footer } from "./components/footer";
import { DesktopIcon } from "./components/desktopicons";
import type { DesktopApp } from "./components/desktopicons";
import { AppWindow } from "./components/appwindow";
import { useState } from "react";
import type { AppName } from "./components/appwindow";


export default function Home() {
  const [openApps, setOpenApps] = useState<AppName[]>([]);

  function openApp(appName: AppName) {
    setOpenApps((current) =>
      current.includes(appName) ? current : [...current, appName],
    );
  }

  const appNames: DesktopApp[] = [
    { appName: "Projects" },
    { appName: "Experience" },
    { appName: "About" },
    { appName: "Contact"},
  ];

  

  return(
    <main className="desktop-shell">
      <div className="desktop">
        <ul className="desktop-icon-list">
          {appNames.map((icon) => (
            <DesktopIcon
              key={icon.appName}
              appName={icon.appName}
              onOpen={() => openApp(icon.appName)}
            />
          ))}
        </ul>
        {openApps.map((appName) => (
          <AppWindow
            key={appName}
            appName={appName}
            onClose={() =>
              setOpenApps((current) => current.filter((app) => app !== appName))
            }
          />
        ))}
      
      </div>
      <Footer onOpen={openApp} />
    </main>
  );
}
