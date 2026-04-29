# Vue Host

Self-contained Vue host app for loading the Mendix embedded runtime.

## Runtime

- Mendix runtime: `http://localhost:8081`
- Embedded bundle: `http://localhost:8081/dist/embedded-index.js`
- Host app: `http://localhost:3000`

The host uses a fixed `3000` port because the Mendix project is configured for that origin.

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

1. resolves the runtime URL on component mount
2. dynamically imports `embedded-index.js`
3. passes a Vue `ref` DOM node to Mendix
4. calls `render(container, { remoteUrl, minHeight })`
5. cleans up with the returned unmount function

The Vue app owns the surrounding page. Mendix owns the embedded application.

## Override

You can override the runtime URL before startup with:

```js
window.__MENDIX_REMOTE_URL__ = "http://localhost:8081";
```
