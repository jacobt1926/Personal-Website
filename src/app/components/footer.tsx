export function Footer() {

    const apps: string[] = ['Menu', 'Projects', 'Experience', 'About'];

    return (
        <footer className="footer">
            <ul className="taskbar">
                {apps.map((app, index) => (
                    <li key={index} className="taskbar-app-buttons">
                        <button type="button">
                            {app}
                        </button>
                    </li>
                ))}
            </ul>
            
        </footer>
    )
}