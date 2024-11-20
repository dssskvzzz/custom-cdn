const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Статическая раздача файлов из папки public
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`CDN сервер запущен на http://localhost:${PORT}`);
});
