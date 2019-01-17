const fs = require('fs');

// 复制文件
fs.writeFileSync(
  './dist/sprite@2x.json',
  fs.readFileSync('./dist/sprite.json')
);
fs.writeFileSync('./dist/sprite@2x.png', fs.readFileSync('./dist/sprite.png'));
