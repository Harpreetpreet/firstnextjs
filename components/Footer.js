const Footer = () => (
  <div className="foot">
      <div className="columns">
  <div className="column">
  <div className="about font">
          <h1>ABOUT US</h1>
          <br />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <br />
          <div> <a className="awesom ">
            <i className="fab fa-twitter field is-grouped" />
             <i className="fab fa-facebook-f field is-grouped" />
          <i className="fab fa-instagram field is-grouped" />
            </a>
          </div>

        </div>
  </div>
  <div className="column">
  <div className="recent font">
          <h1>RECENT BLOG</h1>
          <br />
          <a>
            <img
              src="https://colorlib.com/preview/theme/muscle/images/image_1.jpg "
              className="size"
            />
          </a>
       <br/>
          <a>
            <img
              src="https://colorlib.com/preview/theme/muscle/images/image_2.jpg"
              className="size"
            />
          </a>
        </div>
  </div>
  <div className="column">
  <div className="service font">
          <h1>SERVICES</h1>
          <br />
          <a>Boost Your Body</a>
          <br />
          <a>Achieve Your Goal</a>
          <br />
          <a>Analyze Your Goal</a>
          <br />
          <a>Improve Your Performance</a>
        </div>
  </div>
  <div className="column">
  <div className="ques font">
          <h1>HAVE A QUESTIONS?</h1>
          <br />
          UNITED STATE OF ATTA
          <p>GORAYA (JALANDHAR)</p>
          <br />
          +91 9878448082
          <br />
          Preet4x4@outlook.com
        </div>
      </div>
  </div>
     <div className="copy has-text-centered">
     Copyright ©2019 All rights reserved | This template is made with  by Harpreet
     </div>
      <style jsx>
        {`
          .foot {
            background-color: black;
            margin-top: 3rem;
            height: 55rem;
          }
          .size {
            height: 3rem;
            margin-top: 1rem;
          }
          a:hover {
            color: red;
          }
          .font {
            font-weight: 700;
            color: white;
          }
         .copy{
           margin-top:3rem;
         }
        `}
      </style>
      </div>
  );
  export default Footer;
  