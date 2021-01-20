import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { map } from "lodash"
import {
   Badge,
   Col,
   Container,
   DropdownItem,
   DropdownMenu,
   DropdownToggle,
   Row,
   Table,
   UncontrolledDropdown,
   UncontrolledTooltip,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Image
import images from "assets/images"
import companies from "assets/images/companies"

// import { getProjects } from "store/actions"

const JobList = props => {
   // const { projects, onGetProjects } = props

   const projects = [
      {
         id: 0,
         img: "img1",
         name: "Skote Dashboard UI",
         description:
            "Separate existence is a myth. For science, music, sport, etc.",
         status: "Completed",
         color: "primary",
         dueDate: "12 Oct, 2019",
         commentsCount: 106,
         team: [
            {
               id: 1,
               img: "avatar2",
               name: "Daniel Canales",
               skills: [
                  { id: 1, name: "Frontend" },
                  { id: 2, name: "UI" },
               ],
            },
            {
               id: 2,
               img: "avatar1",
               name: "Jennifer Walker",
               skills: [{ id: 1, name: "UI/UX" }],
            },
            {
               id: 3,
               img: "Null",
               name: "Carl Mackay",
               skills: [{ id: 1, name: "Backend" }],
            },
            {
               id: 4,
               img: "avatar4",
               name: "Janice Cole",
               skills: [
                  { id: 1, name: "Frontend" },
                  { id: 2, name: "UI" },
               ],
            },
            {
               id: 5,
               img: "Null",
               name: "Tony Brafford",
               skills: [{ id: 1, name: "Backend" }],
            },
         ],
         startDate: "08 Sept, 2019",
         projectDetails: {
            description:
               "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
            points: [
               "To achieve this, it would be necessary",
               "Separate existence is a myth.",
               "If several languages coalesce",
            ],
         },
         files: [
            { name: "Skote Landing.Zip", size: "3.25 MB", link: "#" },
            { name: "Skote Admin.Zip", size: "3.15 MB", link: "#" },
            { name: "Skote Logo.Zip", size: "2.02 MB", link: "#" },
            { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
         ],
         comments: [
            {
               id: 1,
               username: "David Lambert",
               userImg: "avatar2",
               comment: "Separate existence is a myth.",
            },
            {
               id: 2,
               username: "Steve Foster",
               userImg: "avatar3",
               comment: "@Henry To an English person it will like simplified",
               reply: {
                  username: "Jeffrey Walker",
                  comment: "as a skeptical Cambridge friend",
               },
            },
            {
               id: 3,
               username: "Steven Carlson",
               comment: " Separate existence is a myth.",
            },
         ],
      },]

   // useEffect(() => {
   //    onGetProjects()
   // }, [onGetProjects])

   return (
      <React.Fragment>
         <div className="page-content">
            <Container>
               <Breadcrumbs title="Jobs" breadcrumbItem="Jobs List" />
               <Row>
                  <Col lg="12">
                     <div className="">
                        <div className="table-responsive">
                           <Table className="project-list-table table-nowrap table-centered table-borderless">
                              <tbody>
                                 {map(projects, (project, index) => (
                                    <tr key={index}>
                                       <td>
                                          <img
                                             src={companies[project.img]}
                                             alt=""
                                             className="avatar-sm"
                                          />
                                       </td>
                                       <td>
                                          <h5 className="text-truncate font-size-14">
                                             <Link
                                                to={`/job-overview/${project.id}`}
                                                className="text-dark"
                                             >
                                                {project.name}
                                             </Link>
                                          </h5>
                                          <p className="text-muted mb-0">
                                             {project.description}
                                          </p>
                                       </td>
                                       <td>
                                          <button className="btn btn-outline-primary">Apply</button>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           </Table>
                        </div>
                     </div>
                  </Col>
               </Row>

               <Row>
                  <Col xs="12">
                     <div className="text-center my-3">
                        <Link to="#" className="text-success">
                           <i className="bx bx-loader bx-spin font-size-18 align-middle mr-2" />
                  Load more
                </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </React.Fragment>
   )
}

// JobList.propTypes = {
//    // projects: PropTypes.array,
//    // onGetProjects: PropTypes.func,
// }

// const mapStateToProps = ({ projects }) => ({
//    projects: projects.projects,
// })

// const mapDispatchToProps = dispatch => ({
//    onGetProjects: () => dispatch(getProjects()),
// })

// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(withRouter(JobList))
export default JobList