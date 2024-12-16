module.exports = {
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',  // Sử dụng Babel để transpile mã JavaScript, JSX, MJS
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios|other-package-to-transform).+\\.js$', // Bao gồm Axios và các thư viện cần transpile
  ],
};
