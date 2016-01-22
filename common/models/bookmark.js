module.exports = function(Bookmark) {
  Bookmark.someStaticFunction = function(cb) {
    var result = {
      "static": "result"
    };
    cb(null, result);
  }
  Bookmark.haha = function(cb){
	cb(null,{ data : "haha"});
  }

  Bookmark.remoteMethod("haha",{
    http: {
      path: '/haha',
      verb: 'get'
    }
  })
};