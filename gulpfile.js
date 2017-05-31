var gulp = require('gulp');//本地安装gulp所用到的地方
var minifyHtml = require("gulp-minify-html");//加入相应依赖

var gulp= require("gulp");
var minifyjs= require("gulp-uglify");
var concat=require('gulp-concat');



	gulp.task('htmltask', function () {  //htmltask为自定义的任务名称
    	gulp.src('*.html') // 要压缩的html文件
   		.pipe(minifyHtml())  //压缩，和上面定义的依赖名相同
   		.pipe(gulp.dest('dist'))//压缩到哪
	});
	



gulp.task('jstask',function(){
		gulp.src('./js/*.js')  
		.pipe(minifyjs())   // 压缩
.pipe(concat('all.js')) // 合并后叫all.js
		.pipe(gulp.dest('./dist/js')) //输出到dist下js文件夹
	});