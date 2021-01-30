import React, { useState } from "react"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const questions = [
  {
    id: 0,
    level: "Entry 0 ~ 1 year",
    questions: [
      {
        id: 1,
        content: "Tell me a little bit about yourself."
      },
      {
        id: 2,
        content: "What are your motivations in applying for this position within our organisation?"
      },
      {
        id: 3,
        content: "What do you know about our company?"
      },
      {
        id: 4,
        content: "How has your past skill and\or experience prepared you for this position?"
      },
      {
        id: 5,
        content: "Why are you the perfect candidate for this role?"
      },
      {
        id: 6,
        content: "Please describe your ideal job."
      },
      {
        id: 7,
        content: "Please explain what motivates you."
      },
      {
        id: 8,
        content: "Tell me about your proudest accomplishment."
      },
      {
        id: 9,
        content: "Where do you see yourself in 5 years?"
      },
      {
        id: 10,
        content: "Tell me about a time you saw a problem and the steps you took to correct it."
      },
    ]
  },
  {
    id: 1,
    level: "Level: 1-3 Years",
    questions: [
      {
        id: 1,
        content: "Tell me a little bit about yourself."
      },
      {
        id: 2,
        content: "What are your motivations in applying for this position within our organisation?"
      },
      {
        id: 3,
        content: "What do you know about our company?"
      },
      {
        id: 4,
        content: "What applicable skills, knowledge and experience can you bring to the postion?"
      },
      {
        id: 5,
        content: "What are your long term career goals over the next 5 years?"
      },
      {
        id: 6,
        content: "Tell me about a time you had to work with a coworker who was difficult to work with."
      },
      {
        id: 7,
        content: "Describe your greatest strengths and weaknesses."
      },
      {
        id: 8,
        content: "Tell me about a time you went above and beyond your work scope to achieve success."
      },
      {
        id: 9,
        content: "At times you will be asked to work across many tasks at onece, How do you prioritise your workload?"
      },
      {
        id: 10,
        content: "Tell me about a time you made a mistake and did not deliver to expectations. What was the situation and what did you learn?"
      },
    ]
  },
  {
    id: 2,
    level: "Level: 3-5 Years",
    questions: [
      {
        id: 1,
        content: "Tell me a little bit about yourself."
      },
      {
        id: 2,
        content: "What is your next career move?"
      },
      {
        id: 3,
        content: "What do you know about our company?"
      },
      {
        id: 4,
        content: "Run me through your career history over the past 5 years including the different industry sectors . "
      },
      {
        id: 5,
        content: "Tell me why should we hire you for this position?"
      },
      {
        id: 6,
        content: "Explain how you prioritise your work when everything is a priority."
      },
      {
        id: 7,
        content: "Share an example of a time you were able to motivate a coworker."
      },
      {
        id: 8,
        content: "Walk me through a decision making situation. "
      },
      {
        id: 9,
        content: "Explain to me the ways you are able to successfully resolve a conflict."
      },
      {
        id: 10,
        content: "What steps to you take to ensure you are able to build strong relationships with clients/customers?"
      },
    ]
  }
]


const JobCreate = () => {

  const [level, setLevel] = useState(0);

  const onChangeLevel = (e) => {
    let lvl = parseInt(e.target.value);
    setLevel(lvl);
  }
  const showQuestion = () => {
    return questions[level].questions.map(data => (
      <div key={data.id} className="custom-control custom-checkbox custom-checkbox-primary mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id={"customerCheck" + data.id}
        />
        <label
          className="custom-control-label"
          htmlFor={"customerCheck" + data.id}
        >
          {data.id}. {data.content}
        </label>
      </div>
    ))
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Job" breadcrumbItem="Create Job" />

          <Row>
            <Col lg="12">
              <Card >
                <CardBody>
                  <Form className="mt-4">
                    <FormGroup className="mb-4" row>
                      <Label
                        htmlFor="projectname"
                        className="col-form-label col-lg-2"
                      >
                        Job Title
                      </Label>
                      <Col lg="8">
                        <Input
                          id="title"
                          name="title"
                          type="text"
                          className="form-control"
                          placeholder="Enter Job title..."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label
                        htmlFor="projectdesc"
                        className="col-form-label col-lg-2"
                      >
                        Job Description
                      </Label>
                      <Col lg="8">
                        <textarea
                          className="form-control"
                          id="description"
                          rows="10"
                          placeholder="Enter Project Description..."
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <Label
                        htmlFor="projectname"
                        className="col-form-label col-lg-2"
                      >
                        Company Name
                      </Label>
                      <Col lg="8">
                        <Input
                          id="title"
                          name="title"
                          type="text"
                          className="form-control"
                          placeholder="Enter Company name..."
                        />
                      </Col>
                    </FormGroup>
                    
                    <FormGroup className="mb-4" row>
                      <label
                        htmlFor="projectbudget"
                        className="col-form-label col-lg-2"
                      >
                        Candidate Level
                      </label>
                      <Col lg="10">
                        <select type="select" name="select" className="form-control" onChange={e => onChangeLevel(e)}>
                          {questions.map(data => (
                            <option key={data.id} value={data.id}>{data.level}</option>
                          ))}
                        </select>
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <label
                        htmlFor="projectbudget"
                        className="col-form-label col-lg-2"
                      >
                        Select the question.
                      </label>
                      <Col lg="10">
                        {showQuestion()}
                      </Col>
                    </FormGroup>
                    <FormGroup className="mb-4" row>
                      <label
                        htmlFor="projectbudget"
                        className="col-form-label col-lg-2"
                      >Select Authorization
                      </label>
                      <Col lg="10">
                        <div className="custom-control custom-checkbox custom-checkbox-danger mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customerCheckcitizen"}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"customerCheckcitizen"}
                          >
                            Are you an Australian Citizen?
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox custom-checkbox-danger mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customerCheckauthor"}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"customerCheckauthor"}
                          >
                            Do you have Work Authorization?
                          </label>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                  <Row className="justify-content-end">
                    <Col lg="10">
                      <Button type="submit" color="primary">
                        Create Project
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default JobCreate
