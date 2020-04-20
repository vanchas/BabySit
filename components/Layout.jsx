import Navbar from './Navbar';
import s from './layout.module.scss'

const Layout = (props) => (
  <div className={s.layout}>
    <div className="p-3"><Navbar/></div>
    <main className="container-fluid">
      {props.children}
    </main>
  </div>
);

export default Layout;