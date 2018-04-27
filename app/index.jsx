var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//style loader to load css loader
// css loader to load the css script
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!AppCustomStyles');

ReactDOM.render(
<Router history={HashHistory}>
  <Route path='/' component={Main}>
    <Route path='about' component={About}/>
    <Route path='example' component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,
document.getElementById("app"));
