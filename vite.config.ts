// import path from 'path'
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VuePluginJsx from '@vitejs/plugin-vue-jsx'
import VitePluginStyleInject from 'vite-plugin-style-inject'
export default defineConfig({
    build: {
        lib: {
            entry: ['./lib/index.ts'],
            name: 'element-plus-intensifier',
            formats: ['es'],
            // "commonjs" | "esm" | "module" | "systemjs"
            fileName: (format, entryName) => `${entryName}.js`,
        },
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
    plugins: [Vue(), VuePluginJsx(), VitePluginStyleInject()]
})