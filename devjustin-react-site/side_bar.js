var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";

// const e = React.createElement;

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { className: "bg-light border-right", id: "sidebar-wrapper" },
          React.createElement(
            "div",
            { className: "sidebar-heading" },
            "Start Bootstrap "
          ),
          React.createElement(
            "div",
            { className: "list-group list-group-flush" },
            React.createElement(
              "a",
              { href: "/Users/justin.lee/Desktop/website/devjustin.com/startbootstrap-simple-sidebar-gh-pages/index.html", className: "list-group-item list-group-item-action bg-light" },
              "Home"
            ),
            React.createElement(
              "a",
              { href: "/Users/justin.lee/Desktop/website/devjustin.com/startbootstrap-simple-sidebar-gh-pages/habits/waking-up-at-5AM.html", className: "list-group-item list-group-item-action bg-light" },
              "Waking up at 5AM"
            ),
            React.createElement(
              "a",
              { href: "#", className: "list-group-item list-group-item-action bg-light" },
              "Test"
            ),
            React.createElement(
              "a",
              { href: "#", className: "list-group-item list-group-item-action bg-light" },
              "Events"
            ),
            React.createElement(
              "a",
              { href: "#", className: "list-group-item list-group-item-action bg-light" },
              "Profile"
            ),
            React.createElement(
              "a",
              { href: "#", className: "list-group-item list-group-item-action bg-light" },
              "Status"
            ),
            React.createElement(
              "a",
              { href: "#", className: "list-group-item list-group-item-action bg-light" },
              "Status"
            )
          )
        )
      );
    }
  }]);

  return SideBar;
}(React.Component);

document.querySelectorAll('.side_bar_container').forEach(function (domContainer) {
  ReactDOM.render(e(SideBar), domContainer);
});