<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const DEFAULT_REMOTE_URL = "http://localhost:8081";

type EmbeddedModule = {
    render: (rootNode: Element | null, options: { remoteUrl: string; minHeight: string }) => Promise<() => void>;
};

const pipelineSteps = ["Intake captured", "Eligibility scored", "Manual review embedded"];

const briefingCards = [
    { label: "Partner submissions", value: "54", detail: "11 require intervention" },
    { label: "Straight-through rate", value: "73%", detail: "+6 points this quarter" },
    { label: "SLA health", value: "98.2%", detail: "Within partner promise" },
];

const status = ref("Loading embedded Mendix app...");
const error = ref<string | null>(null);
const embeddedHost = ref<HTMLDivElement | null>(null);
const embeddedModule = ref<EmbeddedModule | null>(null);
let unmountEmbeddedApp: () => void = () => undefined;

onMounted(async () => {
    const configuredRemoteUrl = (window as Window & { __MENDIX_REMOTE_URL__?: string }).__MENDIX_REMOTE_URL__;
    const remoteUrl = (configuredRemoteUrl ?? DEFAULT_REMOTE_URL).replace(/\/+$/, "");

    try {
        if (!embeddedModule.value) {
            embeddedModule.value = (await import(/* @vite-ignore */ `${remoteUrl}/dist/embedded-index.js`)) as EmbeddedModule;
        }

        document.body.setAttribute("data-demo-theme", "partner-workspace");

        unmountEmbeddedApp = await embeddedModule.value.render(embeddedHost.value, {
            remoteUrl: `${remoteUrl}/`,
            minHeight: "640px",
            parameters: {
                Name: "Vue"
            }
        });

        status.value = "Embedded Mendix app connected";
        error.value = null;
    } catch (mountError) {
        console.error(mountError);
        status.value = "Waiting for embedded Mendix runtime";
        error.value = `Unable to load the embedded Mendix bundle from ${remoteUrl}/dist/embedded-index.js.`;
    }
});

onBeforeUnmount(() => {
    unmountEmbeddedApp();
});
</script>

<template>
    <div class="workspace-shell">
        <header class="topbar">
            <div>
                <p class="eyebrow">Harbor Partner Platform</p>
                <h1>Distribution Workspace</h1>
                <p class="lede">
                    A Vue-based host shell showing how Mendix can power one embedded operational journey inside a broader partner experience.
                </p>
            </div>
            <div class="runtime-chip">
                <span class="runtime-pulse"></span>
                <div>
                    <strong>{{ status }}</strong>
                    <p>Mendix runtime expected on `http://localhost:8081`</p>
                </div>
            </div>
        </header>

        <section class="hero-grid">
            <aside class="signal-rail">
                <div class="signal-card">
                    <p class="eyebrow">Why this matters</p>
                    <h2>One portal, multiple delivery models</h2>
                    <p>
                        The surrounding shell stays in Vue while Mendix delivers the embedded workflow where speed and iteration matter most.
                    </p>
                </div>

                <div class="signal-card">
                    <p class="eyebrow">Journey stages</p>
                    <ul class="pipeline-list">
                        <li v-for="step in pipelineSteps" :key="step">{{ step }}</li>
                    </ul>
                </div>
            </aside>

            <main class="main-column">
                <section class="briefing-grid" aria-label="Partner operations metrics">
                    <article v-for="card in briefingCards" :key="card.label" class="briefing-card">
                        <p>{{ card.label }}</p>
                        <strong>{{ card.value }}</strong>
                        <span>{{ card.detail }}</span>
                    </article>
                </section>

                <section class="embed-card">
                    <div class="embed-header">
                        <div>
                            <p class="eyebrow">Embedded workspace</p>
                            <h2>Mendix submission review flow</h2>
                        </div>
                        <span class="badge rounded-pill text-bg-light">Host on :3000</span>
                    </div>

                    <p class="embed-copy">
                        This area is where the Mendix experience appears inside the Vue portal shell. It is the part of the demo that should draw attention during a customer conversation.
                    </p>

                    <div v-if="error" class="alert alert-danger mb-3" role="alert">{{ error }}</div>

                    <div class="embedded-frame">
                        <div ref="embeddedHost" class="embedded-surface" data-testid="embedded-mendix-host"></div>
                    </div>
                </section>
            </main>
        </section>
    </div>
</template>
