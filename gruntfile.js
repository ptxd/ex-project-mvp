// gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'src/css/main.css': 'less/main.less'
                },
                options: {
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
                        new (require('less-plugin-clean-css'))()
                    ]
                }
            }
        },

        watch: {
            less: {
                files: ['less/**'],
                tasks: ['less']
            }
        }

    });

// 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

// 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['less']);
    grunt.registerTask('compile-less', ['less']);

};