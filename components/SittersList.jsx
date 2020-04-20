import Link from 'next/link'
import s from './list.module.scss'

const SittersList = props => {

  return (
    <div className={s.sitters}>
      <form className="form-group row px-0 pb-5 m-0">
        <h4 className="col-12">Filter</h4>
        <label className="col-lg-4 col-md-12">
          <input type="number" placeholder="age" className="form-control" />
        </label>
        <label className="col-lg-4 col-md-12">
          <input type="text" placeholder="location" className="form-control" />
        </label>
        <label className="col-lg-4 col-md-12">
          <input type="text" placeholder="something" className="form-control" />
        </label>
      </form>

      <ul className={`${s.list_group} m-0 p-0 w-100 row`}>
        {props.babySitters.map((sit, ind) => (
          <li key={ind} className={`col-lg-6 col-md-12`}>
            <div className={`row p-0 m-0 ${s.list_group_item}`}>
              <div className={`col-lg-3 col-md-12 py-3 ${s.photo_holder}`}>
                <Link href={{
                  pathname: "/sit-profile/sitProfile",
                  query: { id: sit.id }
                }} ><a>
                    <img src={sit.photo}
                      className="w-100"
                      alt={sit.name} />
                  </a></Link>
              </div>
              <div className="col-lg-9 col-md-12 py-3">
                <h3>
                  <Link href={{
                    pathname: "/sit-profile/sitProfile",
                    query: { id: sit.id }
                  }} ><a>
                      {sit.name}
                    </a></Link>
                </h3>
                <div>{sit.work}</div>
                <div>Quick reply</div>
                <div>
                  <b>{sit.completed} tasks </b>
                       completed with
                       <b> {sit.reviews.length} reviews</b>
                </div>
                <div>{sit.description}</div>
                <span>rating: {sit.location}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SittersList;
