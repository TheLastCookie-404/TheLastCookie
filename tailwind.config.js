/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      backgroundImage: {
        "colors": "url('@/assets/circles.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#34d399",
          "secondary": "#d946ef",
          "accent": "#fde047",
          "neutral": "#f3f4f6",
          "base-100": "#111827",
          "info": "#00bbd4",
          "success": "#00ffcd",
          "warning": "#ffb100",
          "error": "#ff2b76",
          },
        },
      ],
    },
}

