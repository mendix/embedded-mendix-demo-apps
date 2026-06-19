import { useEffect, useRef, useState } from "react";

const DEFAULT_REMOTE_URL = "http://localhost:8081";

type EmbeddedModule = {
    render: (rootNode: Element | null, options: { remoteUrl: string; minHeight: string, parameters: Record<string, any> }) => Promise<() => void>;
};

const metrics = [
    { label: "Claims in queue", value: "148", change: "+12 today" },
    { label: "Automation rate", value: "86%", change: "+4.1% week-on-week" },
    { label: "Avg. handling time", value: "4m 12s", change: "-38s vs target" },
];

const activity = [
    "Regional claims import completed successfully.",
    "Underwriting portal synced customer documents 2 minutes ago.",
    "Embedded Mendix workspace ready for policy review.",
];

export default function App() {
    const hostRef = useRef<HTMLDivElement | null>(null);
    const moduleRef = useRef<EmbeddedModule | null>(null);
    const unmountRef = useRef<() => void>(() => undefined);
    const [status, setStatus] = useState("Loading embedded Mendix app...");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isActive = true;

        const mountEmbeddedApp = async () => {
            const configuredRemoteUrl =
                (window as Window & { __MENDIX_REMOTE_URL__?: string }).__MENDIX_REMOTE_URL__ ?? DEFAULT_REMOTE_URL;
            const remoteUrl = configuredRemoteUrl.replace(/\/+$/, "");

            try {
                if (!moduleRef.current) {
                    moduleRef.current = (await import(`${remoteUrl}/dist/embedded-index.js`)) as EmbeddedModule;
                }

                if (!isActive) {
                    return;
                }

                document.body.setAttribute("data-demo-theme", "executive");

                unmountRef.current = await moduleRef.current.render(hostRef.current, {
                    remoteUrl: `${remoteUrl}/`,
                    minHeight: "620px",
                    parameters: {
                        Name: "React"
                    }
                });

                if (isActive) {
                    setStatus("Embedded Mendix app connected");
                    setError(null);
                }
            } catch (mountError) {
                console.error(mountError);
                if (isActive) {
                    setError(
                        `Unable to load the embedded Mendix bundle from ${remoteUrl}/dist/embedded-index.js.`
                    );
                    setStatus("Waiting for embedded Mendix runtime");
                }
            }
        };

        void mountEmbeddedApp();

        return () => {
            isActive = false;
            unmountRef.current();
        };
    }, []);

    return (
        <div className="page-shell">
            <aside className="sidebar">
                <div>
                    <p className="eyebrow">Northstar Mutual</p>
                    <h1>Operations Command</h1>
                    <p className="muted">A lightweight host shell around an embedded Mendix workspace.</p>
                </div>
                <nav className="nav-card">
                    <span className="nav-label nav-active">Claims workspace</span>
                    <span className="nav-label">Service requests</span>
                    <span className="nav-label">Broker onboarding</span>
                </nav>
                <section className="activity-card">
                    <h2>Live activity</h2>
                    {activity.map(item => (
                        <p key={item}>{item}</p>
                    ))}
                </section>
            </aside>

            <main className="content">
                <header className="hero-card">
                    <div>
                        <p className="eyebrow">Embedded Experience Demo</p>
                        <h2>Claims review dashboard</h2>
                        <p className="hero-copy lead mb-0">
                            This React app provides a realistic dashboard frame while the actual workflow is rendered by Mendix in embedded mode.
                        </p>
                    </div>
                    <div className="status-panel">
                        <span className="status-dot" />
                        <div>
                            <strong>{status}</strong>
                            <p className="small mb-0">Expected remote bundle: `{DEFAULT_REMOTE_URL}/dist/embedded-index.js`</p>
                        </div>
                    </div>
                </header>

                <section className="metrics-grid" aria-label="Operational metrics">
                    {metrics.map(metric => (
                        <article className="metric-card" key={metric.label}>
                            <p>{metric.label}</p>
                            <strong>{metric.value}</strong>
                            <span>{metric.change}</span>
                        </article>
                    ))}
                </section>

                <section className="workspace-card">
                    <div className="workspace-header">
                        <div>
                            <p className="eyebrow">Embedded app region</p>
                            <h3>Mendix workspace</h3>
                        </div>
                        <span className="badge rounded-pill text-bg-primary">Shadow DOM ready</span>
                    </div>

                    {error ? <div className="error-banner">{error}</div> : null}

                    <div className="embedded-stage">
                        <div ref={hostRef} className="embedded-host" data-testid="embedded-mendix-host" />
                    </div>
                </section>
            </main>
        </div>
    );
}
