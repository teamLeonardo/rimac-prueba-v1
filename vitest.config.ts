import { defineConfig as defineVitestConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineVitestConfig({
    test: {
        reporters: 'verbose',
        globals: true,
        setupFiles: './__test__/setup.ts',
        css: true,
    },
    ...viteConfig
})
