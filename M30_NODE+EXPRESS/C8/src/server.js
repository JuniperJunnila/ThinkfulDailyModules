const {PORT} = process.env || 5000
const app = require('./app.js')

app.listen(PORT, () => console.log(PORT))