import logo from './logo.svg';

function Layout(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          {props.title}
          <span className="badge badge-success">Beta</span>
        </a>
      </nav>
      <div className="container">
        {props.children}
      </div>
      <div className="footer bg-light text-center">
        <span className="text-muted">{props.footer}</span>
      </div>
    </div>
  );
}

export default Layout;
