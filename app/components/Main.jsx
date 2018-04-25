var React = require('react');
var NavComponent = require('Navigation');

var Main = (props) =>
      <div>
        <NavComponent/>
        <h1>
        rendering this from the main class
        </h1>
        {props.children}
      </div>
    ;

module.exports = Main;
