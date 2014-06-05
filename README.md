# Countdown

### 使用

````
npm install
grung dev

````

### 目录结构

````
-assets
	-css
		-config.rb
		-sass
			-app.scss
			-variable.scss
		-stylesheets
			-app.css
			-variable.css
	-slice
	-sclie-min
-build
	-app.js
	-app.debug.js
	-app.css
	-app.debug.css
-demo
	-mods
		-mod_tmpl.html
	-app.html
	-index.html
-mocks
	mocks.js
-src
	-app.js
	-app.io.js
-Gruntfile.js
-package.json
-README.md
````

### 说明

* `app.html` 默认引入聚划算移动开发基础库 `http://g.tbcdn.cn/ju/??h5-libs/1.0.1/libs.js,h5-compo/1.0.0/compo.js` 包含 `zepto.js FastClick.js Mustache.js  Lazyload.js md5.js`
* 使用Grunt作为构建工具。定义两个任务 `grunt dev` 、`grunt dist` 分别是开发和打包构建。`grunt dev`在开发期间时时构建和页面刷新，`grunt dist` 生成 `build/app.js`, `build/app.css` 这两个上线压缩文件
* `app.io.js`与 `mocks.js` 相辅相成，可在`mocks.js` 配置 io 的请求接口实现数据mock。
* css工具 采用 `scss`