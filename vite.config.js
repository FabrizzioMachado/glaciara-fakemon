//importin vite, vue (vite plugin) and babel
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { plugins } from "./babel.config";

//exporting vite config with these plugins and base called glaciara-fakemon to be used in the index.html
export default defineConfig({
    base: "/glaciara-fakemon",
    plugins: [vue(), ...plugins],
})