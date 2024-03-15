/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'switzer': ['Switzer', 'sans-serif'],
        'inter':['Inter', 'sans-serif'],
      },
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '425px',
      // => @media (min-width: 960px) { ... }

      'lg': '768px',
      // => @media (min-width: 1440px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
    fontSize: {
      thead: ['1.5rem', '2.063rem'],
      tsmall: ['0.75rem', '1.5rem'],
      tdm: ['0.688rem', '0.908rem'],
      tem: ['0.75rem', '0.908rem'],
      breaksm: ['0.875rem','1.155rem'],
      iconText: ['1rem', '1.313rem'],
      bigTexta: ['2.875rem', '3.479rem'],
      bigTextb: ['1.125rem', '1.361rem']
    },
    colors: {
      'bg-pink': '#FEF0DE',
      'bg-white': '#FFFFFF;',
      'borderColor': '#DCDCDC',
      'buttonBg': '#FAA32C',
      'pforget': '#775DA6',
      'footerColor': '#898989',
      'welcomeColor': '#615F65',
      'welcomeTextColor': '#5A5A5A',
      'iconColor': '#787486',
      'activeIconColor': '#E5873014',
      'bulletGreen': '#7AC555',
      'bulletYellow': '#FFA500',
      'bulletGrey': '#E4CCFD',
      'bulletBlue': '#76A5EA',
      'cardbg':'#F5F5F5',
      'textBlue': '#0D062D',
      'iconOrange': '#FAA32C',
      'avatarBg': '#F4D7DA',
      'avatarBgDeep': '#D25B68',
      'cardBulletBlue': '#5030E5',
      'cardNumberBg': '#E0E0E0',
      'cardNumberText': '#625F6D',
      'cardBulletGreen': '#8BC48A',
      'priorityTextColor': '#D58D49',
      'priorityBgColor': '#DFA87433',
      'textBlack': '#000000',
    },
  },
  plugins: ['flowbite/plugin'],
}

