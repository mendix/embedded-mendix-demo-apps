# Vanilla JS Host

Self-contained vanilla JavaScript host app for loading the Mendix embedded runtime.

## Runtime

- Mendix runtime: `http://localhost:8081`
- Embedded bundle: `http://localhost:8081/dist/embedded-index.js`
- Host app: `http://localhost:3000`

## Run

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Embedding logic

The host:

1. renders the page with plain DOM APIs
2. dynamically imports `embedded-index.js`
3. passes a DOM node to Mendix
4. calls `render(container, { remoteUrl, minHeight })`
5. stores the returned unmount function for cleanup

The host page owns the surrounding page. Mendix owns the embedded application.

## Override

You can override the runtime URL before startup with:

```js
window.__MENDIX_REMOTE_URL__ = "http://localhost:8081";
```
