var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  componentDidMount: function() {

    var {title, errorMsg} = this.props;

    var newJsx = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{errorMsg}</p>
        <p>
          <button className="button hollow" data-close="">
            ok
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(newJsx));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  getDefaultProps: function() {

    return  {
      title: 'Error'
    };
  },

  propTypes:{

    title: React.PropTypes.string,
    errorMsg: React.PropTypes.string.isRequired,
  },

  render: function() { return(<div></div>); }
});

module.exports = ErrorModal;
