/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col , Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h3>Explore Projects</h3>
        </div>
        {/* <div id="typography">
          <Row>
            <div className="typography-line">
              <h1>
                <span className="note">Header 1</span>
                Thinking in textures
              </h1>
            </div>
            <div className="typography-line">
              <h2>
                <span className="note">Header 2</span>
                Thinking in textures
              </h2>
            </div>
            <div className="typography-line">
              <h3>
                <span className="note">Header 3</span>
                Thinking in textures
              </h3>
            </div>
            <div className="typography-line">
              <h4>
                <span className="note">Header 4</span>
                Thinking in textures
              </h4>
            </div>
            <div className="typography-line">
              <h5>
                <span className="note">Header 5</span>
                Thinking in textures
              </h5>
            </div>
            <div className="typography-line">
              <h6>
                <span className="note">Header 6</span>
                Thinking in textures
              </h6>
            </div>
            <div className="typography-line">
              <p>
                <span className="note">Paragraph</span>
                Thinking in textures
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Quote</span>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <br />
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="typography-line">
              <span className="note">Muted text</span>
              <p className="text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Primary text</span>
              <p className="text-primary">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Success text</span>
              <p className="text-success">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Info text</span>
              <p className="text-info">
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Warning text</span>
              <p className="text-warning">
                Etiam porta sem malesuada magna mollis euismod.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Danger text</span>
              <p className="text-danger">
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="typography-line">
              <h2>
                <span className="note">Small tag</span>
                Header with small subtitle <br />
                <small>".small" is a tag for the headers</small>
              </h2>
            </div>
          </Row>
        </div> */}
        <br />
        <div id="images">
          <Container>
            <Row>
              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>WheelCare2</h6>
                  <p className="text-info">Jack Jiang</p>
                </CardBody>
                  <Link to="/projects/WheelCare2"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/preview.jpg")}
                  /> </Link>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/face.jpg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>Another well designed caring solution for both carers and those with mobility difficulties/elderlies are always connected.</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>

              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>The ADA project</h6>
                  <p className="text-info">Jenny</p>
                </CardBody>
                  <a href="#"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/ada.jpg")}
                  /> </a>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/jenny.jpg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>A photographic celebration of the profound changes made possible by the Americans with Disabilities Act.</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>
              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>Film project</h6>
                  <p className="text-info">Eva</p>
                </CardBody>
                  <a href="#"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/singer.jpg")}
                  /> </a>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/eva.jpg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>A dynamic company of actors with a physical disability paired with able bodied actors needs your help to make our short film!</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>
              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>Ski Glove for Disabled</h6>
                  <p className="text-info">Ryan</p>
                </CardBody>
                  <a href="#"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/ski.jpg")}
                  /> </a>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/ryan.jpg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>We invented an adaptive ski glove that allows disabled skiers with limited hand function to hold their outriggers.</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>
              
            

              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>SUPPORTING DISABILITIES</h6>
                  <p className="text-info">Phoebe</p>
                </CardBody>
                  <a href="#"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/good.jpg")}
                  /> </a>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/jen.jpg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>I'm trying to improve the lives of people with disabilities by developing more accessible digital products. Thank You to everyone that supported my kickstarter.</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>

              <Col md="3" sm="6"> <Card>
                <CardBody>
                  <h6>Mullen’s Apple Sauce</h6>
                  <p className="text-info">Jeremy</p>
                </CardBody>
                  <a href="#"> <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/WheelCare2/jam.jpg")}
                  /> </a>
                  <div className="img-details"> <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/WheelCare2/jeremy.jpeg")}
                    />
                  </div></div>
                <CardBody>
                  <CardText>Chicago’s Finest Craft Apple Sauce, Brought to You by Disabled Chicago Police Officer, Jim Mullen. “Like Apple Pie Without the Crust!”</CardText>
                  <CardLink href="#" className="text-info">See Project</CardLink>
                  <CardLink href="#" className="text-info">See Author</CardLink>
                </CardBody>
              </Card> </Col>
              {/* <Col className="mr-auto ml-auto" md="2" sm="3">
                <h4 className="images-title">Circle Image</h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg")}
                />
                <p className="text-center">Brigitte Bardot</p>
              </Col> */}
              {/* <Col className="mr-auto" md="2" sm="3">
                <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <p className="text-center">John Keynes</p>
              </Col> */}
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionTypography;
