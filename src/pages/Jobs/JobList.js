import React from "react"

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const JobList = () => {
   return (
      <React.Fragment>
         <div className="page-content">
            <div className="container-fluid">
               <Breadcrumbs title="Job" breadcrumbItem="Job List" />
               <Row>
                  <Col>
                     <Card>
                        <CardBody>
                           <Row>
                              <Col md={5}>
                                 Search
                              </Col>
                              <Col md={5}>
                                 Pagination
                              </Col>
                              <Col md={2} className="text-right">
                                 <a href="/job-create" className="btn btn-primary btn-block">New job</a>
                              </Col>
                           </Row>

                           <div className="table-rep-plugin mt-3">
                              <div
                                 className="table-responsive mb-0"
                                 data-pattern="priority-columns"
                              >
                                 <Table
                                    id="tech-companies-1"
                                    className="table table-striped table-bordered"
                                 >
                                    <Thead>
                                       <Tr>
                                          <Th>Company</Th>
                                          <Th>Job Title</Th>
                                          <Th>Company Name</Th>
                                          <Th>Action</Th>
                                       </Tr>
                                    </Thead>
                                    <Tbody>
                                       <Tr>
                                          <Th>
                                             Image
                                          </Th>
                                          <Td>
                                             <a href="/job-detail">
                                                Senior full stack developer
                                             </a>
                                          </Td>
                                          <Td>731.10</Td>
                                          <Td>
                                             <button className="btn btn-danger btn-sm">delete</button>
                                          </Td>
                                       </Tr>
                                    </Tbody>
                                 </Table>
                              </div>
                           </div>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </div>
      </React.Fragment>
   )
}

export default JobList
