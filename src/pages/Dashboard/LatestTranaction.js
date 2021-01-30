import React from "react"
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTranaction = () => {
  const transactions = [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "5",
      badgeClass: "success",
      paymentStatus: "Interviewing",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "John Richards",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "10",
      badgeClass: "danger",
      paymentStatus: "Finished",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Maxwell Horner",
      link: "#",
    },
  ]

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Job Processing</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th style={{ width: "20px" }}>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        &nbsp;
                      </label>
                    </div>
                  </th>
                  <th>Job Id</th>
                  <th>Company Name</th>
                  <th>Date</th>
                  <th>Total Candidates</th>
                  <th>Interview Status</th>
                  <th>Top Candidate</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, key) => (
                  <tr key={"_tr_" + key}>
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={transaction.id}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={transaction.id}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <Link to="#" className="text-body font-weight-bold">
                        {" "}
                        {transaction.orderId}{" "}
                      </Link>{" "}
                    </td>
                    <td>{transaction.billingName}</td>
                    <td>{transaction.Date}</td>
                    <td>{transaction.total}</td>
                    <td>
                      <Badge
                        className={
                          "font-size-12 badge-soft-" + transaction.badgeClass
                        }
                        color={transaction.badgeClass}
                        pill
                      >
                        {transaction.paymentStatus}
                      </Badge>
                    </td>
                    <td>
                      {transaction.paymentMethod}
                    </td>
                    <td>
                      <Button
                        type="button"
                        color="primary"
                        size="sm"
                        className="btn-rounded waves-effect waves-light"
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default LatestTranaction
