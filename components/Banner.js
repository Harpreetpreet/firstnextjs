const Banner = () => (
  <div className="container">
    <div className="navbar-start">
      <a className="navbar-item button  is-success is-size-4">
        THE SHREDDED GYM
      </a>
    </div>

    <div className="text">
      <h1 className="title  is-size-1 has-text-centered has-text-white">
        {" "}
        <em>CHALLENGE YOUR SELF</em>{" "}
      </h1>
      <h5 className="title is-5 has-text-centered has-text-danger">
        <em>GET YOUR BODY FIT</em>
      </h5>
      <div className="new has-text-white has-text-weight-bold is-size-5 ">
        <h3>A Small River Named Duden Flows BY Their Space And Supplies It </h3>
        <h3>With The Necessary Regelialia</h3>
      </div>

      <div className="buttons field is-grouped has-addons is-centered">
        <p className="control">
          <a
            className="button is-danger is-outlined is-medium "
            href="https://goldsgym.in/our-gyms/phagwara-gt-road/"
          >
            {" "}
            GET STARTED
          </a>
        </p>
        <p className="control">
          <a
            className="button is-danger is-outlined is-medium h"
            href="https://www.shopworldgym.com/products/Bodybuilding_Shirts/?product_id=224"
          >
            MORE INFO
          </a>
        </p>
      </div>
      <style jsx>
        {`
          .text {
            padding-bottom: 25rem;
            padding-top: 19rem;
          }
          .buttons {
            margin-top: 7rem;
          }
          .new {
            margin-top: 9rem;
          }
        `}
      </style>
    </div>
  </div>
);
export default Banner;
