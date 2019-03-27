`use strict`;

// const e = React.createElement;

class SideBar extends React.Component {
  render() {
    return (
       <React.Fragment>
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Start Bootstrap </div>
        <div className="list-group list-group-flush">
          <a href="/Users/justin.lee/Desktop/website/devjustin.com/startbootstrap-simple-sidebar-gh-pages/index.html" className="list-group-item list-group-item-action bg-light">Home</a>
          <a href="/Users/justin.lee/Desktop/website/devjustin.com/startbootstrap-simple-sidebar-gh-pages/habits/waking-up-at-5AM.html" className="list-group-item list-group-item-action bg-light">Waking up at 5AM</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Test</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

document.querySelectorAll('.side_bar_container')
  .forEach(domContainer => {
    ReactDOM.render(
      e(SideBar), domContainer
    );
  });
