// load the express module using the require function of node which is similar to import
// express is need to run a node server
var expressServer = require('express');

// load the app by calling the express library
var app = expressServer();

// point to the location from where the resources should be loaded in to the server (use method)
//express static method to load the folder in which entry point is avavilable
app.use(expressServer.static('public'));

//listen method to start the server
//port no and function to be invoked a sarguments as arguments
app.listen(3000,function(){
  console.log(' app is running @ port 3000');
});
