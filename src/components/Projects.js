import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/digdaya1.jpg";
import projImg2 from "../assets/img/zantara1.jpg";

import projImg22 from "../assets/img/revenant1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UGM DIGDAYA",
      description: "Agus, Bagas, Evan, Melvin, Zidan",
      imgUrl: projImg1,
    },
    {
      title: "UGM ZANTARA",
      description: "Aji, Dion, Rafi, Mido, Bausa, Zakky, Andrew",
      imgUrl: projImg2,
    },
  
  ];
  const projects3 = [
    {
      title: "GME REVENANT",
      description: "Rendi, Bimo, Chay, Faiz",
      imgUrl: projImg22,
    },

  
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MLBB Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PUBGM Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Valorant Team</Nav.Link>
                    </Nav.Item>
                  </Nav>


                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                  
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row className="justify-content-center">
                  
                  {
                    projects3.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
