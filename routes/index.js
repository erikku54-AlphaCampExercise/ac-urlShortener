const express = require('express');

const router = express.Router(); // 引用express路由器

// (頁面)首頁
router.get('/', (req, res) => {
  res.render('index');
});

// (功能)產生短網址
router.post('/', (req, res) => {

  console.log({ ...req.body, shortenedUrl: 'www.yahoo.com.tw' });
  res.render('index', { ...req.body, shortenedUrl: 'www.yahoo.com.tw' });
})

// (功能)短網址重新導向
router.get('/:id', (req, res) => {
  // TODO: redirect

  res.render('index');
});

module.exports = router; // 匯出設定的express路由器
