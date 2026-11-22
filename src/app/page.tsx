"use client";

import { Footer } from "./components/footer";
import { DesktopIcon } from "./components/desktopicons";
import type { desktopIcon } from "./components/desktopicons";
export default function Home() {

  const icons: desktopIcon[] = [{appName: 'Projects'}, {appName: 'Experience'}, {appName: 'About'}]

  return(
    <main>
      <div>
        <ul className="desktop">
          {icons.map((icon, index) => (
            <DesktopIcon key={icon.appName} appName={icon.appName} />
          ))}
        </ul>
      </div>
  
      <Footer />
    </main>
  );
}