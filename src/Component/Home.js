// Importing required dependencies and components
import React from "react";
import MainNav from "./MainNav"; // Navigation bar component
import Anima from "./Anima"; // Animation component
import { Row, Col, Container } from "react-bootstrap"; // Bootstrap components for layout
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
// import PastWork from "./PastWork"; // Past Work section component
import img from "./image/EC0543FF-F3DB-4B6A-9AC7-2E3E97D524AB.PNG"; // Importing an image
import Contact from "./Contact"; // Contact section component

// Home component definition
function Home() {
  return (
    <>
      {/* Anchor for the home section */}
      <a name="home"></a> {/* Main navigation bar */}
      <div>
        <MainNav />
      </div>
      {/*Intro section area */}
      <div className="main">
        {" "}
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row className="main1">
            {" "}
            <Col md={6}>
              {" "}
              <div className="note">
                <h1>St Manuel</h1>
                <p>
                  My name is Uzor Emmanuel Chidiebube am a Crypto and Forex
                  trader, Web developer and a business Consultants
                </p>
                {/* Link to the "more" section */}
                <a href="#more" className="link2">
                  Read More
                </a>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={5} className="animas">
              {" "}
              <div>
                {/* Animation section */}
                <Anima />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* "About Me" section */}
      <div>
        {/* Anchor for more section */}
        <a name="more"></a>
        <div className="about">
          {" "}
          <p>GET TO KNOW MORE</p>
          <a name="about"></a>
          <h1>About Me</h1>
        </div>

        <div className="about1">
          {" "}
          <Container>
            <Row>
              {/* My image section */}
              <Col lg={4}>
                <img src={img} alt="" />
              </Col>
              <Col lg={8}>
                {" "}
                <div>
                  {/* Details about experience and education */}
                  <div className="icon1">
                    <Row>
                      {/* Experience section */}
                      <Col lg={5} className="col1">
                        {" "}
                        <div className="exp">
                          <i class="fa-solid fa-trophy fa-lg"></i>
                          <h5>Experience</h5>
                          <p>
                            2yrs in web developer
                            <br />
                            4yrs in Crypto trading
                            <br />
                            1yr in Forex Trading
                            <br />
                            2yrs in Business Consultant
                            <br /> 1yr in IT technician/specialist{" "}
                          </p>
                        </div>
                      </Col>
                      <Col lg={2}></Col>
                      {/* Education section */}
                      <Col lg={5} className="col1">
                        {" "}
                        <div className="exp">
                          <i class="fa-solid fa-school fa-lg"></i>
                          <h5>Education</h5>
                          <ol>
                            <li>
                              National Dipoloma in Steel Fabrication engineering
                              Technology.
                            </li>
                            <li>Dipoloma in full sack developer.</li>
                          </ol>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  {/* About me description */}
                </div>
              </Col>
              <p>
                My name is Uzor Emmanuel Chidiebube. Am a Web developer, Crypto
                trader/Consultant, A Forex trader, A Business Consultant and
                also An IT technician/specialist. i have a good number of
                experience matching the fact i worked as an Entrepreneur and
                have tutor a lot of people.
              </p>
            </Row>
          </Container>
        </div>
      </div>
      {/* Knowledge and skills section */}
      <div>
        {/* Anchor for the knowledge section */}
        <a name="knowledge"></a>

        <div className="experience-title">
          <p>Little view of my</p>
          <h1> Knowledge</h1>
        </div>
        <div className="experience">
          {" "}
          <Container>
            <Row>
              {/* Skills as a Full Stack Developer */}
              <Col lg={3} className="col2">
                <div className="experience-skill">
                  {" "}
                  <div>
                    <h5>Full Sack Web developer</h5>
                  </div>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>ReactJS</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                      <li>MySQL</li>
                      <li>Git</li>
                      <li>GitHub</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={1}></Col>
              {/* Skills as a Business Consultant */}
              <Col lg={4} className="col2">
                <div className="experience-skill">
                  {" "}
                  <div>
                    <h5>Business Consultant</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Teamwork</li>
                      <li>Research Skills</li>
                      <li>Creative thinking</li>
                      <li>Emotional Intelligence</li>
                      <li>Sales and Marketing Knowledge</li>
                      <li>Networking and Relationship Management</li>
                      <li>Project Management Skills</li>
                      <li>Organization and time management</li>
                      <li>Leadership</li>
                      <li>Creativity and Innovation</li>
                      <li>Presentation skills</li>
                      <li>Adaptability</li>
                      <li>Problem-solving</li>
                      <li>Leadership and Influencing Skills</li>
                      <li>Communication skills</li>
                      <li>Analytical reasoning</li>
                      <li>Industry Knowledge</li>
                      <li>Technical Proficiency</li>
                      <li>Financial Acumen</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={1}></Col>
              {/* Skills as a Crypto/Forex Trader */}
              <Col lg={3} className="col2">
                <div className="experience-skill">
                  {" "}
                  <div>
                    <h5>Crypto/Forex Trader</h5>
                  </div>
                  <div>
                    <ul>
                      <li>SMC</li>
                      <li>Price Action</li>
                      <li>Order Flow</li>
                      <li>Chart Pattern</li>
                      <li>Technical Analysis</li>
                      <li>Supply and Demand </li>
                      <li>Fib Retracement</li>
                      <li>Support and Resistances</li>
                      <li>Risk management</li>
                      <li>Psychology of trading </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Past work component */}
        <div>
          {" "}
          {/* Anchor for the project section */}
          <a name="project"></a>
          {/* <PastWork /> */}
        </div>
      </div>
      {/* Footer section */}
      <footer>
        {/* Anchor for the contact section */}
        <a name="contact"></a>
        <div className="footer-into">
          {" "}
          <p>Get in touch</p>
          <h1>Contact Me</h1>
        </div>
        <hr />
        <div className="footer">
          <Contact />
        </div>
        {/* Social media links */}
        <div className="footer-social">
          {" "}
          <div>
            {" "}
            <a href="https://www.instagram.com/st_manuel1" target="_black">
              <i
                className="fa-brands fa-square-instagram fa-lg"
                style={{ color: "#000", fontSize: 30 }}
              ></i>
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/emmanuel-chidiebube-uzor"
              target="_black"
            >
              <i
                className="fa-brands fa-linkedin fa-lg"
                style={{ color: "#000", fontSize: 30 }}
              ></i>
            </a>
          </div>
          <div>
            {" "}
            <a href="https://t.me/stmempire" target="_black">
              <i
                className="fa-brands fa-telegram fa-lg"
                style={{ color: "#000", fontSize: 30 }}
              ></i>
            </a>
          </div>
          <div>
            {" "}
            <a href="https://github.com/spelzi" target="_black">
              <i
                className="fa-brands fa-square-github fa-lg"
                style={{ color: "#000", fontSize: 30 }}
              ></i>
            </a>
          </div>
          <div>
            {" "}
            <a href="https://x.com/st_manuel1" target="_black">
              <i
                className="fa-brands fa-square-twitter fa-lg"
                style={{ color: "#000", fontSize: 30 }}
              ></i>
            </a>
          </div>
        </div>
        {/* Scroll to top link */}
        <div className="to-up">
          {" "}
          {/* Scroll to top link */}
          <a href="#home">
            <i
              className="fa-solid fa-up-long fa-bounce fa-lg"
              style={{ color: "#000" }}
            ></i>
          </a>
        </div>
      </footer>{" "}
    </>
  );
}

export default Home;
