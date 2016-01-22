// var schema03 = "http://json-schema.org/draft-03/schema#";
// var schema04 = "http://json-schema.org/draft-04/schema#";
// var validator = require('tv4');
// //({ "$ref" : "http://json-schema.org/draft-03/schema#"})
// module.exports = function(app) {
// 	// console.log("payload.js");
// 	// var Bookmark = app.models.Bookmark;
// 	var Folder = app.models.Folder;
// 	//console.log( "%j", Folder.definition);
// 	// validator.validate(Folder.definition);
// 	// console.log( ajv );
// 	// 
// 	var folderobj = {"name":"parent","id":"563110de2842f9643ef580d5","userId":"5630d590613a0fb046205902"};
// 	//var schema = { properties  :Folder.definition.properties};
// 	var result = validator.validate(folderobj, { 
// 		"$schema": "http://json-schema.org/draft-03/hyper-schema#",
// 		"type": "object",
// 		properties  :Folder.definition.properties}/*,
// 		function(isValid, validationError){
// 			console.log('>>>>>>isValid', isValid)
// 			console.log('>>>>>>validationError', validationError)
// 	}*/)
// 	validator.addSchema(schema03);
// 	//var schema = validator.getSchema(schema03);
// 	//console.log( '>>>>>>schema%j', schema )
// 	console.log( '>>>>>>result%j', result )
// 	// Folder.findOne(
// 	// 	{ filter : {
// 	// 		where : {id : "569d55479693af1016"}
// 	// 	  }
// 	// 	},
// 	// 	function(err,res){
// 	// 		console.log("%j",res)
			
// 	// 	}
// 	// )

// }
// 
// 
module.exports = function(app) {
	var Folder = app.models.Folder;
	var myfolder = {
		id : 2,
		name : "myFolder2"
	}
	Folder.create(myfolder,function(err,res){
		console.log(res);
	});
}