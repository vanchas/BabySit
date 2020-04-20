import babySitters from '../../babysitters.json';
import SittersList from '../../components/SittersList';
import s from './main.module.scss'

const Main = (props) => (
  <div className={s.main}>
    <header className={`row px-0 pb-3 m-0 ${s.header}`}>
      <div className={`${s.faq_btn} col-lg-2 col-md-0`}>
        <button className={`${s.button}`}>?</button>
      </div>
      <h1 className="col-lg-8 col-md-12 text-center my-4">Welcome to Babysit</h1>
      <div className={`${s.faq_btn} col-lg-2 col-md-0`}>
        <button className={`${s.button}`}>?</button>
      </div>
    </header>
    <SittersList babySitters={props.babySitters} />
  </div>
);

Main.getInitialProps = async function () {

  return {
    babySitters
  };
}

export default Main;