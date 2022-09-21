import { h } from "preact";
import { lazy } from "preact/compat";
import prepass from "preact-ssr-prepass";
import renderToString from "preact-render-to-string";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("./components/home.js"));
const About = lazy(() => import("./components/about.js"));

const vnode = h(
  StaticRouter,
  {
    location: "/home",
  },
  h(
    Routes,
    undefined,
    h(Route, { path: "/home", element: h(Home) }),
    h(Route, { path: "/test", element: h(About) })
  )
);

await prepass(vnode);

const out = renderToString(vnode);

console.log(out);
