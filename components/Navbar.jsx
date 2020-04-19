import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
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

  render() {
    return (
      <>
        <MDBNavbar color='indigo' light expand='md'>
          <MDBNavbarBrand>
            <Link href="/"><a className="btn nav-link">
              <strong className=''>Babysit</strong>
            </a></Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <Link href="/main/main"><a className="nav-link">Babysitters</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/about/about"><a className="nav-link">About</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/signin"><a className="nav-link">Sign in</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/signup"><a className="nav-link">Sign up</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link href="/inbabysit"><a className="nav-link">Sign in as babysit</a></Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className='mr-2'>Read More</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <Link href="/howitworks"><a className="nav-link">How it works</a></Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/mission"><a className="nav-link">Our mission</a></Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/vacancies"><a className="nav-link">Vacancies</a></Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/faqs"><a className="nav-link">FAQs</a></Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link href="/rules"><a className="nav-link">Rules</a></Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}


export default Navbar;