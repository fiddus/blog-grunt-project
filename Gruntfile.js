'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        // Hint on JavaScript errors
        jshint: {
            all: [
                './js/**/*.js'
            ]
        },

        // Copy files to a desired location
        copy: {
            build: {
                files: [
                    {expand: false, src: ['index.html'], dest: 'build/'},
                    {expand: true, src: ['js/**'], dest: 'build/'},
                    {expand: true, src: ['css/**'], dest: 'build/'},
                    {expand: true, src: ['img/**'], dest: 'build/'}
                ]
            }
        },

        // Remove files on directories on call
        clean: {
            build: [
                'build'
            ]
        },

        // Connect application
        connect: {
            options: {
                port: 8000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        'build/'
                    ],
                }
            }
        },

        // Watch and live reload code
        watch: {
            js: {
                files: [
                    './js/**/*.js'
                ],
                options: {
                    livereload: true
                },
                tasks: ['jshint', 'copy:build']
            },
            styles: {
                files: [
                    './css/**/*.css'
                ],
                options: {
                    livereload: true
                },
                tasks: ['copy:build']
            },
            html: {
                files: ['./index.html'],
                options: {
                    livereload: true
                },
                tasks: ['copy:build']
            }
        }

    });

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'copy'
    ]);

};
