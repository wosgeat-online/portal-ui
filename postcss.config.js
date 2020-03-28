let config = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    'vue-cli-plugin-tailwind/purgecss': config
  }
}
