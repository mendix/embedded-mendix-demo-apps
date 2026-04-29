This repository demonstrates Mendix running in embedded mode inside other web applications.

Repository shape:
- `./mendix-project` contains the Mendix project used by the host demos
- `./demos/react-host` is a React host app
- `./demos/vue-host` is a Vue host app
- `./demos/vanilla-js-host` is a vanilla JavaScript host app

Current state:
- the Mendix project has been copied from `~/appdev/automated/frontend/client-core/embedded-client/project`
- all three host demos are implemented as self-contained projects
- the repository documentation should stay concise and focused on the embedded Mendix setup

Guidance for changes:
- keep the focus on demonstrating embedded Mendix
- keep each host app self-contained
- avoid unnecessary infrastructure complexity
- keep documentation short, technical, and oriented around repo structure and run instructions
- keep non-Mendix host logic minimal
