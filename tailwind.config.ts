import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./markdown/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'1': 'var(--gray-1)',
  				'2': 'var(--gray-2)',
  				'3': 'var(--gray-3)',
  				'4': 'var(--gray-4)',
  				'5': 'var(--gray-5)',
  				'6': 'var(--gray-6)',
  				'7': 'var(--gray-7)',
  				'8': 'var(--gray-8)',
  				'9': 'var(--gray-9)',
  				'10': 'var(--gray-10)',
  				'11': 'var(--gray-11)',
  				'12': 'var(--gray-12)',
  				a1: 'var(--gray-a1)',
  				a2: 'var(--gray-a2)',
  				a3: 'var(--gray-a3)',
  				a4: 'var(--gray-a4)',
  				a5: 'var(--gray-a5)',
  				a6: 'var(--gray-a6)',
  				a7: 'var(--gray-a7)',
  				a8: 'var(--gray-a8)',
  				a9: 'var(--gray-a9)',
  				a10: 'var(--gray-a10)',
  				a11: 'var(--gray-a11)',
  				a12: 'var(--gray-a12)'
  			},
  			black: {
  				a1: 'var(--black-a1)',
  				a2: 'var(--black-a2)',
  				a3: 'var(--black-a3)',
  				a4: 'var(--black-a4)',
  				a5: 'var(--black-a5)',
  				a6: 'var(--black-a6)',
  				a7: 'var(--black-a7)',
  				a8: 'var(--black-a8)',
  				a9: 'var(--black-a9)',
  				a10: 'var(--black-a10)',
  				a11: 'var(--black-a11)',
  				a12: 'var(--black-a12)'
  			},
  			white: {
  				a1: 'var(--white-a1)',
  				a2: 'var(--white-a2)',
  				a3: 'var(--white-a3)',
  				a4: 'var(--white-a4)',
  				a5: 'var(--white-a5)',
  				a6: 'var(--white-a6)',
  				a7: 'var(--white-a7)',
  				a8: 'var(--white-a8)',
  				a9: 'var(--white-a9)',
  				a10: 'var(--white-a10)',
  				a11: 'var(--white-a11)',
  				a12: 'var(--white-a12)'
  			},
  			pink: {
  				'1': 'var(--pink-1)',
  				'2': 'var(--pink-2)',
  				'3': 'var(--pink-3)',
  				'4': 'var(--pink-4)',
  				'5': 'var(--pink-5)',
  				'6': 'var(--pink-6)',
  				'7': 'var(--pink-7)',
  				'8': 'var(--pink-8)',
  				'9': 'var(--pink-9)',
  				'10': 'var(--pink-10)',
  				'11': 'var(--pink-11)',
  				'12': 'var(--pink-12)',
  				a1: 'var(--pink-a1)',
  				a2: 'var(--pink-a2)',
  				a3: 'var(--pink-a3)',
  				a4: 'var(--pink-a4)',
  				a5: 'var(--pink-a5)',
  				a6: 'var(--pink-a6)',
  				a7: 'var(--pink-a7)',
  				a8: 'var(--pink-a8)',
  				a9: 'var(--pink-a9)',
  				a10: 'var(--pink-a10)',
  				a11: 'var(--pink-a11)',
  				a12: 'var(--pink-a12)'
  			},
  			yellow: {
  				'1': 'var(--yellow-1)',
  				'2': 'var(--yellow-2)',
  				'3': 'var(--yellow-3)',
  				'4': 'var(--yellow-4)',
  				'5': 'var(--yellow-5)',
  				'6': 'var(--yellow-6)',
  				'7': 'var(--yellow-7)',
  				'8': 'var(--yellow-8)',
  				'9': 'var(--yellow-9)',
  				'10': 'var(--yellow-10)',
  				'11': 'var(--yellow-11)',
  				'12': 'var(--yellow-12)',
  				a1: 'var(--yellow-a1)',
  				a2: 'var(--yellow-a2)',
  				a3: 'var(--yellow-a3)',
  				a4: 'var(--yellow-a4)',
  				a5: 'var(--yellow-a5)',
  				a6: 'var(--yellow-a6)',
  				a7: 'var(--yellow-a7)',
  				a8: 'var(--yellow-a8)',
  				a9: 'var(--yellow-a9)',
  				a10: 'var(--yellow-a10)',
  				a11: 'var(--yellow-a11)',
  				a12: 'var(--yellow-a12)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			hover: 'var(--hover)',
  			border: 'hsl(var(--border))',
  			scrollbar: {
  				thumb: 'var(--scrollbar-thumb)',
  				track: 'var(--scrollbar-track)'
  			},
  			selection: {
  				background: 'var(--selection-background)',
  				foreground: 'var(--selection-foreground)'
  			},
  			highlight: {
  				background: 'var(--highlight-background)',
  				foreground: 'var(--highlight-foreground)'
  			},
  			kbd: {
  				background: 'var(--kbd-background)',
  				foreground: 'var(--kbd-foreground)',
  				border: 'var(--kbd-border)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			],
  			apple: [
  				'var(--font-apple)'
  			]
  		},
  		borderRadius: {
  			small: 'var(--radius-small)',
  			base: 'var(--radius-base)',
  			large: 'var(--radius-large)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-small": {
          fontSize: "12px",
          letterSpacing: "0.01px",
        },
        ".text-default": {
          fontSize: "14px",
          lineHeight: "21px",
          letterSpacing: "-0.09px",
        },
      });
    }),
      require("tailwindcss-animate")
],
  darkMode: ["class", "class"],
};

export default config;
