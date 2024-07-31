import "./index.css"
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import handshakeImage from './assets/handshake.jpg';
import indiatree from "./assets/india_tree.jpg";
import globe from "./assets/globe_india.jpg";
import handsoil from "./assets/handsoil.jpg";
import pool from "./assets/pool.jpg";
import trees from "./assets/trees.jpg";
import we_report from "./assets/we_report.jpg";
import community_plan from "./assets/community_planting.jpg";
import partners from "./assets/parterners.jpg";
import Process from "../../Components/process";
import SocialIcons from "../../Components/Social_Icons";
const About=()=>{
      return(
        <div className="about">
          <Navbar/>
            <div className="main_ab">
            <h1>WE ARE ONE TREE PLANTED</h1>
            <h2>A Non Profit Orgainzation focussed on Country's Reforestation</h2>
            <a href="" className="link_ab"> Get in touch</a>
            </div>
            <SocialIcons/>
            <hr style={{
                  width: '90%', 
                  margin: '0 auto',
                  borderTop: '1px solid grey' 
              }} />
            <div className="ourvision_ab">
             <h1>Our Vision</h1>
             <p>We want to make it simple for anyone to help the environment by planting trees. Together we can restore 
             forests, create habitat for biodiversity, and make a positive social impact around the world.</p>
            </div>
            <div className="wanttohelp_ab">
              <h2>WANT TO HELP MAKE A POSITIVE IMPACT TO THE ENVIRONMENT:</h2>
              <span><a href="#" className="link_ab link_ab2">PLANT TREES</a></span>
             </div>
             <div className="ourvision_ab">
              <h1>TOGETHER, PLANTING A FOREST</h1>
              <p>Since 2014, we have planted over 135.5 million trees with 378 partners across 82 countries in North
              America, Latin America, Africa, Asia, Europe and the Pacific.</p>
              <div className="ov1_parent">
                <div className="ov1">
                  <img src={handshakeImage} width="280vw"/>
                  <span className="text-overlay_ab">378+</span>
                  <span>PLANTING PARTNERS</span>
                </div>
                <div className="ov1">
                <img src={indiatree} width="300vw"/>
                  <span className="text-overlay_ab">500+</span>
                  <span>CITIES IN COUNTRY</span>
                </div>
                <div className="ov1">
                <img src={globe} width="300vw"/>
                  <span className="text-overlay_ab">13,578,777+</span>
                  <span>TREES PLANTED</span>
                </div>
              </div>
             </div>
             <div className="process_ab"> 
                  <h1>OUR PROCESS</h1>
             </div>
             <div className="process_ab_2">
              <Process image={handsoil} t1="You Donate" t2="On our Website"/>
              <Process image={pool} t1="We Pool" t2="The Donation"/>
              <Process image={partners} t1="Partners" t2="Grow Sampling"/>
              <Process image={community_plan} t1="Our" t2="Team Planting"/>
              <Process image={trees} t1="Trees" t2="Are monitored"/>
              <Process image={we_report} t1="We Report" t2="Your Impact"/>
             </div>
             <section className="mt-8 px-7">
          <div className="flex flex-col items-center mx-auto select-none text-center  w-full gap-5 ">
            <h2 className="font-bold text-emerald-800 text-3xl">Our Projects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 items-center lg:gap-20 gap-y-3 lg:gap-x-52">
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Uttrakhand.png" alt="Uttrakhand" />
                <span className="font-semibold lg:text-xl">Uttrakhand</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Uttar Pradesh.png" alt="Uttar Pradesh" />
                <span className="font-semibold lg:text-xl">Uttar Pradesh</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Rajasthan.png" alt="Rajasthan" />
                <span className="font-semibold lg:text-xl">Rajasthan</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Punjab.png" alt="Punjab" />
                <span className="font-semibold lg:text-xl">Punjab</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Bihar.png" alt="Bihar" />
                <span className="font-semibold lg:text-xl ">Bihar</span>
              </div>
              <div className="text-center hover:scale-105  sm:hover:scale-110 cursor-pointer">
                <img src="/States/Gujarat.png" alt="Gujarat" />
                <span className="font-semibold lg:text-xl ">Gujarat</span>
              </div>
            </div>
          </div>
        </section>
        <br></br>
            <Footer/>
        </div>
      );
}
export default About;