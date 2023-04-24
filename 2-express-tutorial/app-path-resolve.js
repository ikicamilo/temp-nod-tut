const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static(path.resolve(__dirname, './public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public/index.html'))
// })

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})

// app.get('/', (req, res) => {
//     console.log('User hit the resource');
//     res.status(200).send('Home page')
// })

// app.get('/about', (req, res) => {
//     res.status(200).send('About page')
// })