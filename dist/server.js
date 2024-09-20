"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Указываем статические файлы из папки build
app.use(express_1.default.static(path_1.default.join(__dirname, '../build'))); // Обрати внимание на '../'
// Маршрут для всех запросов, чтобы вернуть index.html
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../build', 'index.html')); // Обрати внимание на '../'
});
// Указываем порт, на котором будет запущен сервер
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
