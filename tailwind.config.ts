import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        verde: '#0E9F6E',
        azul: '#0F4C81',
        neutro: {
          900: '#111827',
          500: '#6B7280',
          100: '#F3F4F6'
        }
      }
    }
  },
  plugins: []
}
export default config
