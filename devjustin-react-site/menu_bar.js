var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"strict";

var MenuBar = function (_React$Component) {
  _inherits(MenuBar, _React$Component);

  function MenuBar() {
    _classCallCheck(this, MenuBar);

    return _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).apply(this, arguments));
  }

  _createClass(MenuBar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light border-bottom" },
        React.createElement(
          "button",
          { className: "btn btn-primary", id: "menu-toggle" },
          "Habits"
        ),
        React.createElement(
          "button",
          { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { className: "navbar-nav ml-auto mt-2 mt-lg-0" },
            React.createElement(
              "li",
              { className: "nav-item active" },
              React.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Home ",
                React.createElement(
                  "span",
                  { className: "sr-only" },
                  "(current)"
                )
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: "nav-link", href: "#" },
                "Link"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item dropdown" },
              React.createElement(
                "a",
                { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                "Dropdown"
              ),
              React.createElement(
                "div",
                { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  "Action"
                ),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  "Another action"
                ),
                React.createElement("div", { className: "dropdown-divider" }),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  "Something else here"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MenuBar;
}(React.Component);

document.querySelectorAll('#menu_bar_container').forEach(function (domContainer) {
  ReactDOM.render(e(MenuBar), domContainer);
});