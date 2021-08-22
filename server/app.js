import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()
app.listen(PORT, () => console.log('Listening at 5000'))

// View engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))

// Routes

app.get('/home', (req, res) => {
    res.status(200).render('index')
}) 