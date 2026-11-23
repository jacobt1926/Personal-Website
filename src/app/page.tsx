"use client";

import { Footer } from "./components/footer";
import { DesktopIcon } from "./components/desktopicons";
import type { DesktopApp } from "./components/desktopicons";
import { AppWindow } from "./components/appwindow";
import { useState } from "react";
import type { AppName } from "./components/appwindow";


export default function Home() {
  const [openApps, setOpenApps] = useState<AppName[]>([]);

  const appNames: DesktopApp[] = [
    { appName: "Projects" },
    { appName: "Experience" },
    { appName: "About" },
  ];

  

  return(
    <main>
      <div className="desktop">
        <ul className="desktop-icon-list">
          {appNames.map((icon) => (
            <DesktopIcon
              key={icon.appName}
              appName={icon.appName}
              onOpen={() => setOpenApps((current) => current.includes(icon.appName) ? current : [...current, icon.appName])}
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
      <Footer />
    </main>
  );
}
