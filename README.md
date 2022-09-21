# preact-ssr-router-bug

This is an example of using Preact SSR with React Router and Suspense.

This did not work automatically, I believe the issue is there are two different
`useContext` functions:

- `node_modules/preact/hooks/dist/hooks.js`
- `node_modules/preact/hooks/dist/hooks.mjs`

Because this is a Node ESM project, the hooks.mjs file is the one that connects to the
actual version of Preact that is in use. The `hooks.js` file connects to an inactive
CJS version of Preact.

I patched the react-router and react-router-dom libraries to provide ESM versions using
the package exports option. Then, react-router properly uses the useContext function from hooks.mjs.

Test it out by running `node server.js`, you should see the result:

```
Load home
<div>Home</div>
```
