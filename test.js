var loopback = require('loopback');
var app = loopback();
app.dataSource('Memory', {
  connector: loopback.Memory,
});


console.log( app.handler('rest').adapter.Context() );

app.handler('rest').adapter.getClasses().forEach(function(c,d) {
  console.log(c,d)
});
// var remoting = require('strong-remoting');
// var SharedClass = remoting.SharedClass
// var remotes = remoting.create();

// var userSharedClass = new SharedClass('user', User);
// console.log( userSharedClass )