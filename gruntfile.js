module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },
    sass: {
      dev: {
        options: { sourceMap: true },
        files: { 'assets/dev/css/style.css' : 'assets/dev/scss/style.scss' }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', []);

};