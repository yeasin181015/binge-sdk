import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
import css from "rollup-plugin-css-only";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.cjs.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "esm" },
  ],
  plugins: [typescript(), image(), css(), svgr()],
  external: ["react", "react-dom"],
};
