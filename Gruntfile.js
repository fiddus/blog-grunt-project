'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

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
        }

    });

};
