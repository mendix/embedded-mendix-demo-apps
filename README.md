# Embedded Mendix Repro

This repo demonstrates Mendix running in embedded mode inside three self-contained host apps:

- `demos/react-host/`
- `demos/vue-host/`
- `demos/vanilla-js-host/`

If you are looking for a step-by-step guide to building the embedding component itself, see:

- `docs/create-embedded-mendix-component.md`

It also includes the Mendix project used by those hosts:

- `mendix-project/`

> Make sure to use a Mendix version that supports the embedded client

## Layout

```text
embedded-mendix-demo-app/
|- mendix-project/
|  `- EmbeddedTestApp.mpr
`- demos/
   |- react-host/
   |- vue-host/
   `- vanilla-js-host/
```

## Ports

- Mendix runtime: `http://localhost:8081`
- Embedded bundle: `http://localhost:8081/dist/embedded-index.js`
- Host app: `http://localhost:3000`

All host demos use port `3000`, so run one host at a time.

## Run

1. Start the Mendix project so it serves the embedded runtime on `8081`.
2. Open one demo folder under `demos/`.
3. Install dependencies:

```bash
npm install
```

4. Start the host app:

```bash
npm start
```

5. Open `http://localhost:3000`.

## How embedding works

Each host app:

1. loads `http://localhost:8081/dist/embedded-index.js` with a dynamic import
2. passes a DOM node to Mendix
3. calls `render(...)` with `remoteUrl` and `minHeight`

The host owns the surrounding page. Mendix owns the embedded application.

Each demo folder has its own README with project-specific run instructions and embedding details.
