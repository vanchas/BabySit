import Link from 'next/link';
import $ from 'jquery';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdbreact';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  navbarClose() {
    $('.navbar-toggler').click();
  }

  render() {
    return (
      <>
        <MDBNavbar color='indigo' light expand='md'
          className="navbar">
          <MDBNavbarBrand>
            <Link href="/"><a
              onClick={this.navbarClose}
              className="navbar-brand btn nav-link">
              <strong className=''>Babysit</strong>
            </a></Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="w-100">
              <MDBNavItem>
                <Link href="/main/main"><a
                  onClick={this.navbarClose}
                  className="nav-link px-3">Babysitters</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/about/about"><a
                  onClick={this.navbarClose}
                  className="nav-link px-3">About</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/sign-in/signIn"><a
                  onClick={this.navbarClose}
                  className="nav-link px-3">Sign in</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/sign-up/signUp"><a
                  onClick={this.navbarClose}
                  className="nav-link px-3">Sign up</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/read-more/readMore"><a
                  onClick={this.navbarClose}
                  className="nav-link px-3">Read More</a></Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}


export default Navbar;