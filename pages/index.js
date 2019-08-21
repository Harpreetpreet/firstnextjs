
import Layout from "../components/Layout"
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Main from "../components/Main";
import Search from "../components/Search";
import Footer from "../components/Footer"
import Head from "next/head"

export default () => (
  <div>
    <div className="test">
        <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Head>
    <Header/>
   <Banner/>
   </div>
   <Card />
   <Main />
   <Search />
   <Footer />
   
   <style jsx>{`
     .test{
      background:url("https://colorlib.com/preview/theme/muscle/images/bg_2.jpg");
      background-repeat:no-repeat;
      background-size: cover;
      height: 65rem;
  }
   
   `}</style>
   </div>
);


