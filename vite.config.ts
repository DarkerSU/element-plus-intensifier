// import path from 'path'
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx'
// import ViteDts from 'vite-plugin-dts'
// import ViteStyleInject from 'vite-plugin-style-inject'

export default defineConfig({
    build: {
        lib: {
            entry: ['./lib/index.ts'],
            name: 'element-plus-intensifier',
            formats: ['es'],
            // "commonjs" | "esm" | "module" | "systemjs"
            fileName: (format, entryName) => `${entryName}.js`,
        },
        sourcemap:true,
        rollupOptions: {
            external: ['vue', 'element-plus'],
            output: {
                globals: {
                    vue: 'Vue',
                    'element-plus': 'element-plus',
                },
            },
        },
    },
    plugins: [Vue(), VueJsx(),]
})