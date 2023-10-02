import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'tecnico': "url('/areas/tecnico.jpg')",
          'ac2': "url('/areas/ac-2.jpg')",
      },
      colors: {
        "links": "rgb(var(--links))",
        "g1": "rgb(var(--g1))",
        "g2": "rgb(var(--g2))",
        "g3": "rgb(var(--g3))",
        "g4": "rgb(var(--g4))",
        "w": "rgb(var(--white))",
        "b": "rgb(var(--blue))",
      },
      screens: {
        sm: '10px',
        md: '640px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
export default config