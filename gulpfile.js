var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('sonar', function(callback) {
  sonarqubeScanner({
    serverUrl : "http://sonaqube:9000",
    options : {
    }
  }, callback);
});
