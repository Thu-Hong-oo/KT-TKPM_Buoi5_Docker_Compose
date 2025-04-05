const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Tạo kết nối tới MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'mydb',
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('Không thể kết nối đến MySQL:', err);
  } else {
    console.log('Đã kết nối thành công đến MySQL');
  }
});

// Định nghĩa một route đơn giản
app.get('/', (req, res) => {
  res.send('Hello, Docker and MySQL!');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});
