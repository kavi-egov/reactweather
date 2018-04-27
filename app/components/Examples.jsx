var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>

      <div>
        <h1 className="text-center page-header">Examples!</h1>
        <p> Here are a few examples to check out</p>
        <ol>
          <li>
            <Link to="/?location=bengaluru">Bengaluru, IN</Link>
          </li>
          <li>
            <Link to="/?location=Chennai">Chennai, IN</Link>
          </li>
        </ol>
      </div>;

module.exports = Examples;
