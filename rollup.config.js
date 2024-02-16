import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

import pkg from "./package.json";

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
];

if (process.env.BUILD === "production") {
  plugins.push(
    uglify({
      nameCache: {},
    })
  );
}

export default [
  {
    input: "src/index.ts",
    dest: "index.js",
    external: Object.keys(pkg.peerDependencies || {}),
    plugins,
    output: [{ file: pkg.main, format: "cjs" }],
  },
];
