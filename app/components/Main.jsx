var React = require('react');
var NavComponent = require('Navigation');

var Main = (props) =>
      <div>
        <NavComponent/>
        <div clasName="row">
          <div className="columns medium-6 large-4 small-centered">
              {props.children}
          </div>
        </div>
      </div>
    ;

module.exports = Main;
