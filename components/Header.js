const Header = () => (
<nav className="navbar back" role="navigation" aria-label="main navigation">

 <div className="container">  
  <div className="navbar-brand">
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item">
          <a className="left ">
            <strong>HOME</strong>
          </a>
        </div>
        <div className="navbar-item">
          <a className="left ">
          <strong>PROGRAM</strong>
          </a>
        </div>
        <div className="navbar-item">
          <a className="left">
              <strong>COACHES</strong></a>
          </div>
          <div className="navbar-item">
          <a className="left "> <strong>SCHEDULE</strong></a>
          </div>
          <div className="navbar-item">
          <a className="left "> <strong>ABOUT</strong></a>
          </div>
          <div className="navbar-item">
          <a className="left "> <strong>BLOG</strong></a>
          </div>
          <div className="navbar-item">
          <a className="left "> <strong>CONTACT</strong></a>
        </div>
      </div>
  </div>
 
  </div>
  <style jsx>{`
 
    .back{
        background: transparent;
    }
    .button{
        margin-top: 4rem;
    }
    .left:hover{
        color:red;
    }
  `}
    
  </style>
</nav>
);
export default Header;