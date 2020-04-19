import Link from 'next/link'

const SittersList = props => {

  return (
    <div className="sitters">
      <ul className="list-group">
        {props.babySitters.map((sit, ind) => (
          <li key={ind} className="list-group-item">
            <div className="row p-0 m-0">
              <div className="col-2 photo-holder">
                <Link href={{
                  pathname: "/sit-profile/sitProfile",
                  query: { id: sit.id }
                }} ><a>
                    <img src={sit.photo}
                      className="w-100"
                      alt={sit.name} />
                  </a></Link>
              </div>
              <div className="col-10">
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
