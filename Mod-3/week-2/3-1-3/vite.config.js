import { defineConfig } from 'vitest/config'
import 'whatwg-fetch'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
})