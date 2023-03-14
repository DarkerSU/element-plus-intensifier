import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VuePluginJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
    plugins: [Vue(), VuePluginJsx()]
})