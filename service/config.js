var env = process.env;
var nodeEnv = env.NODE_ENV || 'development';

exports.nodeEnv;

exports.logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

exports.port = env.PORT || 8000;
exports.host = env.HOST || 'localhost';
exports.mongodbUri = 'mongodb://localhost/MyAppDb';
//exports.mongodbUri = 'mongodb://cs20170325:helpme01@ds141960.mlab.com:41960/myappdb';
