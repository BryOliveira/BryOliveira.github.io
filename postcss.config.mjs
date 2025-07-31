const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js',
      content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    },
    autoprefixer: {}
  }
};

export default config;
