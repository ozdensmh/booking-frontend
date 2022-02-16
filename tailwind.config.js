module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('./assets/images/af_pattern_bg.png')",
        'klm-logo': "url('./assets/images/klm-logo-scaled.jpeg')",
        'airplane': "url('./assets/images/airplane.png')",
      },
      outlineWidth: {
        0.25: '0.5px',
      },
      colors: {
        'klm-blue': '#00A2E6',
      },
    },
  },
  plugins: [],
}
