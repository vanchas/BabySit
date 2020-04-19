// import fetch from 'isomorphic-unfetch';
import babySitters from '../../babysitters.json';
import SittersList from '../../components/SittersList';
import s from './main.module.scss'
// index = home page

const Main = (props) => (
  <div className={s.main}>
    <h1 className="text-center">Welcome to Babysit</h1>
    <SittersList babySitters={props.babySitters} />
  </div>
);

Main.getInitialProps = async function () {

  return {
    babySitters
  };
}

export default Main;