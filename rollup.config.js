import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

var requireJSON = require("require-strip-json-comments");
const packageJson = require("./package.json");
const tsconfigJson = requireJSON("./tsconfig.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript({
        ...tsconfigJson,
        compilerOptions: {
          ...tsconfigJson.compilerOptions,
        //   declarationDir: "./",
        },
        // include: ["**/*"],
        // exclude: ["lib", "node_modules"],
      }),
      terser(),
    ],
  },
];
