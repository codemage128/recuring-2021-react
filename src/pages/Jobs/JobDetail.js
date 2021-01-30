import React, { useState } from "react"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import { Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

const JobDetail = () => {
   return (
      <React.Fragment>
         <div className="page-content">
            <Container fluid>
               {/* Render Breadcrumbs */}
               <Breadcrumbs title="Job" breadcrumbItem="View Job" />
               <Row>
                  <Col lg="12">
                     <Card>
                        <CardBody className="mt-4">
                           <p className="h3">Developer Advocate</p>
                           <p className="h5">Iterative, San Francisco, CA</p>
                           <p>
                              We’re a company that makes open source tools for data science and machine learning. You might know us from popular tools like DVC (Data Version Control) and CML (Continuous Machine Learning), or our YouTube channel. Our team is small, remote-first, and passionate about creating best practices for managing the complexities of data science.
                           </p>
                           <p>
                              We’re seeking a Developer Advocate to help us sustain and grow our active, worldwide community!
                           </p>
                           <p>
                              Job description
                              As an open source project, our community is everything. Our code, docs and outreach activities are fueled by community contributions, and user feedback is a huge driver for our product development. We invest heavily in building relationships with data scientists, engineers and developers around the world, from brand new contributors making their first pull request to longtime users working out a special use case.
                           </p>
                           <p>
                              The ideal candidate will:
                              Craft blog posts, release notes, and newsletters to share exciting developments on our projects, amazing contributions, and important technical Q&As.
                              Turn frequently-asked questions in the community into reusable resources, like tutorials and use-cases
                              Be a connector and maintain an engaged presence online. Respond to timely discussions and questions on social media and design shareable, creative campaigns for regular tweets and posts.
                              Enable community members of all skill levels to get involved. Welcome newcomers and encourage creative contributions. When folks make videos, blogs, or projects with our tools, help them boost the signal.
                              Lead community-building events like virtual meetups and present at relevant industry conferences
                              Be analytical and data-driven in creating useful content for the community. Define, report and analyze metrics to understand our community’s needs and interests.
                           </p>
                           <p>
                              Skills we’re looking for
                              Experience in either data science or open source software.
                              Experience blogging or publishing technical content online. Bonus points if it’s related to open source or data science.
                              Experience building and/or managing a technical community.
                              Understanding of Git, Git-flow and CI/CD. You don’t have to be a superuser, but we make tools built around Git and you’ll need to know how to use them.
                              Strong communication skills. Everyone on our team, from engineers to developer advocates, needs to be able to communicate over digital platforms kindly and clearly.
                              Proficient written and spoken English is required.
                           </p>
                           <p>
                              Mega bonus skills
                              Knowledge of our tools and the MLOps space
                              A strong existing network in data science or open source
                           </p>
                           <p>
                              Perks
                              A fully remote job with a competitive salary and benefits package.
                              Our team culture is family-friendly. Our leadership includes several working parents, and our health insurance and unlimited PTO policies are designed with families in mind.
                              This role can grow with you. There are plenty of opportunities for leadership and autonomy in our small team!
                              Impact- you get to work on projects that are used every day by teams around the world! DVC and CML are used by researchers and data science teams across tech, finance, and government organizations.
                              You will get a DeeVee
                           </p>
                           <p className="h4">Level : Level 1 ~ 3 years </p>
                           <p className="h5">Interview Question</p>
                           <p className="h5">- What are your motivations in applying for this position within our organisation?</p>
                           <p className="h5">- What do you know about our company?</p>
                           <p className="h5">- Tell me about a time you had to work with a coworker who was difficult to work with.</p>
                           <p className="h5">- Describe your greatest strengths and weaknesses.</p>
                           <p className="h5">- Tell me a little bit about yourself.</p>
                           <p className="h2">Interview URL : <a target="_blank" href="http://localhost:3000/jobs/12345">http://localhost:3000/jobs/12345</a></p>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </div>
      </React.Fragment>
   )
}

export default JobDetail;