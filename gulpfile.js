//引入gulp
var gulp = require("gulp"),
  spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {

  return gulp.src('images/*.png') //需要合并的图片地址
    .pipe(spritesmith({
      imgName: 'sprite.png', //保存合并后图片的地址
      cssName: 'css/sprite.json', //保存合并后对于css样式的地址
      padding: 5, //合并时两个图片的间距
      algorithm: 'binary-tree', //注释1
      cssTemplate: function (data) {
        var arr = [];
        data.sprites.forEach(function (sprite) {
          arr.push(`"${sprite.name}":{"width":${sprite.width},"height":${sprite.height},"x":${sprite.offset_x},"y":${sprite.offset_y}, "pixelRatio": 2,"visible": true}`);
          //   arr.push(sprite.name +
          //     "{" +
          //     "background-image: url('" + sprite.escaped_image + "');" +
          //     "background-position: " + sprite.px.offset_x + "px " + sprite.px.offset_y + "px;" +
          //     "width:" + sprite.px.width + ";" +
          //     "height:" + sprite.px.height + ";" +
          //     "}\n");
        });
        return "{" + arr.join(",") + "}";
      }

    }))
    .pipe(gulp.dest('dist/'));
});