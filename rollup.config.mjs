import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = ['.js', '.ts'];
/** @type {imprt('rollup').RollupOptions} */
export default {
  input: "build/index.ts",
  output: [
    {
      format: /** @type {const} */ ('cjs'),
      entryFileNames: '[name][assetExtname].js',
      dir: 'dist/cjs',
      preserveModules: true,
    },
    {
      format: /** @type {const} */ ('es'),
      entryFileNames: '[name][assetExtname].mjs',
      dir: 'dist/esm',
      preserveModules: true,
    }
  ],
  plugins: [
    nodeResolve({extensions}),
    commonjs(),
    babel({
      extensions,
      rootMode: 'upward',
      include: ["src/**/*", "build/**/*"],
      babelHelpers: "bundled"
    })
  ]
}