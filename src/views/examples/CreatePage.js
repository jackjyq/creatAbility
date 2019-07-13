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

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  Form,
  FormText
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
      {/* <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container> */}

        <Container>
          <div className="owner">
            {/* <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              />
            </div> */}
            <div className="name">
              <h4 className="title">
                Create your Project <br />
              </h4>
              {/* <h6 className="description">Music Producer</h6> */}
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                if you could not find a suitable project, just create a new one
              </p>
              <br />
              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> */}
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    For User
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    For Creator
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    For Sponsor
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Contact Detail
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" >
                    <ForUser />
            </TabPane>

            <TabPane  tabId="2" >
                    <ForCreator />
            </TabPane>

            <TabPane  tabId="3" >
                <ForSponsors />
            </TabPane>

            <TabPane  tabId="4" >
                <ContactDetails />
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}


function ForUser() {
  return (
      <Row> <Col sm={{ size: 6, order: 2, offset: 3 }}> <Form>
      <h3>Basic Information</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Project Name</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Backgroud Image</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Brief Overview</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Video Link</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <h3>Section 1</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Icon</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Decription</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Link</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <h3>Section 2</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Icon</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Decription</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Link</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <h3>Section 3</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Icon</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Decription</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Link</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <h3>Section 4</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Icon</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Decription</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Link</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form> </Col> </Row>
  )
}


function ForCreator() {
  return (
      <Row> <Col sm={{ size: 6, order: 2, offset: 3 }}> <Form>
      <h3>Technical Details</h3>
      <h3></h3>
      <FormGroup row>
          <Label for="exampleFile" sm={2}>Add Files</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Add Details</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Add Links</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form> </Col> </Row>
  )
}

function ForSponsors() {
  return (
      <Row> <Col sm={{ size: 6, order: 2, offset: 3 }}> <Form>
      <h3>Donation Detail</h3>
      <h3></h3>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Donation Description</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Add Links</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form> </Col> </Row>
  )
}



function ContactDetails() {
  return (
      <Row> <Col sm={{ size: 6, order: 2, offset: 3 }}> <Form>
      <h3>Contact Details</h3>
      <h3></h3>
       <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>       <FormGroup row>
          <Label for="exampleEmail" sm={2}>Mobile</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>       <FormGroup row>
          <Label for="exampleEmail" sm={2}>Work Phone</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Country</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>State</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Suburb</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Postcode</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Address Line 1</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Address Line 2</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
      <FormGroup row>
          <Label for="exampleEmail" sm={2}>Address Line 3</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail"  />
          </Col>
      </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form> </Col> </Row>
  )
}

export default ProfilePage;
