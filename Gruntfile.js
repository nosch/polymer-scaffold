/**
 * polymer-scaffold
 * Grunt task runner configuration.
 */
module.exports = function (grunt) {
    'use strict';

    // load all required Grunt plugins listed in package.json
    require('load-grunt-tasks')(grunt);

    // display the elapsed execution time of all tasks
    require('time-grunt')(grunt);

    // Task configuration
    grunt.initConfig({
        // Project paths
        scaffold: {
            buildDir: 'build/'
        },

        mkdir: {
            build: {
                options: {
                    create: ['build']
                }
            }
        },

        // Vulcanize configuration
        vulcanize: {
            default: {
                options: {},
                files: {
                    'build/index.html': 'index.html'
                }
            }
        }
    });

    // Task registration
    grunt.registerTask('default', ['build']);

    grunt.registerTask('build', [
        'mkdir:build',
        'vulcanize'
    ]);
};
