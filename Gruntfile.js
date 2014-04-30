module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'lib/javascripts/timely.js': ['lib/coffeescript/*.coffee']
        }
      }
    },
    shell: {
      compileLess: {
        options: {
          stdout: true
        },
        command: 'lessc lib/less/timely.less > lib/stylesheets/timely.css'
      }
    },
    watch: {
      files: ['lib/coffeescript/*.coffee','lib/less/**/*'],
      tasks: ['coffee','shell']
    }
  });
  grunt.registerTask('default', ['coffee','concat','shell']);
};
