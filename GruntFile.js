'use strict';

module.exports = function(grunt){
// Load grunt tasks automatically
require('load-grunt-tasks')(grunt);

// Configurable paths
var config = {
    app: 'app',
    dist: 'dist'
};

grunt.initConfig({
    config: config,

    // watch any js files on change
    watch: {
        options: { livereload: true },
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep']
        },
        scripts: {
            files: ['<%= config.app %>/js/src/*.js'],
            tasks: ['uglify']
        },
        // sass
        sass: {
            files: ['<%= config.app %>/sass/**/*.scss'],
            tasks: ['compass:dev']
        },
        // watch html
        html: {
            files: ['<%= config.app %>/**/*.html']
        }
    },

    // Grunt server settings
    connect: {
        options: {
            port: 3000,
            open: true,
            livereload: 35729,
            // Change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost'
        },
        livereload: {
            options: {
                middleware: function(connect) {
                    return [
                        connect().use('/bower_components', connect.static('./bower_components')),
                        connect.static(config.app)
                    ];
                }
            }
        }
    },

    wiredep: {
        app: {
            // Point to the files that should be updated when you run `grunt wiredep`
            ignorePath: /^\/|\.\.\//,
            src: [
                '<%= config.app %>/**/*.html',          // .html support...
                '<%= config.app %>/views/**/*.html',    // .html support...
                '<%= config.app %>/views/**/*.jade',    // .jade support...
                '<%= config.app %>/styles/app.scss',    // .scss & .sass support...
                '<%= config.app %>/config.yml'          // and .yml & .yaml support out of the box!
            ],
            options: {
                // See wiredep's configuration documentation for the options https://github.com/taptapship/wiredep#configuration
                //directory: 'bower_components',
            }
        }
    },

    compass: {
        dev: {
            options: {
                sourcemap: true,
                httpPath: '/',
                sassDir: '<%= config.app %>/sass',
                cssDir: '<%= config.app %>/css',
                imagesDir: 'img',
                imagesPath: '<%= config.app %>/images',
                fontsDir: '<%= config.app %>/fonts',
                javascriptsDir: '<%= config.app %>/js',
                generatedImagesDir: '<%= config.app %>/images',
                environment: 'production',
                outputStyle: 'expanded',
                noLineComments: false,
                relativeAssets: false
            }
        }
    },

    // uglify js files and place in minified dir
    uglify: {
        my_target: {
            files: [{
                expand: true,
                cwd: '<%= config.app %>/js/src',
                src: '**/*.js',
                dest: '<%= config.app %>/js',
                flatten: true
            }]
        }
    },

    copy: {
        jquery: {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: 'jquery.min.js',
            dest: '<%= config.app %>/js/lib/',
            flatten: true,
            filter: 'isFile'
        },
        modernizr: {
            expand: true,
            cwd: 'bower_components/modernizr/',
            src: 'modernizr.js',
            dest: '<%= config.app %>/js/lib/',
            flatten: true,
            filter: 'isFile'
        }
    }
});

grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'wiredep',
        'connect',
        'watch',
        'copy',
        'compass'
    ]);
});
};