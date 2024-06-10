module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ri/'  // Замените 'ri' на имя вашего репозитория
    : '/'
};
