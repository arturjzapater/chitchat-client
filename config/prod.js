module.exports = {
  debounceTiming: 1800,
  server: process.env.NODE_ENV === 'production'
    ? 'https://chitchat-app-server.herokuapp.com/'
    : '/'
}
