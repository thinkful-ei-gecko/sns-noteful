module.exports = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://dunder_mifflin:asdf@localhost/noteful',
    API_ENDPOINT: 'https://shielded-river-85764.herokuapp.com/api'
}