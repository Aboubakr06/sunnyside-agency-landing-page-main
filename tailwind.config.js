/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'clr-primary-700' : 'hsl(198, 62%, 26%)',
        'clr-primary-600': 'hsl(167, 40%, 24%)',
        'clr-primary-500': 'hsl(168, 34%, 41%)',
        'clr-primary-510': 'hsl(168, 34%, 61%)',
        'clr-primary-400': 'hsl(7, 99%, 70%)',
        'clr-primary-300': 'hsl(51, 100%, 49%)',
    
        'clr-neutral-500': 'hsl(212, 27%, 19%)',
        'clr-neutral-400': 'hsl(213, 9%, 39%)',
        'clr-neutral-300': 'hsl(232, 10%, 55%)',
        'clr-neutral-200': 'hsl(210, 4%, 67%)',
        'clr-neutral-100': 'hsl(0, 0%, 100%)',
          },
    },
  },
  plugins: [],
}
