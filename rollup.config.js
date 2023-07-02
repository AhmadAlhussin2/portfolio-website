import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "esm"
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        resolve(),
        terser(),
        copy({
            targets: [
                { src: './src/index.html', dest: 'dist' },
                { src: './src/comic.html', dest: 'dist' },
                { src: './src/index.css', dest: 'dist' },
                { src: './static', dest: 'dist' },
            ]
        }),
    ],
};