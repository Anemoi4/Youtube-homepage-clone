import express from 'express'

const app = express()
app.listen(5000, () => console.log('Listening at 5000'))

// View engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))

// Routes

app.get('/home', (req, res) => {
    res.status(200).render('index')
}) 