'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({

        // Hint on JavaScript errors
        jshint: {
            all: [
                './js/**/*.js'
            ]
        }

    });

};
