/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Space Grotesk', 'sans-serif'],
      //   heading: ['DM Serif Display', 'serif'],
      // },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // theme: {
        //   bgLight: '#ffffff',
        //   bgDark: '#0f172a',
        //   textLight: '#ffffff',
        //   textDark: '#000000',
        //   accent: '#7c3aed',
        // },
        // theme: {
        //   bgLight: '#f9f9fc',     // Off-white
        //   bgDark: '#1c1b2f',      // Deep indigo-black
        //   textLight: '#f5f5f5',   // Soft white
        //   textDark: '#151515',    // Jet black
        //   accent: '#7c3aed',      // Purple (unchanged)
        // }
        // theme: {
        //   bgLight: '#ffffff',     // Pure white
        //   bgDark: '#0e1320',      // Near-black with slight blue
        //   textLight: '#f1f5f9',   // Tailwind’s slate-100
        //   textDark: '#0a0a0a',    // High-contrast black
        //   accent: '#7c3aed',      // Purple (unchanged)
        // }
        // theme: {
        //   bgLight: '#eef2ff',     // Indigo-50
        //   bgDark: '#111827',      // Slate-900
        //   textLight: '#fdfcff',   // Slightly lavender-tinted white
        //   textDark: '#1e1b4b',    // Indigo-900
        //   accent: '#7c3aed',      // Purple (unchanged)
        // }
        // theme: {
        //   bgLight: '#faf5ff',     // Light lavender
        //   bgDark: '#2a1a3f',      // Eggplant / muted purple-black
        //   textLight: '#f4efff',   // Lavender white
        //   textDark: '#1a1a1a',    // Deep gray-black
        //   accent: '#7c3aed',      // Purple (unchanged)
        // }
        // theme: {
        //   bgLight: '#f4f4f5',     // Zinc-100
        //   bgDark: '#0b1120',      // Space black
        //   textLight: '#e5e7eb',   // Zinc-200
        //   textDark: '#020617',    // True dark blue
        //   accent: '#7c3aed',      // Purple (unchanged)
        // }
        theme: {
          bgLight: '#fefefe',     // Almost white
          bgDark: '#1e1e2e',      // Subtle indigo-black
          textLight: '#fefefe',   // Matching background
          textDark: '#101010',    // Clean dark text
          accent: '#7c3aed',      // Purple (unchanged)
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.theme.textDark'),
            a: {
              color: theme('colors.theme.accent'),
              '&:hover': {
                color: theme('colors.theme.accent'),
              },
            },
            h1: {
              color: theme('colors.theme.textDark'),
              fontFamily: theme('fontFamily.heading').join(','),
            },
            h2: {
              color: theme('colors.theme.textDark'),
              fontFamily: theme('fontFamily.heading').join(','),
            },
            h3: {
              color: theme('colors.theme.textDark'),
              fontFamily: theme('fontFamily.heading').join(','),
            },
            code: {
              backgroundColor: theme('colors.theme.bgDark'),
              color: theme('colors.theme.accent'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.theme.textLight'),
            a: {
              color: theme('colors.theme.accent'),
              '&:hover': {
                color: theme('colors.theme.accent'),
              },
            },
            h1: {
              color: theme('colors.theme.textLight'),
            },
            h2: {
              color: theme('colors.theme.textLight'),
            },
            h3: {
              color: theme('colors.theme.textLight'),
            },
            code: {
              backgroundColor: theme('colors.theme.bgDark'),
              color: theme('colors.theme.accent'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
