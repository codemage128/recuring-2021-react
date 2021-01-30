import React, { useState } from "react"
import { Button, Card, CardBody, CardTitle, CardSubtitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

const JobInterview = () => {
   return (
      <React.Fragment>
         <div className="page-content">
            <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Welcome to Schabu Interview</CardTitle>
                        <CardSubtitle className="mb-3">
                           please fill out all information.
                        </CardSubtitle>
                        <div className="form-group row">
                           <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                           >
                              Name
                           </label>
                           <div className="col-md-10">
                              <input
                                 className="form-control"
                                 type="text"
                                 placeholder="Type your Full Name"
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                           >
                              Email
                           </label>
                           <div className="col-md-10">
                              <input
                                 className="form-control"
                                 type="text"
                                 placeholder="Type your Email Address"
                              />
                           </div>
                        </div>
                        <div className="form-group row">
                           <label
                              htmlFor="example-text-input"
                              className="col-md-2 col-form-label"
                           >
                              Phone Number(include the country code.)
                           </label>
                           <div className="col-md-10">
                              <input
                                 className="form-control"
                                 type="text"
                                 placeholder="Type your Phone Number"
                              />
                           </div>
                        </div>
                        <div className="form-group text-center">
                           <button className="btn btn-primary">Submit</button>
                        </div>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </div>
      </React.Fragment>
   )
}

export default JobInterview;