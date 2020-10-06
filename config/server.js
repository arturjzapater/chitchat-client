module.exports = {
  url: process.env.NODE_ENV === 'production'
    ? 'https://chitchat-app-server.herokuapp.com/'
    : '/'
}
