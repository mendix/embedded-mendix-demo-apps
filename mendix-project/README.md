# Mendix Project

This folder contains the Mendix project used by all host demos in this repo.

## Source

Copied from:

```text
~/appdev/automated/frontend/client-core/embedded-client/project
```

## Expected local runtime

The host demos expect this project to expose:

- runtime base URL: `http://localhost:8081/`
- embedded bundle: `http://localhost:8081/dist/embedded-index.js`

If you run the runtime on a different host, port, or path, update the host demo configuration.

## Used by

- `../demos/react-host/`
- `../demos/vue-host/`
- `../demos/vanilla-js-host/`

## Notes

- this repo intentionally avoids nginx and HTTPS
- keep this project reusable across all host demos
