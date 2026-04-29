# Create an Embedded Mendix Component

This document explains how to create a host-side component that embeds the Mendix client.

Working demo implementations can be found at:

- https://code.siemens.com/willem-tjeerd.jongeneel/embedded-mendix-demo-apps

The same integration pattern works in React, Vue, plain JavaScript, or any other frontend setup that can:

1. create a DOM element
2. run a dynamic import
3. clean up when the host component is removed

## What the host component does

The host component is responsible for:

1. choosing the Mendix runtime URL
2. loading the embedded Mendix bundle with a dynamic import
3. creating a DOM element that Mendix can render into
4. calling `render(...)` on the embedded bundle
5. cleaning up with the returned unmount function
6. optionally showing loading and error state in the host UI

The host owns the surrounding page. Mendix owns the embedded application.

## What you need from Mendix

Your Mendix runtime must expose:

- a base runtime URL
- an embedded entry bundle at `/dist/embedded-index.js`

This is done by enabling the "create embedded entrypoint" setting in your app's runtime settings.

Examples:

- `https://your-mendix-runtime.example.com`
- `http://localhost:8081`

That means the host component will try to load:

```text
<runtime-url>/dist/embedded-index.js
```

Because of this, it is important to configure the Mendix runtime to allow requests from the origin where the host application runs.

## Step 1: Create a host container element

Create an element in your host UI where Mendix will be mounted.

Examples:

```html
<div id="embedded-mendix-host"></div>
```

or in a framework component:

```tsx
<div ref={hostRef} />
```

The only hard requirement is that you end up with a real DOM node to pass into Mendix.

## Step 2: Resolve the runtime URL

Use a default runtime URL and optionally allow overriding it from configuration.

Example:

```ts
const DEFAULT_REMOTE_URL = "https://your-mendix-runtime.example.com";

const configuredRemoteUrl = window.__MENDIX_REMOTE_URL__ ?? DEFAULT_REMOTE_URL;
const remoteUrl = configuredRemoteUrl.replace(/\/+$/, "");
```

`window.__MENDIX_REMOTE_URL__` is an optional global value that can be set before the host component mounts.

Example:

```html
<script>
    window.__MENDIX_REMOTE_URL__ = "https://test-runtime.example.com";
</script>
```

This lets the same host component point to different Mendix runtimes without changing source code.

Why this matters:

- the default gives the component a predictable target
- the override makes the component reusable across environments
- trimming trailing slashes avoids malformed URLs like `//dist/embedded-index.js`

## Step 3: Define the embedded module shape

The embedded bundle exposes a `render(...)` function.

Example TypeScript type:

```ts
type EmbeddedModule = {
    render: (rootNode: Element | null, options: { remoteUrl: string; minHeight: string }) => Promise<() => void>;
};
```

This keeps the host code explicit about what it expects from the Mendix bundle.

## Step 4: Load the embedded bundle dynamically

Load the bundle from the running Mendix runtime, not from your host app bundle.

Example:

```ts
const embeddedModule = (await import(`${remoteUrl}/dist/embedded-index.js`)) as EmbeddedModule;
```

This is the core integration point.

The host app does not compile or package Mendix itself. It loads Mendix at runtime from the Mendix application.

### Vite note

In Vite-based code, the import is usually written like this:

```ts
await import(/* @vite-ignore */ `${remoteUrl}/dist/embedded-index.js`)
```

That prevents Vite from trying to statically analyze the runtime URL.

## Step 5: Call `render(...)`

Once the bundle is loaded and you have a container element, mount Mendix into it.

Example:

```ts
const unmount = await embeddedModule.render(container, {
    remoteUrl: `${remoteUrl}/`,
    minHeight: "620px",
});
```

The important options are:

- `remoteUrl`: base URL of the Mendix runtime, with a trailing slash
- `minHeight`: minimum size for the embedded app region in the host layout

## Step 6: Store the returned unmount function

`render(...)` returns a function that should be called when the host component is removed or the page unloads.

Example:

```ts
let unmount = () => undefined;

unmount = await embeddedModule.render(container, {
    remoteUrl: `${remoteUrl}/`,
    minHeight: "620px",
});
```

Then clean up later:

```ts
unmount();
```

## Step 7: Handle errors in the host component

The most common integration failure is that the Mendix runtime is not serving `embedded-index.js`.

Wrap the load and render steps in a `try/catch` block.

Example:

```ts
try {
    const embeddedModule = (await import(`${remoteUrl}/dist/embedded-index.js`)) as EmbeddedModule;

    unmount = await embeddedModule.render(container, {
        remoteUrl: `${remoteUrl}/`,
        minHeight: "620px",
    });
} catch (error) {
    console.error(error);
    showError(`Unable to load the embedded Mendix bundle from ${remoteUrl}/dist/embedded-index.js.`);
}
```

At minimum, the host should:

- log the technical error
- show a visible message in the host UI
- keep the surrounding page intact

## Step 8: Mount at the right lifecycle moment

Call the embedding logic after the container element exists.

Typical timing:

- React: inside `useEffect(...)`
- Vue: inside `onMounted(...)`
- plain JavaScript: after writing the DOM and locating the container with `getElementById(...)`

## Step 9: Clean up at the right lifecycle moment

Call the unmount function when the host component is destroyed.

Typical cleanup:

- React: return cleanup from `useEffect(...)`
- Vue: use `onBeforeUnmount(...)`
- plain JavaScript: use `beforeunload` or your own teardown path

## Minimal framework-agnostic example

```ts
const DEFAULT_REMOTE_URL = "https://your-mendix-runtime.example.com";

type EmbeddedModule = {
    render: (rootNode: Element | null, options: { remoteUrl: string; minHeight: string }) => Promise<() => void>;
};

export async function mountEmbeddedMendix(container: Element | null) {
    const configuredRemoteUrl = window.__MENDIX_REMOTE_URL__ ?? DEFAULT_REMOTE_URL;
    const remoteUrl = configuredRemoteUrl.replace(/\/+$/, "");

    const embeddedModule = (await import(`${remoteUrl}/dist/embedded-index.js`)) as EmbeddedModule;

    return embeddedModule.render(container, {
        remoteUrl: `${remoteUrl}/`,
        minHeight: "620px",
    });
}
```

Usage:

```ts
const container = document.getElementById("embedded-mendix-host");
const unmount = await mountEmbeddedMendix(container);
```

## Framework mapping

The framework changes, but the integration steps stay the same:

- React uses `useRef` and `useEffect`
- Vue uses `ref`, `onMounted`, and `onBeforeUnmount`
- vanilla JavaScript uses plain DOM APIs and a manual cleanup path

## Checklist

Use this checklist when creating a new embedded Mendix host component:

1. Create a real DOM container for Mendix.
2. Pick a runtime URL for the Mendix application.
3. Dynamically import `embedded-index.js`.
4. Call `render(container, { remoteUrl, minHeight })`.
5. Store the returned unmount function.
6. Handle load errors visibly.
7. Clean up on unmount.
