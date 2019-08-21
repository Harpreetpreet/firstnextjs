const Main = () => (
  <section className="section background">
    <div className="container" />
    <div>
      <h1 className=" has-text-centered is-size-4">
        <em>PRICING TABLES</em>
      </h1>
      <h1 className=" has-text-centered is-size-1">
        {" "}
        <em>MEMBERSHIP PLANS</em>
      </h1>
    </div>
    <div className="columns price">
      <div className="column">
        <h1 className="head has-text-centered has-text-weight-semibold">
          ONE DAY TRAINING
        </h1>
        <br />

        <h1 className="dollar one has-text-centered">$</h1>
        <h1 className="num has-text-centered is-size-1 has-text-danger">7</h1>

        <br />
        <p className="func has-text-centered has-text-weight-semibold">
          {" "}
          100% free. Forever
        </p>
        <br />
        <div className="buttons has-addons is-centered ">
          <a className="button is-link is-medium has-text-weight-bold">
            GET STARTED
          </a>
        </div>

        <p className="type has-text-centered has-text-weight-semibold">
          ENJOY ALL THE FEATURES
        </p>
        <br />
        <p className="extra has-text-centered">
          Onetime Access To All Club
          <p>Group Trainer</p>
          <p>Book A Group Class</p>
          <p> Fitness Orientation</p>
        </p>
      </div>

      <div className="column">
        <h1 className="head has-text-centered has-text-weight-semibold">
          PAY EVERY MONTH
        </h1>
        <br />
        <h1 className="dollar two has-text-centered">$</h1>
        <h1 className="num has-text-centered is-size-1 has-text-danger">65</h1>
        <br />
        <p className="func has-text-centered has-text-weight-semibold">
          All features are included
        </p>
        <br />
        <div className="buttons has-addons is-centered">
          <a className="button is-link is-medium has-text-weight-bold">
            GET STARTED
          </a>
        </div>
        <p className="type has-text-centered has-text-weight-semibold">
          ENJOY ALL THE FEATURES
        </p>
        <br />
        <p className="extra has-text-centered">
          Onetime Access To All Club
          <p>Group Trainer</p>
          <p>Book A Group Class</p>
          <p> Fitness Orientation</p>
        </p>
      </div>

      <div className="column">
        <h1 className="head has-text-centered has-text-weight-semibold">
          1 YEAR MEMBERSHIP
        </h1>
        <br />
        <h1 className="dollar three has-text-centered">$</h1>
        <h1 className="num has-text-centered is-size-1 has-text-danger">125</h1>
        <br />
        <p className="func has-text-centered has-text-weight-semibold">
          All features are included
        </p>
        <br />
        <div className="buttons has-addons is-centered ">
          <a className="button is-link is-medium  has-text-weight-bold">
            GET STARTED
          </a>
        </div>
        <p className="type has-text-centered has-text-weight-semibold">
          {" "}
          ENJOY ALL THE FEATURES
        </p>
        <br />
        <p className="extra has-text-centered">
          Onetime Access To All Club
          <p>Group Trainer</p>
          <p>Book A Group Class</p>
          <p> Fitness Orientation</p>
        </p>
      </div>
    </div>

    <style jsx global>
      {`
        .background {
          background-color: gainsboro;
        }
        .price {
          margin-top: 3rem;
        }
        .num {
          margin-top: -2rem;
        }
        .one {
          margin-left: -3rem;
        }
        .two {
          margin-left: -4rem;
        }
        .three {
          margin-left: -6rem;
        }
      `}
    </style>
  </section>
);
export default Main;
