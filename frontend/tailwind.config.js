import daisyui from 'daisyui';
import animated from 'tailwindcss-animated';
// import * as dark from 'daisyui/src/theming/themes/dark';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],

  theme: {
    extend: {
      colors: {
        marble: {
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#e3e3e3',
          300: '#d1d1d1',
          400: '#bdbdbd',
          500: '#aaaaaa',
          600: '#969696',
          700: '#818181',
          800: '#6a6a6a',
          900: '#585858',
          950: '#333333',
        },
        mushroom: {
          50: '#f8f7f4',
          100: '#e9e6de',
          200: '#dcd7cc',
          300: '#c6bdab',
          400: '#afa088',
          500: '#9e8a71',
          600: '#917b65',
          700: '#796555',
          800: '#645348',
          900: '#52453c',
          950: '#2b241f',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        lofiModified: {
          info: '#00cfff',
          success: '#00cca8',
          warning: '#ce9400',
          error: '#ff5c7d',

          primary: '#ead0f0',
          'primary-focus': '#32202c',
          'primary-content': '#9b60aa',

          neutral: 'rgb(245, 244, 242)',
          'neutral-focus': '#091120',
          'neutral-content': '#757575',

          secondary: '#212121',
          'secondary-focus': '#2e2d2f',
          'secondary-content': '#fafafa',

          accent: '#ff7759',
          'accent-focus': '#e6e6e6',
          'accent-content': '#fafafa',

          'base-100': '#e9e6de',
          'base-200': '#f5f4f2',
          'base-300': '#2e2d2f',
          'base-content': '#000000',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        dark: {
          // ...daisyui.themes.dark,
          primary: '#db2777',
          'base-300': '#090909',
          'primary-focus': 'mediumblue',
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [daisyui, animated],
};
