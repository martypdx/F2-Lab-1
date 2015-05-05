module.exports = function(grunt) {

  var srcFiles = [ "lab1.js" ];
  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        sub: true,
        esnext: true
      }
    },
    jscs: {
      src: srcFiles,
      options: {
        esnext: true,
<<<<<<< HEAD
        //preset: "jquery",
=======
        // preset: "jquery",
>>>>>>> 93b11f6318405cbfb6a9a9772f62ee413b58adc7
        requireDotNotation: null,
        disallowMultipleVarDecl: null,
        requireMultipleVarDecl: null
      }
    },
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
<<<<<<< HEAD
                'lab1f.js': 'lab1.js'
=======
                "lab1t.js": "lab1.js"
>>>>>>> 93b11f6318405cbfb6a9a9772f62ee413b58adc7
            }
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks("grunt-babel");

<<<<<<< HEAD

=======
>>>>>>> 93b11f6318405cbfb6a9a9772f62ee413b58adc7
  grunt.registerTask("default", [ "jshint", "jscs", "babel" ]);
  grunt.registerTask("transpile", [ "babel" ]);

};
