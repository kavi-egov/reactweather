var React = require('react');

// no need to define React class for a compenent which just renders
/*
var About = React.createClass({

  render: function() {

    return (
        <div>
          search the About in this page
        </div>
    );
  }
});

*/

// instead use stateless functions
var About = (props) =>
      <div>
        this website fetches the weather of the city you enter
      </div>
  ;
module.exports = About;
