/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        octo: {
          paper: '#F5F2EB',
          ink: '#1C2331',
          stamp: '#3A4A5A',
        }
      },
      fontFamily: {
        mono: ['"Courier Prime"', '"Courier New"', 'monospace'],
        serif: ['Merriweather', '"PT Serif"', 'serif'],
        display: ['Oswald', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'octo-grid': "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 0L0 0 0 24' fill='none' stroke='%233A4A5A' stroke-opacity='0.15' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      typography: ({ theme }) => ({
        octo: {
          css: {
            '--tw-prose-body': theme('colors.octo.ink'),
            '--tw-prose-headings': theme('colors.octo.ink'),
            '--tw-prose-links': theme('colors.octo.ink'),
            '--tw-prose-bold': theme('colors.octo.ink'),
            '--tw-prose-quotes': theme('colors.octo.ink'),
            '--tw-prose-quote-borders': theme('colors.octo.ink'),
            '--tw-prose-code': theme('colors.octo.ink'),
            '--tw-prose-hr': theme('colors.octo.ink'),
            '--tw-prose-th-borders': theme('colors.octo.ink'),
            '--tw-prose-td-borders': theme('colors.octo.ink'),
            fontFamily: theme('fontFamily.serif').join(', '),
            h1: { fontFamily: theme('fontFamily.display').join(', '), textTransform: 'uppercase', letterSpacing: '0.05em' },
            h2: { 
              fontFamily: theme('fontFamily.display').join(', '), 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              borderBottomWidth: '2px', 
              borderBottomColor: theme('colors.octo.ink'), 
              paddingBottom: '0.5rem',
              marginTop: '2.5rem'
            },
            h3: { fontFamily: theme('fontFamily.display').join(', '), textTransform: 'uppercase', letterSpacing: '0.05em' },
            blockquote: {
              borderLeftWidth: '6px',
              borderLeftColor: theme('colors.octo.ink'),
              fontStyle: 'italic',
              fontFamily: theme('fontFamily.mono').join(', '),
              backgroundColor: 'rgba(28, 35, 49, 0.05)',
              padding: '1rem 1.5rem',
            },
            img: {
              borderWidth: '2px',
              borderColor: theme('colors.octo.ink'),
              padding: '4px',
              backgroundColor: theme('colors.octo.paper'),
            },
            figcaption: {
              fontFamily: theme('fontFamily.mono').join(', '),
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            },
            strong: { fontWeight: '900' },
            a: { textDecorationThickness: '2px', textUnderlineOffset: '4px' }
          }
        }
      })
    },
  },
  plugins: [
    typography,
  ],
}