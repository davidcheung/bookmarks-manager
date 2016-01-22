module.exports = function(Folder) {
  Folder.tree = function(cb) {
    var response;
    Folder.find({
    	include : [ "childFolders", "parentFolders","bookmarks"]
    },
      function(err,data) {
      	// async.each( data, function(){
      	// });
        //deleting the non-parent items for tree nested structure 
      	for ( var index in data ){
      		 if ( data[index]['parentId'] ){
             delete data[index];
           }
      	}
     	cb( null, data.filter(function(e){return e}) );
      });
  }
  Folder.returnAbsolutelyNothing = function(cb){
    cb(null,null);
  }

  Folder.returnLonelyValue = function(cb){
    cb(null, { foo :[ {a :'foo\xC1\xE1\u0102\u03A9asd><=$~!@#$%^&*()-_=+/.,;\'"[]{}?'}, 
      {"b" : 2}]} );
  }

  Folder.remoteMethod("returnLonelyValue",{
    returns : {
      root: true,
      xml : {  wrapperElement: false, declaration : false }
    },
    http: {
      path: '/returnLonelyValue',
      verb: 'get'
    }
  })
  Folder.remoteMethod("returnAbsolutelyNothing",{
    returns :null,
    http: {
      path: '/returnAbsolutelyNothing',
      verb: 'get'
    }

  })
  Folder.remoteMethod("tree",{
  	returns : {
  		arg : "folders",
  		type : "folders",
      root: true,
      xml : {  wrapperElement: false, declaration : false }
  	},
  	http: {
      path: '/tree',
      verb: 'get'
    }

  })
  // Folder.remoteMethod("tree",{
  //   returns : {
  //     arg : "custom",
  //     type : "xml",
  //     root : true,
  //     http: function(ctx){
  //       return ctx.res.set('Content-Type', 'text/xml');
  //     }
  //   },
  //   http: {
  //     path: '/tree',
  //     verb: 'get'
  //   }

  // })
};