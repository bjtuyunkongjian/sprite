//引入gulp
const fs = require('fs');
const gulp = require("gulp");
const spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {

  return gulp.src('images-kind/*.png') //需要合并的图片地址
    .pipe(spritesmith({
      imgName: 'sprite.png', //保存合并后图片的地址
      cssName: 'sprite.json', //保存合并后对于css样式的地址
      padding: 5, //合并时两个图片的间距
      algorithm: 'binary-tree', //注释1
      cssTemplate: function (data) {
        const arr = [];
        data.sprites.forEach(function (sprite) {
          arr.push(`"${sprite.name}":{"width":${sprite.width},"height":${sprite.height},"x":${-sprite.offset_x},"y":${-sprite.offset_y}, "pixelRatio": 2,"visible": true}`);
        });
        return "{" + arr.join(",") + "}";
      }

    }))
    .pipe(gulp.dest('dist/'));
});

// 复制
// fs.writeFileSync('./dist/sprite@2x.json', fs.readFileSync('./dist/sprite.json'));
// fs.writeFileSync('./dist/sprite@2x.png', fs.readFileSync('./dist/sprite.png'));