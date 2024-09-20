import express from 'express'
import path from 'path'

const app = express()

// Указываем статические файлы из папки build
app.use(express.static(path.join(__dirname, '../build'))) // Обрати внимание на '../'

// Маршрут для всех запросов, чтобы вернуть index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html')) // Обрати внимание на '../'
})

// Указываем порт, на котором будет запущен сервер
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
