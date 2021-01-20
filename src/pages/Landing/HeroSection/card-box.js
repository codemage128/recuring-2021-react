import PropTypes from 'prop-types'
import React from "react"
import { Card, CardBody, Col, Media, CardImg, CardTitle, CardText, CardHeader } from "reactstrap"

import logodark from "../../../assets/images/logo-dark.png"
const CardBox = props => {
  return (
    <React.Fragment>
      {props.coins.map((coin, key) => (
        <Col md="4" key={key}>
          <Card className="border" style={{ height: "300px" }}>
            <CardHeader className="bg-transparent">
              <h1 className={"h1-landing-header text-center text-" + coin.color}>
                <i className={coin.icon}></i>
              </h1>
            </CardHeader>
            <CardBody>
              <h3 className="text-center" > {coin.description} </h3>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  )
}

CardBox.propTypes = {
  coins: PropTypes.array
}

export default CardBox
