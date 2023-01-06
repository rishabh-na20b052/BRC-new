import React from 'react';
import logo from '../../assets/logo_outer.png';
import { Parallax } from 'react-parallax';
import './Home.css';
import Grid from '@mui/material/Grid'
import Slide from '../../components/slide/slides';





export default function Home() {



  return (
    <div className="home">

      <section className="sec1">

        <div className="follow">
          <a href="https://www.instagram.com/bsaiitm/" ><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/biotechresearchclubiitmadras" ><i className="fab fa-facebook"></i></a>
          <a href="https://chat.whatsapp.com/AnLJuBtdjXP5ltT8dtlLrR" ><i className="fab fa-whatsapp"></i></a>
        </div>
        <Parallax
          style={{ width: "100vw" }}
          bgImage={require('../../assets/green-2594952_1920.jpg')}
          bgImageAlt="the dog"
          strength={300}
        >


          <Grid container alignItems="center" justifyContent="center" className="row1">
          
            <Grid item xs={12} lg={4}>
              <div className="logo-div">
                <img src={logo} className="logo" alt="nooooo" />
                <p className="logo-text">BIOTECH <br /> RESEARCH <br />CLUB</p>
              </div>
            </Grid>


            <Grid item xs={12} lg={4}>

             
              <div delay={500} duration={700} bottom cascade>
                <div className="nameiitm">IIT MADRAS</div>
              </div>
            </Grid>

          </Grid>
        </Parallax>

      </section>



      <section className="sec2">


        <p className="welcome">
          <span>Welcome</span>
          <hr style={{ width: "36%", marginLeft: "32%", opacity: "0.7" }} />
          <div style={{ maxWidth: "55rem" }}>
            We are a bunch of enthusiasts who promote, discuss and encourage research in bio and allied fields! We organise talks, quizzes and have a monthly themed newsletter highlighting some upcoming conferences/talks and articles by students!
          </div>
        </p>


      </section>



      <section className="sec3">
          <div className="highlights">Highlights</div>

        <Grid container justifyContent="center">
          
          <Grid item sm={12} md={11} style={{ overflow: "hidden" }}>

            <Slide />

          </Grid>
        </Grid>
      </section>

      <section className="sec4">

        <Parallax
          style={{ width: "100vw" }}
          bgImage={require('../../assets/bush.jpg')}
          bgImageAlt="the dog"
          strength={300}
        >


          <Grid container style={{ padding: " 40px 0 100px 0", marginTop: "50px", width: "100%", justifyContent: "center" }}>


            <Grid item xs={12} md={5} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              
                <div className="find">Find Us</div>
              
              
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <a href="https://www.instagram.com/bsaiitm/" ><i className="fab fa-instagram"></i></a>
                  <a href="https://www.facebook.com/biotechresearchclubiitmadras" ><i className="fab fa-facebook"></i></a>
                  <a href="mailto:biotechresearchclubiitm@gmail.com" ><i className="fas fa-envelope"></i></a>
                  <a href="https://chat.whatsapp.com/AnLJuBtdjXP5ltT8dtlLrR" ><i className="fab fa-whatsapp"></i></a>
                </div>
              

            </Grid>

            <Grid item xs={12} md={8} lg={7} xl={6} style={{ backgroundColor: "rgba(172, 255, 47, 0.2)", border: "1px solid greenyellow" }}>
              <h2 style={{ padding: "15px", color: "greenyellow" }}>Get updates on email.. </h2>
              <form style={{ fontSize: "1.7rem", width: "80%", margin: "auto", padding: "25px 0 40px 0" }}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" style={{ fontSize: "1.8rem", color: "#00354e", fontWeight: "600" }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <br />
                  <small id="emailHelp" className="form-text">Subscribe to our mailing list and we will keep you updated about our events, newsletters, etc. We'll never share your email with anyone else.</small>
                </div>
                
                  <div className="btndiv">
                    <button type="button" className="mybtn">Subscribe</button>
                  </div>
                
              </form>
            </Grid>
          </Grid>
        </Parallax>
      </section>
    </div>
  )
}
