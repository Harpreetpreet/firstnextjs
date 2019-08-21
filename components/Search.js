const Search = () => (
    <div>
      <div className="search container">
        <div className="column is-4 is-offset-one-third">
          <h1 className="per has-text-centered has-text-white is-size-1">25%
           <span className="dis has-text-centered has-text-danger is-size-1"> DISCOUNT</span>
          </h1>
          
          <br />
          <h1 className="coupn has-text-centered is-size-5 has-text-light">
            Subscribe to our newsletter and get a coupon code!
          </h1>
          
        </div> 
        <div className="column is-6 is-offset-3">
        <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input is-large" type="text" placeholder="Your Email"/>
  </p>
  <p className="control">
    <a className="button is-large is-info">
      <h1 className="font is-size-5"> SUBSCRIBE</h1>
    </a>
  </p>
</div>
</div>
  
        <style jsx global>
          {`
            .search {
              background-image: url(https://colorlib.com/preview/theme/fitzone/assets/images/discount-bg.jpg);
              background-size: cover;
              height: 30rem;
              background-repeat: no-repeat;
              margin-top: 5rem;
            }
            .button {
              padding-left: 1.7rem;
              padding-right: 1.7rem;
            }
            .
            .switch:hover {
              background: transparent;
            }
            .per{
              padding-top:6rem;
            }
          `}
        </style>
      </div>
    </div>
  );
  export default Search;
  