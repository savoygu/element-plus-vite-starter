/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

const epui = plugin.withOptions(({ namespace = 'ep', prefix = 'ui' } = {}) => {
  return ({ addVariant }) => {
    addVariant(`${prefix}-button`, [
      `&[class~="${namespace}-button"]`
    ])
    addVariant(`${prefix}-button>span`, [
      `&[class~="${namespace}-button"] > span`
    ])
  }
})

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ".ep-button": {
          "background-color": "var(--ep-button-bg-color,var(--ep-color-white))"
        }
      });
    },
    epui
  ],
  // corePlugins: {
  //   preflight: false
  // }
}

