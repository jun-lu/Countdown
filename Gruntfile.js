module.exports = function(grunt){

    // 项目配置
    //grunt.file.defaultEncoding = 'gbk';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assetsPath: 'assets',
		minjs:"build/CountDown.js",
		debugjs:"build/CountDown.debug.js",
        //合并任务
        concat: {
            options: {
                beautify: {
                    ascii_only: true
                },
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            "jsCombo": {
                src: ['src/app.js','src/*.js'],
                dest:'<%= debugjs%>'
            }
        },

        //压缩任务
        uglify:{
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                beautify: {
                    ascii_only: true
                }
            },
            "jsCombo":{
					files:{"<%= minjs%>":['<%= debugjs%>']}
            }
        },

        

        watch: {
            "js":{
                files: ["<%= concat.jsCombo.src  %>"],
                tasks: ['concat:jsCombo']
            },
          
		
            "livereload": {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'demo/*.html',
                    'build/*.{css,js}'
                ]
            }
        },
        
         
        connect:{
            
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '0.0.0.0'
            },
            
            livereload: {
                options: {
                    open: true,
                    base: [
                        ''
                    ]
                }
            }
        }

    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    //合并插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    
    grunt.loadNpmTasks('grunt-contrib-compass');

    //合并插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    //上线 grunt 
    grunt.registerTask('dist', ['concat','uglify']);
    
	//开发 grunt dev
    grunt.registerTask('dev', ['connect:livereload','concat','watch']);
}