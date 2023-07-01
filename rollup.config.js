import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "esm"
    },
    plugins: [typescript({
        tsconfig: "./tsconfig.json"
    }), resolve(), terser()],
};